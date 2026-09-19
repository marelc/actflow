import { Link } from 'react-router-dom';

import type { Training } from '../types';

interface TrainingListProps {
  trainings: Training[];
}

function editionLabel(count: number) {
  if (count === 1) return '1 edycja';
  if (count >= 2 && count <= 4) return `${count} edycje`;
  return `${count} edycji`;
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
                  <span>
                    {training.dates.map(({ date, note }) =>
                      note ? `${date} (${note})` : date,
                    ).join(' · ')}
                  </span>
                  <span>{training.price}</span>
                </>
              ) : (
                <>
                  <span>{editionLabel(training.editions.length)}</span>
                  <span>{training.place}</span>
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
