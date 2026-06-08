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

      <p className="landing__text">
        Tu pojawi się kilka zdań wprowadzających — o tym, kim jesteśmy
        i co znajdziesz na ActFlow. Tekst dopasowany szerokością do zdjęcia
        powyżej.
      </p>
    </section>
  );
}

export default Landing;
