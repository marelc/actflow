export type TrainingStatus = 'current' | 'completed';

interface TrainingBase {
  slug: string;
  status: TrainingStatus;
  title: string;
  shortDescription: string;
  thumbnail: string;
  gallery: string[];
  description: string[];
  format: string;
  place: string;
}

export interface CurrentTraining extends TrainingBase {
  status: 'current';
  date: string;
  enrollmentDeadline: string;
  price: string;
  duration: string;
  availableSeats: string;
  program: string[];
  forWhom: string[];
  registrationNote: string;
}

export interface CompletedTraining extends TrainingBase {
  status: 'completed';
  dateLabel: string;
  participantCount: string;
  topics: string[];
  afterword: string;
}

export type Training = CurrentTraining | CompletedTraining;
