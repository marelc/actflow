# ACT Flow maintenance guide

This project is a Vite + React site deployed to Firebase Hosting.

## Daily workflow

Start in the repo folder:

```powershell
cd C:\Users\marel\repos\actflow
```

Check what changed:

```powershell
git status
```

Get the newest version from GitHub before editing:

```powershell
git pull
```

Run the site locally:

```powershell
npm run dev
```

Open the local address shown by Vite, usually:

```text
http://127.0.0.1:5173/
```

Build before publishing:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

Deploy to Firebase:

```powershell
firebase deploy
```

The Firebase config uses:

```text
project: actflow-8f0ba
hosting site: actflow-8f0ba
public folder: dist
```

Firebase automatically runs `npm run build` before deploy because `firebase.json` has a predeploy command.

## Save changes to GitHub

After editing and checking the page:

```powershell
git status
git add .
git commit -m "Describe the change"
git push
```

Example:

```powershell
git commit -m "Update szkolenia content"
```

## Szkolenia i warsztaty

Detailed instructions for this page are in:

```text
SZKOLENIA_MAINTENANCE.md
```

The training section lives in:

```text
src/features/szkolenia/
```

Main files:

```text
src/features/szkolenia/data/trainings.ts
src/features/szkolenia/types.ts
src/features/szkolenia/components/TrainingList.tsx
src/features/szkolenia/components/TrainingDetail.tsx
```

Usually you only need to edit:

```text
src/features/szkolenia/data/trainings.ts
```

Training images are grouped by training:

```text
src/features/szkolenia/assets/current/
src/features/szkolenia/assets/completed/
```

Each training has its own folder, for example:

```text
src/features/szkolenia/assets/current/act-od-podstaw/
src/features/szkolenia/assets/completed/relacyjnosc-act/
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

Use `thumb.jpg` for the list thumbnail. Use `detail-*` images for the detail page gallery.

## Add a current training

1. Create a new folder in:

```text
src/features/szkolenia/assets/current/
```

Example:

```text
src/features/szkolenia/assets/current/nowe-szkolenie/
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
import noweSzkolenieThumb from '../assets/current/nowe-szkolenie/thumb.jpg';
import noweSzkolenieDetail from '../assets/current/nowe-szkolenie/detail-1.jpg';
```

5. Add a new object inside `currentTrainings`.

Current trainings can have fields like:

```text
date
enrollmentDeadline
price
place
format
duration
availableSeats
program
forWhom
registrationNote
```

## Add a completed training

1. Create a new folder in:

```text
src/features/szkolenia/assets/completed/
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

3. Import the images in:

```text
src/features/szkolenia/data/trainings.ts
```

4. Add a new object inside `completedTrainings`.

Completed trainings can have fields like:

```text
dateLabel
place
format
participantCount
topics
afterword
```

They do not need price, enrollment deadline, or available seats.

## Remove or hide a training

Open:

```text
src/features/szkolenia/data/trainings.ts
```

To remove it from the page, delete its object from `currentTrainings` or `completedTrainings`.

You can leave the image folder in place if you may use it later.

## Move a training from current to completed

1. Move its data object from `currentTrainings` to `completedTrainings`.
2. Replace current-only fields such as `price`, `enrollmentDeadline`, and `availableSeats` with completed fields such as `dateLabel`, `participantCount`, `topics`, and `afterword`.
3. Move its image folder from:

```text
src/features/szkolenia/assets/current/
```

to:

```text
src/features/szkolenia/assets/completed/
```

4. Update the import paths in `trainings.ts`.

## Important checks before deploy

Run:

```powershell
npm run build
```

Then check:

```powershell
git status
```

If the build passes and the local preview looks correct, deploy:

```powershell
firebase deploy
```
