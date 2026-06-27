import actBooks from '../assets/images/act-books-web.jpg';

function DlaczegoAct() {
  return (
    <section className="why-act">
      <div className="why-act__hero">
        <div className="why-act__intro">
          <h1>Dlaczego właśnie ACT?</h1>
          <p className="why-act__lead">
            Terapia Akceptacji i Zaangażowania (ACT) to coś znacznie większego
            niż kolejny zestaw technik z podręcznika.
          </p>
          <p>
            To filozofia pracy, która łączy twardą naukę z głębokim humanizmem,
            a sztywne procedury zastępuje elastycznością i autentyczną relacją.
            Jeśli szukasz nurtu, który pozwoli Ci pracować skutecznie, a
            jednocześnie da Ci przestrzeń na intuicję, empatię i autentyczność -
            ACT jest odpowiedzią, której szukasz.
          </p>
        </div>

        <figure className="why-act__figure">
          <img
            src={actBooks}
            alt="Stos książek związanych z terapią ACT i podejściem procesowym"
          />
        </figure>
      </div>

      <div className="why-act__content">
        <h2>Trzy filary, za które pokochasz ten nurt</h2>

        <section className="why-act__section">
          <h3>1. Mocne fundamenty naukowe</h3>
          <p className="why-act__subtitle">Dowody, nie domysły</p>
          <p>
            Wchodząc w świat ACT, nie musisz wybierać między intuicją a nauką.
            Nurt ten wyrasta z psychologii behawioralnej i opiera się na
            solidnej teorii ram relacyjnych (RFT). Skuteczność ACT potwierdzają
            setki badań klinicznych na całym świecie. Pracując w tym podejściu,
            masz pewność, że Twoje działania w gabinecie mają realne,
            udowodnione odzwierciedlenie w nauce. Nie zmieniasz losowo technik -
            rozumiesz proces, który stoi za każdą zmianą u pacjenta.
          </p>
        </section>

        <section className="why-act__section">
          <h3>2. Głęboka relacyjność</h3>
          <p className="why-act__subtitle">Siedzimy w tej samej łodzi</p>
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
        </section>

        <section className="why-act__section">
          <h3>3. Lekkość i elastyczność</h3>
          <p className="why-act__subtitle">Pożegnaj sztywne protokoły</p>
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
        </section>

        <section className="why-act__section">
          <h2>Dla kogo jest ACT?</h2>
          <p>
            Dla każdego specjalisty, który czuje, że w klasycznej terapii
            poznawczo-behawioralnej brakuje mu przestrzeni na akceptację,
            uważność i głębokie wartości. Dla tych, którzy chcą pomagać
            pacjentom budować świadome i sensowne życie - nie poprzez walkę z
            objawami, ale poprzez naukę tańca z życiowymi trudnościami.
          </p>
        </section>

        <section className="why-act__section why-act__section--closing">
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
