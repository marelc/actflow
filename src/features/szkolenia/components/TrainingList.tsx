import { Link } from 'react-router-dom';

import type { Training } from '../types';

interface TrainingListProps {
  trainings: Training[];
}

function TrainingList({ trainings }: TrainingListProps) {
  return (
    <div className="training-list" aria-live="polite">
      {trainings.map((training) => (
        <Link
          key={training.slug}
          to={`/szkolenia-i-warsztaty/${training.slug}`}
          className="training-list__item"
        >
          <img
            className="training-list__thumb"
            src={training.thumbnail}
            alt=""
            aria-hidden="true"
          />

          <div className="training-list__body">
            <h2>{training.title}</h2>
            <p>{training.shortDescription}</p>
            <div className="training-list__meta">
              {training.status === 'current' ? (
                <>
                  <span>{training.date}</span>
                  <span>{training.price}</span>
                  <span>zapisy do {training.enrollmentDeadline}</span>
                </>
              ) : (
                <>
                  <span>{training.dateLabel}</span>
                  <span>{training.place}</span>
                  <span>{training.participantCount}</span>
                </>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TrainingList;
