export type TrainingStatus = 'current' | 'completed';

export interface TrainingDate {
  date: string;
  note?: string;
}

export interface TrainingEdition {
  label: string;
  date?: string;
  images: string[];
}

interface TrainingBase {
  slug: string;
  status: TrainingStatus;
  title: string;
  shortDescription: string;
  thumbnail: string;
  description: string[];
  format: string;
  place: string;
}

export interface CurrentTraining extends TrainingBase {
  status: 'current';
  dates: TrainingDate[];
  price: string;
  duration: string;
  availableSeats: string;
  learningOutcomes: string[];
  program: string[];
  forWhom: string;
  included: string[];
  registrationNote: string;
}

export interface CompletedTraining extends TrainingBase {
  status: 'completed';
  editions: TrainingEdition[];
}

export type Training = CurrentTraining | CompletedTraining;
