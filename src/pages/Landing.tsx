import founders from '../assets/images/founders.jpg';

/**
 * Landing page (route "/", reached by clicking the logo).
 * Centered founders photo with a few sentences directly below it,
 * the text width matched to the photo.
 *
 * TODO: replace the placeholder sentences below with the real copy.
 */
function Landing() {
  return (
    <section className="landing">
      <figure className="landing__figure">
        <img
          className="landing__photo"
          src={founders}
          alt="Założycielki ActFlow"
        />
      </figure>

      <div className="landing__text">
        <h1>ACT Flow – Znajdź swój terapeutyczny rytm</h1>

        <p className="landing__lead">
          Szkolenia ACT i mentoring dla młodych psychologów oraz specjalistów,
          którzy chcą rozwijać skrzydła w nurcie trzeciej fali.
        </p>

        <p>
          Pomagamy przekuć teorię w płynną, skuteczną praktykę gabinetową.
          Niezależnie od tego, czy stawiasz pierwsze kroki w zawodzie, czy
          chcesz wzbogacić swój warsztat o Terapię Akceptacji i Zaangażowania –
          znajdziesz tu narzędzia, wiedzę i wsparcie. <strong>Stawiamy na
          relację i spotkania na żywo</strong>, bo wierzymy, że w bezpośrednim
          kontakcie uczymy się najlepiej. Połącz naukowe standardy z ludzką
          autentycznością i złap swój zawodowy <em>flow</em>.
        </p>
      </div>
    </section>
  );
}

export default Landing;
