import { useEffect, useRef, useState } from 'react';
import type { TouchEvent } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

import type { Training } from '../types';

interface TrainingDetailProps {
  training: Training;
}

interface LightboxState {
  images: string[];
  index: number;
  label: string;
}

function TrainingDetail({ training }: TrainingDetailProps) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!lightbox) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setLightbox(null);
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        setLightbox((current) => {
          if (!current || current.images.length < 2) return current;
          const direction = event.key === 'ArrowLeft' ? -1 : 1;
          const index = (current.index + direction + current.images.length) % current.images.length;
          return { ...current, index };
        });
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox]);

  function changeLightboxImage(direction: -1 | 1) {
    setLightbox((current) => {
      if (!current) return current;
      const index = (current.index + direction + current.images.length) % current.images.length;
      return { ...current, index };
    });
  }

  function handleTouchStart(event: TouchEvent) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: TouchEvent) {
    if (touchStartX.current === null || !lightbox || lightbox.images.length < 2) return;
    const touchEndX = event.changedTouches[0]?.clientX;
    if (touchEndX === undefined) return;

    const distance = touchEndX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 50) return;
    changeLightboxImage(distance > 0 ? -1 : 1);
  }

  const metaItems: Array<[string, string]> =
    training.status === 'current'
      ? [
          ['Koszt', training.price],
          ['Miejsce', training.place],
          ['Forma', training.format],
          ['Czas trwania', training.duration],
          ['Liczba miejsc', training.availableSeats],
        ]
      : [
          ['Liczba edycji', training.editions.length.toString()],
          ['Miejsce', training.place],
          ['Forma', training.format],
        ];

  return (
    <section className="training-detail">
      <Link to="/szkolenia-i-warsztaty" className="training-detail__back">
        <span aria-hidden="true">←</span> Powrót do szkoleń
      </Link>

      <header className="training-detail__header">
        <img className="training-detail__hero" src={training.thumbnail} alt="" aria-hidden="true" />

        <div>
          <p className="training-detail__eyebrow">
            {training.status === 'current' ? 'Szkolenie aktualne' : 'Szkolenie zakończone'}
          </p>
          <h1>{training.title}</h1>
          <p>{training.shortDescription}</p>
        </div>
      </header>

      {training.status === 'current' && (
        <section className="training-detail__schedule" aria-labelledby="training-dates-heading">
          <h2 id="training-dates-heading">Terminy</h2>
          <div className="training-detail__dates">
            {training.dates.map(({ date, note }) => (
              <div key={`${date}-${note ?? ''}`}>
                <strong>{date}</strong>
                {note && <small>{note}</small>}
              </div>
            ))}
          </div>
        </section>
      )}

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
          <h2>O szkoleniu</h2>
          {training.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        {training.status === 'current' ? (
          <>
            <section>
              <h2>Dla kogo?</h2>
              <p>{training.forWhom}</p>
            </section>

            <section>
              <h2>Czego się nauczysz?</h2>
              <ul>
                {training.learningOutcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Program</h2>
              <ol>
                {training.program.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            <section>
              <h2>Co otrzymujesz?</h2>
              <ul>
                {training.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="training-detail__registration">
              <h2>Zapisy</h2>
              <p>{training.registrationNote}</p>
              <Link className="training-detail__contact" to="/kontakt">
                Przejdź do kontaktu
              </Link>
            </section>
          </>
        ) : (
          <section className="training-detail__editions">
            <h2>Edycje</h2>
            {training.editions.map((edition) => (
              <article className="training-edition" key={edition.label}>
                <header>
                  <h3>{edition.label}</h3>
                  {edition.date && <p>{edition.date}</p>}
                </header>
                <div className="training-edition__gallery">
                  {edition.images.map((image, index) => (
                    <button
                      className="training-edition__image-button"
                      key={image}
                      type="button"
                      onClick={() => setLightbox({
                        images: edition.images,
                        index,
                        label: `${training.title}, ${edition.label}`,
                      })}
                      aria-label={`Powiększ zdjęcie ${index + 1}, ${edition.label}`}
                    >
                      <img
                        src={image}
                        alt={`${training.title}, ${edition.label}, zdjęcie ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </section>
        )}
      </div>

      {lightbox && createPortal(
        <div
          className="training-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Powiększone zdjęcie ze szkolenia"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLightbox(null);
          }}
        >
          {lightbox.images.length > 1 && (
            <button
              className="training-lightbox__previous"
              type="button"
              onClick={() => changeLightboxImage(-1)}
              aria-label="Poprzednie zdjęcie"
            >
              ‹
            </button>
          )}

          <figure className="training-lightbox__figure">
            <button
              className="training-lightbox__close"
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Zamknij podgląd"
            >
              ×
            </button>
            <img
              src={lightbox.images[lightbox.index]}
              alt={`${lightbox.label}, zdjęcie ${lightbox.index + 1}`}
            />
            {lightbox.images.length > 1 && (
              <figcaption>
                {lightbox.index + 1} / {lightbox.images.length}
              </figcaption>
            )}
          </figure>

          {lightbox.images.length > 1 && (
            <button
              className="training-lightbox__next"
              type="button"
              onClick={() => changeLightboxImage(1)}
              aria-label="Następne zdjęcie"
            >
              ›
            </button>
          )}
        </div>,
        document.body,
      )}
    </section>
  );
}

export default TrainingDetail;
