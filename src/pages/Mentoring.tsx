import { Link } from 'react-router-dom';

import mentoringPhoto from '../assets/images/mentoring-founders.jpg';

const approaches = [
  {
    name: 'ACT',
    fullName: 'Terapia Akceptacji i Zaangażowania',
    description:
      'uczenie elastyczności psychologicznej, pracy z wartościami i akceptacją.',
  },
  {
    name: 'CFT',
    fullName: 'Terapia Skoncentrowana na Współczuciu',
    description:
      'budowanie życzliwości do samego siebie, rozwijanie systemu kojenia i praca z samokrytycyzmem — zarówno klienta, jak i własnym.',
  },
  {
    name: 'FAP',
    fullName: 'Funkcjonalna Psychoterapia Analityczna',
    description:
      'odważne wykorzystywanie relacji terapeutycznej „tu i teraz” jako głównego narzędzia zmiany.',
  },
];

function Mentoring() {
  return (
    <article className="mentoring">
      <header className="mentoring__hero mentoring__reading-column">
        <p className="mentoring__eyebrow">Mentoring Act Flow</p>
        <h1>Mentoring i wsparcie na start w gabinecie</h1>
        <p className="mentoring__intro">
          Początki samodzielnej pracy psychoterapeutycznej i psychologicznej bywają
          przytłaczające. Pomiędzy teorią ze szkoleń a pierwszymi klientami często
          pojawia się niepewność, poczucie zagubienia, lęk przed błędem i cichy głos
          pytający: <em>„Czy na pewno wiem, co robię?”</em>
        </p>
        <p>
          W <strong>Act Flow</strong> tworzymy bezpieczną, życzliwą przestrzeń wsparcia
          dla osób, które stawiają pierwsze kroki w pracy gabinetowej. Pomożemy Ci
          zbudować własną tożsamość terapeutyczną, osadzić się w roli i zacząć działać
          z większą odwagą i elastycznością — niezależnie od tego, z jakiego nadrzędnego
          nurtu się wywodzisz.
        </p>
      </header>

      <section className="mentoring__section mentoring__reading-column">
        <h2>Nasze podejście: trzecia fala i tradycja kontekstualna</h2>
        <p>
          Czerpiemy z <strong>Nauk o Zachowaniu Opartych na Kontekście (CBS)</strong>.
          W naszej pracy i mentoringu łączymy podejścia tzw. trzeciej fali terapii
          poznawczo-behawioralnych:
        </p>
        <ul className="mentoring__approaches">
          {approaches.map((approach) => (
            <li key={approach.name}>
              <span>{approach.name}</span>
              <p>
                <em>{approach.fullName}</em> — {approach.description}
              </p>
            </li>
          ))}
        </ul>
        <p>
          Z narzędzi tych korzystamy w sposób uniwersalny. Nawet jeśli na co dzień
          pracujesz w nurcie poznawczo-behawioralnym (CBT), psychodynamicznym,
          humanistycznym czy systemowym — koncepcje trzeciej fali wspaniale wzbogacają
          warsztat, pomagając lepiej rozumieć relację z klientem i szybciej wyłapywać
          momenty utknięcia.
        </p>
      </section>

      <figure
        className="mentoring__photo-stage"
        role="img"
        aria-label="Anita i Marika siedzące razem na zielonej sofie"
        style={{ backgroundImage: `url(${mentoringPhoto})` }}
      />

      <section className="mentoring__section mentoring__reading-column mentoring__support">
        <p className="mentoring__eyebrow">Praktyczne wsparcie</p>
        <h2>W czym konkretnie Ci pomożemy?</h2>

        <div className="mentoring__support-block">
          <span className="mentoring__number" aria-hidden="true">01</span>
          <div>
            <h3>Budowanie pewności siebie i tożsamości terapeuty</h3>
            <ul>
              <li>
                <strong>Praca z syndromem oszusta.</strong> Przyjrzymy się Twoim obawom,
                presji bycia „idealnym terapeutą” i samokrytycyzmowi, wykorzystując
                narzędzia ACT i CFT do opiekowania własnego napięcia.
              </li>
              <li>
                <strong>Odwaga do pracy po swojemu.</strong> Pomożemy Ci zaufać własnym
                decyzjom klinicznym, odnaleźć autentyczność w gabinecie i rozwijać
                własny, unikalny styl pracy.
              </li>
              <li>
                <strong>Granice i elastyczność.</strong> Nauczysz się dbać o siebie,
                stawiać granice i zapobiegać szybkiemu wypaleniu zawodowemu.
              </li>
            </ul>
          </div>
        </div>

        <div className="mentoring__support-block">
          <span className="mentoring__number" aria-hidden="true">02</span>
          <div>
            <h3>Praktyczny warsztat i przełożenie teorii na praktykę</h3>
            <ul>
              <li>
                <strong>Praca na procesach, nie na etykietach.</strong> Pokażemy Ci, jak
                patrzeć na trudności klienta przez pryzmat procesów (funkcji zachowania),
                a nie tylko sztywnych diagnoz.
              </li>
              <li>
                <strong>Dobór narzędzi i metafor.</strong> Pomagamy projektować ćwiczenia
                doświadczeniowe, metafory i interwencje dopasowane do indywidualnych
                potrzeb Twoich klientów.
              </li>
              <li>
                <strong>Rozbrajanie gabinetowych utknięć.</strong> Zyskasz bezpieczną
                przestrzeń, by otwarcie porozmawiać o trudnych emocjach, złości,
                bezsilności czy lęku, które naturalnie pojawiają się w relacji
                terapeutycznej.
              </li>
              <li>
                <strong>Głębokie wykorzystanie relacji (FAP).</strong> Nauczysz się
                zauważać i bezpiecznie wykorzystywać to, co dzieje się między Tobą a
                klientem „tu i teraz”.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mentoring__section mentoring__reading-column">
        <h2>Forma współpracy</h2>
        <dl className="mentoring__details">
          <div>
            <dt>Dla kogo</dt>
            <dd>
              Psycholodzy, psychoterapeuci w trakcie szkolenia oraz osoby na początku
              drogi zawodowej — niezależnie od głównego nurtu.
            </dd>
          </div>
          <div>
            <dt>Format</dt>
            <dd>Spotkania indywidualne online lub stacjonarnie (50–90 minut).</dd>
          </div>
          <div>
            <dt>Częstotliwość</dt>
            <dd>
              <strong>Regularny proces</strong> (np. spotkania co 2–4 tygodnie) lub{' '}
              <strong>pojedyncze konsultacje</strong> w momentach trudniejszych utknięć.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mentoring__closing mentoring__reading-column">
        <p className="mentoring__eyebrow">Pierwszy krok</p>
        <h2>Jak wygląda pierwsze spotkanie?</h2>
        <p>
          Nie musisz przychodzić z idealnie przygotowanym opisem przypadku. Pierwsze
          spotkanie to spokojna, niespieszna rozmowa o tym, gdzie obecnie jesteś w
          swojej drodze zawodowej, z jakimi wyzwaniami się mierzysz i jakiego wsparcia
          najbardziej teraz potrzebujesz. Razem ustalimy optymalny cel i rytm naszych
          spotkań.
        </p>
        <Link className="mentoring__cta" to="/kontakt">Porozmawiajmy</Link>
      </section>
    </article>
  );
}

export default Mentoring;
