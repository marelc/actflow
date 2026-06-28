import { Link } from 'react-router-dom';

import type { Training } from '../types';

interface TrainingDetailProps {
  training: Training;
}

function TrainingDetail({ training }: TrainingDetailProps) {
  const metaItems =
    training.status === 'current'
      ? [
          ['Termin', training.date],
          ['Zapisy do', training.enrollmentDeadline],
          ['Koszt', training.price],
          ['Miejsce', training.place],
          ['Forma', training.format],
          ['Czas trwania', training.duration],
          ['Dostępne miejsca', training.availableSeats],
        ]
      : [
          ['Termin', training.dateLabel],
          ['Miejsce', training.place],
          ['Forma', training.format],
          ['Uczestnicy', training.participantCount],
        ];

  return (
    <section className="training-detail">
      <Link to="/szkolenia-i-warsztaty" className="training-detail__back">
        Powrót do szkoleń
      </Link>

      <header className="training-detail__header">
        <div>
          <p className="training-detail__eyebrow">
            {training.status === 'current' ? 'Szkolenie aktualne' : 'Szkolenie zakończone'}
          </p>
          <h1>{training.title}</h1>
          <p>{training.shortDescription}</p>
        </div>

        <img
          className="training-detail__hero"
          src={training.gallery[0] ?? training.thumbnail}
          alt=""
          aria-hidden="true"
        />
      </header>

      <dl className="training-detail__meta">
        {metaItems.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <div className="training-detail__content">
        <section>
          <h2>Opis szkolenia</h2>
          {training.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        {training.status === 'current' ? (
          <>
            <section>
              <h2>Program</h2>
              <ul>
                {training.program.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Dla kogo?</h2>
              <ul>
                {training.forWhom.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Zapisy</h2>
              <p>{training.registrationNote}</p>
            </section>
          </>
        ) : (
          <>
            <section>
              <h2>Tematy</h2>
              <ul>
                {training.topics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Po szkoleniu</h2>
              <p>{training.afterword}</p>
            </section>
          </>
        )}
      </div>

      {training.gallery.length > 1 && (
        <div className="training-detail__gallery">
          {training.gallery.map((image) => (
            <img key={image} src={image} alt="" aria-hidden="true" />
          ))}
        </div>
      )}
    </section>
  );
}

export default TrainingDetail;
