import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import TrainingDetail from '../features/szkolenia/components/TrainingDetail';
import TrainingList from '../features/szkolenia/components/TrainingList';
import {
  completedTrainings,
  currentTrainings,
  findTrainingBySlug,
} from '../features/szkolenia/data/trainings';
import type { TrainingStatus } from '../features/szkolenia/types';

function Szkolenia() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState<TrainingStatus>('current');

  if (slug) {
    const training = findTrainingBySlug(slug);

    if (!training) {
      return (
        <section className="trainings trainings--missing">
          <h1>Nie znaleziono szkolenia</h1>
          <p>Wybrane szkolenie nie istnieje albo zostało przeniesione.</p>
          <Link to="/szkolenia-i-warsztaty">Powrót do listy</Link>
        </section>
      );
    }

    return <TrainingDetail training={training} />;
  }

  const visibleTrainings =
    activeTab === 'current' ? currentTrainings : completedTrainings;

  return (
    <section className="trainings">
      <header className="trainings__header">
        <h1>Szkolenia i warsztaty</h1>
        <p>
          Miejsce na aktualne zapisy oraz archiwum spotkań, które już się odbyły.
          Każde szkolenie ma osobny opis i galerię, a nowe pozycje dodaje się w
          jednym pliku danych.
        </p>
      </header>

      <div className="trainings__tabs" role="tablist" aria-label="Lista szkoleń">
        <button
          type="button"
          className={`trainings__tab${activeTab === 'current' ? ' active' : ''}`}
          onClick={() => setActiveTab('current')}
          role="tab"
          aria-selected={activeTab === 'current'}
        >
          Szkolenia aktualne
        </button>
        <button
          type="button"
          className={`trainings__tab${activeTab === 'completed' ? ' active' : ''}`}
          onClick={() => setActiveTab('completed')}
          role="tab"
          aria-selected={activeTab === 'completed'}
        >
          Szkolenia zakończone
        </button>
      </div>

      <TrainingList trainings={visibleTrainings} />
    </section>
  );
}

export default Szkolenia;
