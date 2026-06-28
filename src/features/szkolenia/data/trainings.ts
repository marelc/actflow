import type { CompletedTraining, CurrentTraining, Training } from '../types';

import actBasicsDetail from '../assets/current/act-od-podstaw/detail-1.jpg';
import actBasicsThumb from '../assets/current/act-od-podstaw/thumb.jpg';
import hexaflexDetail from '../assets/current/hexaflex-w-praktyce/detail-1.jpg';
import hexaflexThumb from '../assets/current/hexaflex-w-praktyce/thumb.jpg';
import youngAdultsDetail1 from '../assets/completed/act-mlodzi-dorosli/detail-1.jpg';
import youngAdultsDetail2 from '../assets/completed/act-mlodzi-dorosli/detail-2.jpg';
import youngAdultsDetail3 from '../assets/completed/act-mlodzi-dorosli/detail-3.jpg';
import youngAdultsDetail4 from '../assets/completed/act-mlodzi-dorosli/detail-4.jpg';
import youngAdultsDetail5 from '../assets/completed/act-mlodzi-dorosli/detail-5.jpg';
import youngAdultsThumb from '../assets/completed/act-mlodzi-dorosli/thumb.jpg';
import valuesDetail1 from '../assets/completed/praca-z-wartosciami/detail-1.jpg';
import valuesDetail2 from '../assets/completed/praca-z-wartosciami/detail-2.jpg';
import valuesDetail3 from '../assets/completed/praca-z-wartosciami/detail-3.jpg';
import valuesDetail4 from '../assets/completed/praca-z-wartosciami/detail-4.jpg';
import valuesDetail5 from '../assets/completed/praca-z-wartosciami/detail-5.jpg';
import valuesThumb from '../assets/completed/praca-z-wartosciami/thumb.jpg';
import relationDetail1 from '../assets/completed/relacyjnosc-act/detail-1.jpg';
import relationDetail2 from '../assets/completed/relacyjnosc-act/detail-2.jpg';
import relationDetail3 from '../assets/completed/relacyjnosc-act/detail-3.jpg';
import relationDetail4 from '../assets/completed/relacyjnosc-act/detail-4.jpg';
import relationDetail5 from '../assets/completed/relacyjnosc-act/detail-5.jpg';
import relationThumb from '../assets/completed/relacyjnosc-act/thumb.jpg';

export const currentTrainings: CurrentTraining[] = [
  {
    slug: 'act-od-podstaw',
    status: 'current',
    title: 'ACT od podstaw: od modelu do rozmowy w gabinecie',
    shortDescription:
      'Dwudniowe szkolenie dla osób, które chcą zrozumieć ACT jako żywy proces, a nie listę technik.',
    date: '12-13 października 2026',
    enrollmentDeadline: '30 września 2026',
    price: '890 zł',
    place: 'Warszawa',
    format: 'stacjonarnie',
    duration: '2 dni / 14 godzin',
    availableSeats: '12 miejsc',
    thumbnail: actBasicsThumb,
    gallery: [actBasicsDetail],
    description: [
      'To szkolenie jest dla osób, które chcą wejść w ACT spokojnie, jasno i praktycznie. Przejdziemy od podstaw filozofii kontekstualno-behawioralnej do pierwszych interwencji możliwych do użycia w gabinecie.',
      'Będziemy pracować na przykładach rozmów terapeutycznych, krótkich ćwiczeniach i analizie procesu, tak aby model przestał być abstrakcyjnym diagramem, a stał się realnym sposobem słuchania pacjenta.',
    ],
    program: [
      'ACT jako podejście procesowe',
      'sześć procesów elastyczności psychologicznej',
      'praca z wartościami i działaniem zaangażowanym',
      'defuzja i akceptacja w naturalnym języku terapeuty',
    ],
    forWhom: [
      'psychologów i psycholożek na początku drogi terapeutycznej',
      'specjalistów CBT, którzy chcą poszerzyć warsztat o ACT',
      'osób szukających bardziej relacyjnego i elastycznego sposobu pracy',
    ],
    registrationNote:
      'Zapisy otworzymy po potwierdzeniu sali. Zainteresowane osoby mogą wcześniej napisać do nas przez zakładkę Kontakt.',
  },
  {
    slug: 'hexaflex-w-praktyce',
    status: 'current',
    title: 'Hexaflex w praktyce terapeutycznej',
    shortDescription:
      'Warsztat o tym, jak rozpoznawać procesy ACT w żywej rozmowie i dobierać interwencje bez sztywnego scenariusza.',
    date: '21 listopada 2026',
    enrollmentDeadline: '7 listopada 2026',
    price: '520 zł',
    place: 'Gdańsk',
    format: 'warsztat na żywo',
    duration: '1 dzień / 7 godzin',
    availableSeats: '10 miejsc',
    thumbnail: hexaflexThumb,
    gallery: [hexaflexDetail],
    description: [
      'Hexaflex bywa prezentowany jako schemat, ale w praktyce jest mapą tego, co dzieje się w kontakcie z pacjentem. Podczas warsztatu będziemy uczyć się słyszeć procesy ACT w języku, emocjach i zachowaniu.',
      'Dużo miejsca poświęcimy prostym decyzjom klinicznym: kiedy wzmacniać kontakt z wartościami, kiedy zwalniać przy doświadczeniu, a kiedy zapraszać pacjenta do konkretnego działania.',
    ],
    program: [
      'rozpoznawanie procesów w wypowiedziach pacjenta',
      'łączenie defuzji, akceptacji i wartości',
      'ćwiczenia w parach i krótkie scenki gabinetowe',
      'planowanie interwencji procesowej',
    ],
    forWhom: [
      'osób znających podstawy ACT',
      'terapeutów, którzy chcą pracować mniej protokołowo',
      'specjalistów prowadzących konsultacje psychologiczne',
    ],
    registrationNote:
      'Liczba miejsc jest ograniczona ze względu na ćwiczeniowy charakter warsztatu.',
  },
];

export const completedTrainings: CompletedTraining[] = [
  {
    slug: 'relacyjnosc-act',
    status: 'completed',
    title: 'Relacyjność w ACT i FAP',
    shortDescription:
      'Spotkanie poświęcone autentycznej obecności terapeutycznej i pracy z relacją jako częścią procesu zmiany.',
    dateLabel: 'wiosna 2026',
    place: 'Gdańsk',
    format: 'warsztat stacjonarny',
    participantCount: '14 uczestników',
    thumbnail: relationThumb,
    gallery: [relationDetail1, relationDetail2, relationDetail3, relationDetail4, relationDetail5],
    description: [
      'Pracowaliśmy z metaforą dwóch wspinaczy, reakcjami terapeuty w kontakcie oraz momentami, w których relacja staje się najważniejszą interwencją.',
      'Dużo uwagi poświęciliśmy temu, jak zachować profesjonalność bez chowania się za dystansem i jak wnosić do gabinetu autentyczność w bezpieczny sposób.',
    ],
    topics: [
      'uważność na proces relacyjny',
      'odwaga terapeutyczna',
      'mikromomenty bliskości i unikania',
      'ACT i FAP w praktyce gabinetowej',
    ],
    afterword:
      'To szkolenie pokazało nam, jak bardzo specjaliści potrzebują miejsca, w którym można ćwiczyć bycie w relacji, a nie tylko mówić o technikach.',
  },
  {
    slug: 'praca-z-wartosciami',
    status: 'completed',
    title: 'Praca z wartościami w procesie terapeutycznym',
    shortDescription:
      'Warsztat o przechodzeniu od deklaracji do realnego, zaangażowanego działania pacjenta.',
    dateLabel: 'jesień 2025',
    place: 'Warszawa',
    format: 'warsztat stacjonarny',
    participantCount: '11 uczestników',
    thumbnail: valuesThumb,
    gallery: [valuesDetail1, valuesDetail2, valuesDetail3, valuesDetail4, valuesDetail5],
    description: [
      'Rozbieraliśmy wartości na konkretne zachowania i decyzje, żeby nie zostawały tylko pięknymi słowami w notatkach z sesji.',
      'Uczestnicy pracowali z własnymi przykładami klinicznymi, ćwicząc pytania, które pomagają pacjentom odzyskać kierunek w trudnych momentach.',
    ],
    topics: [
      'odróżnianie wartości od celów',
      'pytania pogłębiające kontakt z kierunkiem',
      'działanie zaangażowane',
      'praca z utknięciem i ambiwalencją',
    ],
    afterword:
      'Najmocniej wybrzmiało to, że wartości nie są dodatkiem do terapii. Są sposobem organizowania całego procesu.',
  },
  {
    slug: 'act-mlodzi-dorosli',
    status: 'completed',
    title: 'ACT w pracy z młodymi dorosłymi',
    shortDescription:
      'Szkolenie o wspieraniu osób wchodzących w dorosłość, przeciążonych wyborem, presją i niepewnością.',
    dateLabel: 'lato 2025',
    place: 'online',
    format: 'spotkanie warsztatowe',
    participantCount: '18 uczestników',
    thumbnail: youngAdultsThumb,
    gallery: [
      youngAdultsDetail1,
      youngAdultsDetail2,
      youngAdultsDetail3,
      youngAdultsDetail4,
      youngAdultsDetail5,
    ],
    description: [
      'Przyglądaliśmy się temu, jak język powinności, porównań i lęku przed oceną wpływa na młodych dorosłych oraz jak ACT pomaga wracać do sprawczości.',
      'Rozmawialiśmy o pracy z wartościami, defuzją i małymi krokami w sytuacjach, w których pacjent czuje, że musi natychmiast wymyślić całe swoje życie.',
    ],
    topics: [
      'presja wyboru i perfekcjonizm',
      'defuzja od myśli oceniających',
      'wartości w okresie przejściowym',
      'małe działania w stronę sensu',
    ],
    afterword:
      'To spotkanie stało się początkiem pomysłu na osobny cykl o pracy ACT z osobami neuroróżnorodnymi i młodymi dorosłymi.',
  },
];

export const trainings: Training[] = [...currentTrainings, ...completedTrainings];

export function findTrainingBySlug(slug: string | undefined) {
  return trainings.find((training) => training.slug === slug);
}
