import actBooks from '../assets/images/act-books-web.jpg';
import paraImage from '../assets/images/para-web.jpg';
import piorkoImage from '../assets/images/piorko-web.jpg';

function DlaczegoAct() {
  return (
    <section className="why-act">
      <header className="why-act__full why-act__intro">
        <h1>Dlaczego właśnie ACT?</h1>
        <p className="why-act__lead">
          Terapia Akceptacji i Zaangażowania (ACT) to coś znacznie większego niż
          kolejny zestaw technik z podręcznika.
        </p>
        <p>
          To filozofia pracy, która łączy twardą naukę z głębokim humanizmem, a
          sztywne procedury zastępuje elastycznością i autentyczną relacją. Jeśli
          szukasz nurtu, który pozwoli Ci pracować skutecznie, a jednocześnie da
          Ci przestrzeń na intuicję, empatię i autentyczność - ACT jest
          odpowiedzią, której szukasz.
        </p>
      </header>

      <div className="why-act__full why-act__pillar-heading">
        <h2>Trzy filary, za które pokochasz ten nurt</h2>
        <div className="why-act__divider" />
      </div>

      <div className="why-act__grid">
        <div className="why-act__row">
          <figure className="why-act__image why-act__image--books">
            <img
              src={actBooks}
              alt="Stos książek związanych z terapią ACT i podejściem procesowym"
            />
          </figure>

          <article className="why-act__text why-act__text--science">
            <h2>1. Mocne fundamenty naukowe</h2>
            <p className="why-act__lead">Dowody, nie domysły</p>
            <p>
              Wchodząc w świat ACT, nie musisz wybierać między intuicją a nauką.
              Nurt ten wyrasta z psychologii behawioralnej i opiera się na
              solidnej teorii ram relacyjnych (RFT). Skuteczność ACT potwierdzają
              setki badań klinicznych na całym świecie. Pracując w tym podejściu,
              masz pewność, że Twoje działania w gabinecie mają realne,
              udowodnione odzwierciedlenie w nauce. Nie zmieniasz losowo technik -
              rozumiesz proces, który stoi za każdą zmianą u pacjenta.
            </p>
          </article>
        </div>

        <div className="why-act__row why-act__row--reverse">
          <article className="why-act__text why-act__text--relation">
            <h2>2. Głęboka relacyjność</h2>
            <p className="why-act__lead">Siedzimy w tej samej łodzi</p>
            <p>
              W ACT odchodzimy od chłodnej, profesjonalnej maski. Obowiązuje tu
              piękna metafora dwóch wspinaczy: jako terapeuta nie stoisz na
              szczycie góry, patrząc na pacjenta z góry. Ty również się wspinasz -
              na swojej własnej górze. Różnica polega jedynie na tym, że ze
              swojego miejsca na szlaku widzisz perspektywę pacjenta nieco
              wyraźniej i możesz podpowiedzieć mu, gdzie są alternatywne ścieżki.
              Ta perspektywa buduje niezwykle bezpieczną, partnerską relację
              opartą na zaufaniu i obopólnym szacunku.
            </p>
          </article>

          <figure className="why-act__image why-act__image--para">
            <img
              src={paraImage}
              alt="Para symbolizująca relacyjność i wspólną drogę w terapii"
            />
          </figure>
        </div>

        <div className="why-act__row">
          <figure className="why-act__image why-act__image--feather">
            <img
              src={piorkoImage}
              alt="Piórko symbolizujące lekkość i elastyczność"
            />
          </figure>

          <article className="why-act__text why-act__text--lightness">
            <h2>3. Lekkość i elastyczność</h2>
            <p className="why-act__lead">Pożegnaj sztywne protokoły</p>
            <p>
              Jeśli przeraża Cię wizja realizowania z pacjentem nudnych,
              powtarzalnych arkuszy krok po kroku - w ACT odetchniesz z ulgą.
              Sercem tego nurtu jest <em>elastyczność psychologiczna</em>.
              Pracujemy tu metaforą, doświadczeniem, ruchem i humorem. ACT daje
              terapeucie ogromną wolność twórczą. Zamiast walczyć z trudnymi
              myślami i emocjami pacjenta, uczymy się wraz z nim tę linę po prostu
              puścić. To rodzi niesamowite poczucie ulgi i lekkości w procesie
              terapeutycznym.
            </p>
          </article>
        </div>
      </div>

      <div className="why-act__full why-act__closing">
        <section className="why-act__closing-section">
          <h2>Dla kogo jest ACT?</h2>
          <p>
            Dla każdego specjalisty, który czuje, że w klasycznej terapii
            poznawczo-behawioralnej brakuje mu przestrzeni na akceptację,
            uważność i głębokie wartości. Dla tych, którzy chcą pomagać
            pacjentom budować świadome i sensowne życie - nie poprzez walkę z
            objawami, ale poprzez naukę tańca z życiowymi trudnościami.
          </p>
        </section>

        <section className="why-act__closing-section">
          <h2>Chcesz poczuć ten „flow” w swojej praktyce?</h2>
          <p>
            Teorii możesz nauczyć się z książek Russa Harrisa czy Stevena
            Hayesa. Ale elastyczności psychologicznej, pracy na procesie i
            autentycznego bycia w relacji uczysz się tylko w kontakcie z drugim
            człowiekiem.
          </p>
          <p>
            W <strong>ACT Flow</strong> zdejmujemy z nurtu akademicki patos.
            Pokazujemy, jak przekuć model Hexaflexu w naturalną, płynną rozmowę
            w gabinecie. Dołącz do naszych szkoleń na żywo i zobacz, jak ACT
            może odmienić Twój komfort pracy.
          </p>
        </section>
      </div>
    </section>
  );
}

export default DlaczegoAct;
