param(
  [Parameter(Mandatory = $true)]
  [string]$Source,
  [string]$Destination = "src/features/artykuly/data/articles.json"
)

Add-Type -AssemblyName System.IO.Compression.FileSystem

function Convert-ToSlug([string]$Value) {
  $normalized = $Value.ToLowerInvariant().Replace([char]0x0142, 'l').Normalize([Text.NormalizationForm]::FormD)
  $letters = -join ($normalized.ToCharArray() | Where-Object {
    [Globalization.CharUnicodeInfo]::GetUnicodeCategory($_) -ne [Globalization.UnicodeCategory]::NonSpacingMark
  })
  return ($letters -replace '[^a-z0-9]+', '-').Trim('-')
}

$archive = [IO.Compression.ZipFile]::OpenRead((Resolve-Path -LiteralPath $Source))
try {
  $entry = $archive.GetEntry('word/document.xml')
  $reader = [IO.StreamReader]::new($entry.Open())
  try { [xml]$document = $reader.ReadToEnd() } finally { $reader.Dispose() }
} finally { $archive.Dispose() }

$namespaces = [Xml.XmlNamespaceManager]::new($document.NameTable)
$namespaces.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$articles = [Collections.Generic.List[object]]::new()
$current = $null

foreach ($paragraph in $document.SelectNodes('//w:body/*', $namespaces)) {
  if ($paragraph.LocalName -eq 'tbl') {
    if (-not $current) { continue }
    $rows = [Collections.Generic.List[object]]::new()
    foreach ($row in $paragraph.SelectNodes('./w:tr', $namespaces)) {
      $cells = [Collections.Generic.List[string]]::new()
      foreach ($cell in $row.SelectNodes('./w:tc', $namespaces)) {
        $cellText = (($cell.SelectNodes('.//w:t', $namespaces) | ForEach-Object { $_.InnerText }) -join '').Trim()
        $cells.Add($cellText)
      }
      $rows.Add($cells)
    }
    $current.blocks.Add([ordered]@{ type = 'table'; rows = $rows })
    continue
  }
  if ($paragraph.LocalName -ne 'p') { continue }
  $text = (($paragraph.SelectNodes('.//w:t', $namespaces) | ForEach-Object { $_.InnerText }) -join '').Trim()
  if (-not $text) { continue }
  $styleNode = $paragraph.SelectSingleNode('./w:pPr/w:pStyle', $namespaces)
  $style = if ($styleNode) { $styleNode.GetAttribute('val', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main') } else { 'TextBody' }

  if ($style -eq 'Heading1') {
    if ($current) { $articles.Add($current) }
    $current = [ordered]@{ slug = Convert-ToSlug $text; title = $text; excerpt = ''; readingMinutes = 1; blocks = [Collections.Generic.List[object]]::new() }
    continue
  }
  if (-not $current) { continue }

  $type = switch ($style) {
    'Heading2' { 'heading' }
    'Heading3' { 'subheading' }
    'Quotations' { 'quote' }
    default { 'paragraph' }
  }
  if (-not $current.excerpt -and $type -eq 'paragraph') {
    $current.excerpt = if ($text.Length -gt 220) { $text.Substring(0, 217).TrimEnd() + '...' } else { $text }
  }
  $current.blocks.Add([ordered]@{ type = $type; text = $text })
}
if ($current) { $articles.Add($current) }

foreach ($article in $articles) {
  $blockText = $article.blocks | ForEach-Object {
    if ($_.text) { $_.text } elseif ($_.rows) { ($_.rows | ForEach-Object { $_ -join ' ' }) -join ' ' }
  }
  $wordCount = (($blockText -join ' ') -split '\s+' | Where-Object { $_ }).Count
  $article.readingMinutes = [Math]::Max(1, [Math]::Ceiling($wordCount / 210))
}

$destinationPath = Join-Path (Get-Location) $Destination
$destinationFolder = Split-Path -Parent $destinationPath
if (-not (Test-Path -LiteralPath $destinationFolder)) { New-Item -ItemType Directory -Path $destinationFolder | Out-Null }
$json = $articles | ConvertTo-Json -Depth 8
[IO.File]::WriteAllText($destinationPath, $json, [Text.UTF8Encoding]::new($false))
Write-Host "Imported $($articles.Count) articles to $Destination"
