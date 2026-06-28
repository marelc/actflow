# Szkolenia i warsztaty maintenance guide

This guide is only for the `Szkolenia i warsztaty` page.

The page is static. That means the site reads training content from files in the repo. To update the public page, edit the repo, build, commit, push, and deploy to Firebase.

## Where the page lives

Main page:

```text
src/pages/Szkolenia.tsx
```

Feature folder:

```text
src/features/szkolenia/
```

Important files:

```text
src/features/szkolenia/data/trainings.ts
src/features/szkolenia/types.ts
src/features/szkolenia/components/TrainingList.tsx
src/features/szkolenia/components/TrainingDetail.tsx
```

Most content updates should happen only in:

```text
src/features/szkolenia/data/trainings.ts
```

## Page routes

List page:

```text
/szkolenia-i-warsztaty
```

Detail page pattern:

```text
/szkolenia-i-warsztaty/training-slug
```

Example:

```text
/szkolenia-i-warsztaty/act-od-podstaw
```

The `slug` field in `trainings.ts` creates the detail page address.

## Folder structure for images

Current trainings:

```text
src/features/szkolenia/assets/current/
```

Completed trainings:

```text
src/features/szkolenia/assets/completed/
```

Each training should have its own folder:

```text
src/features/szkolenia/assets/current/example-training/
src/features/szkolenia/assets/completed/example-training/
```

Recommended image names:

```text
thumb.jpg
detail-1.jpg
detail-2.jpg
detail-3.jpg
detail-4.jpg
detail-5.jpg
```

`thumb.jpg` is used in the scrollable list.

`detail-*` images are used on the detail page. Completed trainings currently expect five detail images, even if they are temporary stubs.

## Image size recommendation

Use optimized web images, not huge original camera files.

Good practical sizes:

```text
thumb.jpg: about 600-900 px wide
detail images: about 1200-1600 px wide
```

Use `.jpg` for photos.

Avoid spaces and Polish letters in file and folder names. Good:

```text
praca-z-wartosciami
relacyjnosc-act
act-mlodzi-dorosli
```

Avoid:

```text
Praca z wartosciami
relacyjność ACT
```

## Add a current training

1. Create a new folder:

```text
src/features/szkolenia/assets/current/my-new-training/
```

2. Add images:

```text
thumb.jpg
detail-1.jpg
```

3. Open:

```text
src/features/szkolenia/data/trainings.ts
```

4. Import the images near the top:

```ts
import myNewTrainingDetail from '../assets/current/my-new-training/detail-1.jpg';
import myNewTrainingThumb from '../assets/current/my-new-training/thumb.jpg';
```

5. Add a new object inside `currentTrainings`.

Template:

```ts
{
  slug: 'my-new-training',
  status: 'current',
  title: 'Training title',
  shortDescription: 'Short list description.',
  date: '12-13 pazdziernika 2026',
  enrollmentDeadline: '30 wrzesnia 2026',
  price: '890 zl',
  place: 'Warszawa',
  format: 'stacjonarnie',
  duration: '2 dni / 14 godzin',
  availableSeats: '12 miejsc',
  thumbnail: myNewTrainingThumb,
  gallery: [myNewTrainingDetail],
  description: [
    'First paragraph on the detail page.',
    'Second paragraph on the detail page.',
  ],
  program: [
    'program point 1',
    'program point 2',
    'program point 3',
  ],
  forWhom: [
    'group 1',
    'group 2',
  ],
  registrationNote: 'Information about registration.',
}
```

## Add a completed training

1. Create a new folder:

```text
src/features/szkolenia/assets/completed/my-completed-training/
```

2. Add images:

```text
thumb.jpg
detail-1.jpg
detail-2.jpg
detail-3.jpg
detail-4.jpg
detail-5.jpg
```

3. Open:

```text
src/features/szkolenia/data/trainings.ts
```

4. Import the images near the top:

```ts
import myCompletedDetail1 from '../assets/completed/my-completed-training/detail-1.jpg';
import myCompletedDetail2 from '../assets/completed/my-completed-training/detail-2.jpg';
import myCompletedDetail3 from '../assets/completed/my-completed-training/detail-3.jpg';
import myCompletedDetail4 from '../assets/completed/my-completed-training/detail-4.jpg';
import myCompletedDetail5 from '../assets/completed/my-completed-training/detail-5.jpg';
import myCompletedThumb from '../assets/completed/my-completed-training/thumb.jpg';
```

5. Add a new object inside `completedTrainings`.

Template:

```ts
{
  slug: 'my-completed-training',
  status: 'completed',
  title: 'Completed training title',
  shortDescription: 'Short list description.',
  dateLabel: 'wiosna 2026',
  place: 'Gdansk',
  format: 'warsztat stacjonarny',
  participantCount: '14 uczestnikow',
  thumbnail: myCompletedThumb,
  gallery: [
    myCompletedDetail1,
    myCompletedDetail2,
    myCompletedDetail3,
    myCompletedDetail4,
    myCompletedDetail5,
  ],
  description: [
    'First paragraph on the detail page.',
    'Second paragraph on the detail page.',
  ],
  topics: [
    'topic 1',
    'topic 2',
    'topic 3',
  ],
  afterword: 'Short closing note about this completed training.',
}
```

## Move current training to completed

1. Move the image folder from:

```text
src/features/szkolenia/assets/current/
```

to:

```text
src/features/szkolenia/assets/completed/
```

2. In `trainings.ts`, move the object from `currentTrainings` to `completedTrainings`.

3. Replace current-only fields:

```text
date
enrollmentDeadline
price
duration
availableSeats
program
forWhom
registrationNote
```

with completed fields:

```text
dateLabel
participantCount
topics
afterword
```

4. Update image import paths from `assets/current/...` to `assets/completed/...`.

5. Add five detail images if the training does not already have them.

## Hide or remove a training

To remove a training from the page, delete its object from either:

```text
currentTrainings
completedTrainings
```

in:

```text
src/features/szkolenia/data/trainings.ts
```

You can leave the image folder in place if you may use the images again later.

## Common mistakes

If the build fails after adding images, check:

```text
The import path matches the folder and file name exactly.
The image file exists.
The variable name used in thumbnail/gallery matches the import name.
The object has the correct status: current or completed.
The slug is unique.
```

If the detail page opens but says the training was not found, check that the URL slug matches the `slug` field.

## Check locally

Run:

```powershell
npm run dev
```

Open:

```text
http://127.0.0.1:5173/szkolenia-i-warsztaty
```

Click each new item and check the detail page.

## Build and deploy

Build:

```powershell
npm run build
```

Deploy:

```powershell
firebase deploy
```

## Commit and push

```powershell
git status
git add .
git commit -m "Update szkolenia content"
git push
```

