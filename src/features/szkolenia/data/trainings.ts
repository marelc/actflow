import type { CompletedTraining, CurrentTraining, Training } from '../types';

import awgLogo from '../assets/AWG01/AWG01_logo.jpg';
import kwgLogo from '../assets/KWG01/KWG01_logo.jpg';
import wdaLogo from '../assets/WDA01/WDA01_logo.jpg';
import wdaEdition1Photo from '../assets/WDA01/WDA01_zdjecie_01.jpg';
import zmdLogo from '../assets/ZMD01/ZMD01_logo.jpg';

export const currentTrainings: CurrentTraining[] = [
  {
    slug: 'act-w-gabinecie-pierwsze-spotkanie',
    status: 'current',
    title: 'ACT w Gabinecie: Pierwsze Spotkanie',
    shortDescription:
      'Praktyczny warsztat o spokojnym i elastycznym prowadzeniu pierwszej konsultacji w nurcie ACT.',
    dates: [
      { date: '24 października 2026', note: 'grupa zamknięta' },
      { date: '23 stycznia 2027' },
    ],
    price: '449 zł',
    place: 'Sopot',
    format: 'stacjonarnie',
    duration: '1 dzień / 7 godzin zegarowych',
    availableSeats: '10 uczestników',
    thumbnail: awgLogo,
    description: [
      'Pierwsze spotkania z klientami na początku drogi zawodowej bywają stresujące. W głowie pojawia się natłok pytań: „Pamiętam teorię z podręcznika, ale od czego w ogóle zacząć?”, „Co zrobić, gdy klient mówi bardzo dużo i chaotycznie?”, „Czy na pewno zadam właściwe pytanie?”.',
      'Ten warsztat powstał po to, aby odczarować początkowy lęk i pokazać Ci, że nie musisz znać wszystkich odpowiedzi od razu. Przejdziemy krok po kroku przez etap pierwszej konsultacji w nurcie ACT. Nauczysz się, jak zdejmując z siebie presję bycia „idealnym terapeutą”, słuchać klienta przez kontekstualne okulary i bezpiecznie prowadzić go od zawiłej opowieści do jasnej, spójnej ramy współpracy.',
    ],
    learningOutcomes: [
      'Odnajdywanie spokoju w gąszczu informacji i słuchanie „uchem ACT”.',
      'Radzenie sobie z własną niepewnością i przekuwanie napięcia w autentyczną relację.',
      'Przekładanie ogólnych oczekiwań klienta na konkretne, oparte na wartościach cele.',
      'Tworzenie prostej, żywej konceptualizacji bez akademickiego paraliżu.',
      'Testowanie narzędzi w małych grupach i bezpiecznej atmosferze.',
    ],
    program: [
      'Osadzenie się w roli i słuchanie w ACT.',
      'Struktura pierwszej konsultacji i budowanie bezpiecznej ramy.',
      'Tworzenie celów behawioralnych.',
      'Żywa konceptualizacja w praktyce.',
    ],
    forWhom:
      'Dla młodych psychologów, psychoterapeutów w trakcie szkolenia oraz specjalistów stawiających pierwsze kroki w gabinecie, którzy chcą zyskać pewność siebie i nauczyć się elastycznego prowadzenia pierwszej sesji.',
    included: [
      '7 godzin intensywnej, wspierającej pracy warsztatowej w kameralnej grupie.',
      'Praktyczne karty pracy, ściągawki do konceptualizacji i zbiory pytań.',
      'Certyfikat potwierdzający udział w szkoleniu i liczbę godzin.',
      'Przerwy kawowe, poczęstunek i przestrzeń do wymiany doświadczeń.',
    ],
    registrationNote: 'Napisz do nas, aby zgłosić udział lub zapytać o dostępność miejsc.',
  },
  {
    slug: 'wstep-do-act',
    status: 'current',
    title: 'Wstęp do ACT – Przetestuj Nurt w Praktyce',
    shortDescription:
      'Jednodniowe spotkanie pozwalające poznać fundamenty ACT i sprawdzić ten nurt w praktyce.',
    dates: [{ date: '21 listopada 2026' }, { date: '6 marca 2027' }],
    price: '449 zł',
    place: 'Sopot',
    format: 'stacjonarnie',
    duration: '1 dzień / 7 godzin zegarowych',
    availableSeats: '10 uczestników',
    thumbnail: wdaLogo,
    description: [
      'Szukasz swojego miejsca w świecie psychoterapii i zastanawiasz się, który nurt jest Ci najbliższy? Słyszysz o ACT, czytasz o elastyczności psychologicznej, ale nie masz pewności, jak to właściwie wygląda w gabinecie?',
      'To szkolenie powstało jako bezpieczna przestrzeń do przetestowania ACT w praktyce. Bez zobowiązań do długich i drogich całościowych szkoleń, bez akademickiego nadęcia i trudnego żargonu. W ciągu jednego dnia dowiesz się, na czym polega fenomen Terapii Akceptacji i Zaangażowania, jak wyglądają jej kluczowe narzędzia i czy chcesz rozwijać się w tym kierunku dalej.',
    ],
    learningOutcomes: [
      'Zrozumienie modelu Hexaflexu i jego przełożenia na pracę z drugim człowiekiem.',
      'Nowe spojrzenie na cierpienie, akceptację i trudne emocje.',
      'Przetestowanie podstawowych metafor i ćwiczeń doświadczeniowych.',
      'Poznanie partnerskiej postawy terapeuty ACT.',
      'Doświadczenie procesów ACT na sobie.',
    ],
    program: [
      'Dlaczego właśnie ACT? Od klasycznej CBT do trzeciej fali.',
      'Sześciokąt Elastyczności w praktyce.',
      'Praca na doświadczeniu: metafory, ciało i rysunek.',
      'Postawa terapeuty ACT i planowanie dalszego rozwoju.',
    ],
    forWhom:
      'Dla studentów psychologii, młodych psychologów, psychoterapeutów oraz specjalistów dziedzin pokrewnych, którzy chcą poznać fundamenty ACT i sprawdzić, czy to podejście rezonuje z ich sposobem pracy.',
    included: [
      '7 godzin interaktywnej pracy w życzliwej, kameralnej atmosferze.',
      'Pakiet podstawowych metafor, schemat Hexaflexu i spis literatury.',
      'Certyfikat potwierdzający udział w szkoleniu i liczbę godzin.',
      'Przerwy kawowe, przekąski i okazję do poznania osób na podobnym etapie.',
    ],
    registrationNote: 'Napisz do nas, aby zgłosić udział lub zapytać o dostępność miejsc.',
  },
  {
    slug: 'zdejmij-maske-doskonalosci',
    status: 'current',
    title: 'Zdejmij Maskę Doskonałości – ACT i FAP w Pracy z Syndromem Oszusta',
    shortDescription:
      'Bezpieczny i praktyczny warsztat o wstydzie, lęku przed demaskacją i odwadze do autentyczności.',
    dates: [{ date: '24 stycznia 2027' }],
    price: '449 zł',
    place: 'Sopot',
    format: 'stacjonarnie',
    duration: '1 dzień / 7 godzin zegarowych',
    availableSeats: '10 uczestników',
    thumbnail: zmdLogo,
    description: [
      'Przekonanie o byciu „oszustem” to wyjątkowo samotne i wycieńczające miejsce. Specjaliści zdrowia psychicznego są na nie szczególnie narażeni – mity dotyczące naszej roli, brak jednoznacznych mierników sukcesu i ciągłe porównywanie się sprawiają, że lęk przed demaskacją towarzyszy nam nader często.',
      'Ten warsztat to bezpieczna przystań, w której zdejmujemy maski idealnych terapeutów. Używając narzędzi ACT i FAP, przyjrzymy się wstydowi, lękowi przed porażką i krytycznemu głosowi w głowie. Zrobimy to w atmosferze akceptacji, wspólnoty i normalizacji.',
    ],
    learningOutcomes: [
      'Zrozumienie mechanizmu syndromu oszusta i czynników, które go wzmacniają.',
      'Praca z defuzją, akceptacją i wartościami w zderzeniu z wewnętrznym krytykiem.',
      'Oswajanie wstydu i bezpieczne odsłanianie się w relacji zgodnie z FAP.',
      'Stosowanie poznanych narzędzi we własnym życiu i pracy z klientami.',
      'Korzystanie z mocy wspólnoty i normalizacji.',
    ],
    program: [
      'Anatomia Syndromu Oszusta i mity wokół roli psychologa.',
      'ACT na ratunek: praktyczna praca z procesami Hexaflexu.',
      'FAP i odwaga w relacji.',
      'Z gabinetu do życia: autentyczna tożsamość terapeutyczna.',
    ],
    forWhom:
      'Dla psychologów, psychoterapeutów – szczególnie na początku drogi – oraz specjalistów z branż pomocowych i kreatywnych, którzy chcą pracować z poczuciem nieadekwatności u siebie i swoich klientów.',
    included: [
      '7 godzin głębokiej, bezpiecznej i praktycznej pracy warsztatowej.',
      'Ćwiczenia ACT i FAP do pracy własnej i wykorzystania w gabinecie.',
      'Certyfikat potwierdzający udział w szkoleniu i liczbę godzin.',
      'Przerwy kawowe, poczęstunek i przestrzeń wolną od oceniania.',
    ],
    registrationNote: 'Napisz do nas, aby zgłosić udział lub zapytać o dostępność miejsc.',
  },
  {
    slug: 'kompas-w-gabinecie',
    status: 'current',
    title: 'Kompas w Gabinecie – Praca z Wartościami w Terapii',
    shortDescription:
      'Warsztat o głębokiej, wolnej od banałów pracy z wartościami w każdym nurcie terapeutycznym.',
    dates: [{ date: '7 marca 2027' }],
    price: '449 zł',
    place: 'Sopot',
    format: 'stacjonarnie',
    duration: '1 dzień / 7 godzin zegarowych',
    availableSeats: '10 uczestników',
    thumbnail: kwgLogo,
    description: [
      'Praca z wartościami kojarzy się głównie z ACT, ale jest uniwersalnym narzędziem, które uzupełnia pracę w każdym nurcie psychoterapii. W praktyce bywa jednak jednym z najtrudniejszych obszarów. Jak odróżnić prawdziwe wartości od celów, zasad społecznych czy unikowych zachowań? Jak pomagać klientom, którzy czują zagubienie, brak sensu lub lęk przed podjęciem decyzji?',
      'Podczas warsztatu odczarujemy pracę z wartościami. Pokażemy, jak przenieść te koncepcje do codziennej praktyki gabinetowej – niezależnie od podejścia, w którym pracujesz – w sposób głęboki, ale wolny od banałów i sztampowych kart pracy.',
    ],
    learningOutcomes: [
      'Płynne włączanie pracy z wartościami do różnych nurtów terapeutycznych.',
      'Odróżnianie wartości od celów, reguł i zachowań unikowych.',
      'Rozbrajanie utknięć motywacyjnych i samokrytycyzmu.',
      'Przekładanie wartości na małe kroki i działanie zaangażowane.',
      'Stosowanie ćwiczeń wyobrażeniowych, kart, metafor i pracy z ciałem.',
      'Praca na własnym kompasie wartości terapeuty.',
    ],
    program: [
      'Czym naprawdę są wartości? Wartość, cel i reguła życiowa.',
      'Diagnostyka i odnajdywanie wartości ukrytych pod bólem.',
      'Doświadczeniowy warsztat metafor i technik.',
      'Od intencji do czynu: cele, przeszkody i nawyki.',
    ],
    forWhom:
      'Dla młodych psychologów, psychoterapeutów pracujących w dowolnym nurcie oraz specjalistów wspierających, którzy chcą wzbogacić warsztat o skuteczne narzędzia pracy z wartościami.',
    included: [
      '7 godzin praktycznej pracy warsztatowej w kameralnej grupie.',
      'Autorskie ćwiczenia, pytania pomocnicze i karty do pracy z wartościami.',
      'Certyfikat potwierdzający udział w szkoleniu i liczbę godzin.',
      'Przerwy kawowe, poczęstunek i przestrzeń do wymiany doświadczeń.',
    ],
    registrationNote: 'Napisz do nas, aby zgłosić udział lub zapytać o dostępność miejsc.',
  },
];

export const completedTrainings: CompletedTraining[] = [
  {
    slug: 'wstep-do-act-edycje',
    status: 'completed',
    title: 'Wstęp do ACT – Przetestuj Nurt w Praktyce',
    shortDescription:
      'Poprzednie edycje praktycznego wprowadzenia do Terapii Akceptacji i Zaangażowania.',
    place: 'Sopot',
    format: 'warsztat stacjonarny',
    thumbnail: wdaLogo,
    description: [
      'Podczas spotkania uczestniczki poznawały fundamenty ACT, doświadczały kluczowych procesów na sobie i sprawdzały, jak metafory oraz ćwiczenia przekładają się na żywą rozmowę w gabinecie.',
    ],
    editions: [
      {
        label: 'Edycja 1',
        images: [wdaEdition1Photo],
      },
    ],
  },
];

export const trainings: Training[] = [...currentTrainings, ...completedTrainings];

export function findTrainingBySlug(slug: string | undefined) {
  return trainings.find((training) => training.slug === slug);
}
