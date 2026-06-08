import { Link } from 'react-router-dom';

// Fallback for unknown routes.
function NotFound() {
  return (
    <section className="page">
      <h1 className="page__title">Strona nie istnieje</h1>
      <div className="page__divider" />
      <p className="page__note">
        <Link to="/" className="nav__link">Wróć na stronę główną</Link>
      </p>
    </section>
  );
}

export default NotFound;
