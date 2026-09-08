# Artykuly maintenance guide

The article page reads its content from:

```text
src/features/artykuly/data/articles.json
```

The file is generated from a Word document. The document should use these Word styles:

```text
Heading 1  - article title
Heading 2  - main section heading
Heading 3  - smaller section heading
Quotation  - highlighted quotation
Normal or Body Text - paragraph
```

Every `Heading 1` starts a new article. Empty headings are ignored.

## Import a new Word document

From the repo folder, run:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\import-articles.ps1 -Source "C:\path\to\artykuly.docx"
```

This replaces `articles.json` with all articles found in the document. It also creates URL slugs, extracts short introductions, and estimates reading time.

After importing, run:

```powershell
npm run dev
```

Check the index:

```text
http://127.0.0.1:5173/artykuly
```

Open every article and check its headings and quotations. Then build:

```powershell
npm run build
```

## Change article order

The order on the site follows the order in the Word document. The first article is displayed as the featured article.

Move an entire article section in Word, save the document, and run the import again.

## Add or remove an article

To add an article, add a new `Heading 1` and its content to the Word document, then import it again.

To remove an article, remove its `Heading 1` and content from the Word document, then import it again.

## Publish changes

```powershell
git status
git add .
git commit -m "Update articles"
git push
firebase deploy
```

Do not edit generated reading times or slugs manually unless there is a specific reason. Re-importing the Word document will replace those edits.
