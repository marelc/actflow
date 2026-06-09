import anitaPhoto from '../assets/images/fotoAnita_small.jpg';
import marikaPhoto from '../assets/images/fotoMarika_small.jpg';
import togetherPhoto from '../assets/images/together_cr_small.jpg';

function ONas() {
  return (
    <section className="about">
      <header className="about__header">
        <h1>O nas</h1>
      </header>

      <div className="about__grid">
        <figure className="about__photo about__photo--portrait">
          <img src={anitaPhoto} alt="Anita Podlasińska" />
        </figure>

        <article className="about__text">
          <h2>Anita Podlasińska</h2>
          <p className="about__lead">
            Psycholożka, literaturoznawczyni, pasjonatka ludzkich opowieści.
          </p>
          <p>
            Cześć! Prowadzę własną praktykę psychoterapeutyczną w Gdańsku, a
            moje serce zawodowe bije w rytmie trzeciej fali behawioryzmu. Na co
            dzień kształcę się w szkole psychoterapii Behawioralnie, jestem
            członkinią ACBS i w pracy z pacjentami opieram się przede wszystkim
            na modelach ACT oraz FAP.
          </p>
          <p>
            Wierzę, że każdy z nas nosi w sobie unikalną historię. Dzięki mojemu
            literaturoznawczemu wykształceniu, w gabinecie łączę psychoterapię z
            literaturą. Fascynuje mnie to, jak osobiste narracje kreują nasze
            myślenie i zachowanie, i chętnie wykorzystuję literaturę jako
            potężne narzędzie terapeutyczne.
          </p>
          <p>
            Szczególne miejsce w mojej praktyce zajmuje wspieranie osób
            neuroróżnorodnych w budowaniu satysfakcjonującego życia w
            neurotypowym świecie.
          </p>
          <p>
            <strong>W ACT Flow chcę pokazać Ci, że</strong> dobra terapia nie
            polega na sztywnym trzymaniu się procedur. W modelach ACT i FAP
            najbardziej cenię autentyczną, żywą relację. Podczas naszych spotkań
            na żywo nauczę Cię, jak z lekkością i odwagą korzystać z narzędzi
            trzeciej fali, zachowując przy tym swoją unikalną, terapeutyczną
            tożsamość.
          </p>
        </article>

        <article className="about__text">
          <h2>Marika Malicka</h2>
          <p className="about__lead">
            Psycholożka specjalizująca się w obszarze uzależnień, pasjonatka
            analizy funkcjonalnej.
          </p>
          <p>
            Cześć! Od kilku lat aktywnie działam w obszarze pomocy
            psychologicznej, prowadząc konsultacje indywidualne oraz pracując z
            rodzinami. Swoje doświadczenie zawodowe rzeźbiłam w wymagających
            środowiskach - od poradni psychologiczno-pedagogicznych, przez
            oddziały opiekuńczo-pielęgnacyjne, aż po dzienne i całodobowe
            oddziały terapii uzależnień. Specjalizuję się także we wczesnym
            wspomaganiu rozwoju oraz terapii dzieci i młodzieży z zaburzeniami
            rozwoju.
          </p>
          <p>
            W pracy gabinetowej najbliższe jest mi podejście
            kontekstualno-behawioralne. Jestem członkinią ACBS - zarówno
            międzynarodowej społeczności, jak i jej polskiego oddziału. Skupiam
            się na rozwijaniu elastyczności psychologicznej, pomagając pacjentom
            działać w zgodzie z własnymi wartościami, nawet w obliczu
            najtrudniejszych emocji i myśli.
          </p>
          <p>
            <strong>W ACT Flow chcę pokazać Ci, że</strong> skuteczna terapia
            opiera się na głębokim zrozumieniu człowieka, a nie na sztywnych
            schematach z podręcznika. Moją pasją jest uczenie myślenia
            procesowego oraz analizy funkcjonalnej zachowania. Podczas naszych
            spotkań na żywo pomogę Ci opanować te narzędzia tak, abyś
            potrafił_a z lekkością i pewnością siebie wspierać swoich pacjentów
            w realnej zmianie.
          </p>
        </article>

        <figure className="about__photo about__photo--portrait">
          <img src={marikaPhoto} alt="Marika Malicka" />
        </figure>

        <figure className="about__photo about__photo--together">
          <img src={togetherPhoto} alt="Anita Podlasińska i Marika Malicka" />
        </figure>

        <article className="about__text about__text--center">
          <h2>Jak to się zaczęło?</h2>
          <p>
            Poznałyśmy się dokładnie tam, gdzie bije serce trzeciej fali - na
            szkoleniu Russa Harrisa. Szybko okazało się, że nadajemy na tych
            samych falach i łączy nas nie tylko miłość do nurtu ACT, ale też
            identyczne spojrzenie na rozwój zawodowy psychologów. Z tej energii,
            przegadanych przerw kawowych i wspólnej wizji stworzenia
            bezpiecznej, żywej przestrzeni dla specjalistów, narodziło się ACT
            Flow.
          </p>
        </article>
      </div>
    </section>
  );
}

export default ONas;
