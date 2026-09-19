# Utrzymanie strony „Szkolenia i warsztaty”

Strona korzysta z danych i obrazów zapisanych bezpośrednio w repozytorium. Po zmianie treści trzeba zbudować stronę, wykonać commit, push i wdrożyć ją do Firebase.

## Najważniejsze pliki

```text
src/features/szkolenia/data/trainings.ts
src/features/szkolenia/assets/
src/features/szkolenia/types.ts
```

Treści szkoleń edytuje się w `trainings.ts`. Obrazy znajdują się w `assets`.

## Układ folderów i nazwy obrazów

Każde szkolenie ma krótki, unikalny kod i własny folder:

```text
src/features/szkolenia/assets/AWG01/
src/features/szkolenia/assets/KWG01/
src/features/szkolenia/assets/WDA01/
src/features/szkolenia/assets/ZMD01/
```

Nazwy plików:

```text
WDA01_logo.jpg
WDA01_logo_full.jpg
WDA01_zdjecie_01.jpg
WDA01_zdjecie_02.jpg
```

`*_logo.jpg` jest kwadratowym symbolem używanym na stronie. `*_logo_full.jpg` zachowuje pełną wersję grafiki, a `*_zdjecie_*.jpg` to fotografie z zakończonych edycji.

Przed dodaniem zdjęcia zmniejsz je do około 1400–1600 px na dłuższym boku. Logo wystarczy zapisać w rozmiarze około 900 × 900 px.

## Dodawanie terminu aktywnego szkolenia

W `currentTrainings` znajdź właściwe szkolenie i dopisz element w polu `dates`:

```ts
dates: [
  { date: '21 listopada 2026' },
  { date: '23 stycznia 2027' },
]
```

Termin zamknięty można oznaczyć notatką:

```ts
{ date: '24 października 2026', note: 'grupa zamknięta' }
```

Nie trzeba tworzyć drugiego wpisu szkolenia tylko dlatego, że ma kolejny termin.

## Dodawanie zakończonej edycji

1. Dodaj zdjęcia do folderu właściwego szkolenia, np.:

```text
WDA01_zdjecie_02.jpg
WDA01_zdjecie_03.jpg
```

2. Zaimportuj je na początku `trainings.ts`:

```ts
import wdaEdition2Photo1 from '../assets/WDA01/WDA01_zdjecie_02.jpg';
import wdaEdition2Photo2 from '../assets/WDA01/WDA01_zdjecie_03.jpg';
```

3. W `completedTrainings` dopisz kolejną pozycję w `editions`:

```ts
editions: [
  {
    label: 'Edycja 1',
    date: '12 września 2026',
    images: [wdaEdition1Photo],
  },
  {
    label: 'Edycja 2',
    date: '21 listopada 2026',
    images: [wdaEdition2Photo1, wdaEdition2Photo2],
  },
]
```

Pole `date` jest opcjonalne. Jedna edycja może mieć jedno lub wiele zdjęć.

Szkolenie może jednocześnie znajdować się w `currentTrainings` z przyszłymi terminami i w `completedTrainings` z archiwalnymi edycjami.

## Dodawanie nowego szkolenia

1. Wymyśl unikalny kod, np. `NOW01`.
2. Utwórz folder `src/features/szkolenia/assets/NOW01/`.
3. Dodaj `NOW01_logo.jpg` i zaimportuj obraz w `trainings.ts`.
4. Skopiuj jeden obiekt z `currentTrainings` i uzupełnij wszystkie pola.
5. Nadaj unikalny `slug`, zapisany małymi literami bez polskich znaków, np. `nowe-szkolenie`.

Przycisk zapisów automatycznie prowadzi do strony Kontakt.

## Podgląd lokalny

```powershell
npm run dev
```

Otwórz:

```text
http://127.0.0.1:5173/szkolenia-i-warsztaty
```

Sprawdź obie zakładki, wszystkie szczegóły szkoleń i widok mobilny.

## Sprawdzenie i publikacja

```powershell
npm run build
git status
git add .
git commit -m "Update szkolenia content"
git push
firebase deploy
```
