const INSTAGRAM_URL =
  'https://www.instagram.com/actflow.pl';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.07 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.44L3 20.5l1.56-5.4A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M8.1 7.6c.2-.45.42-.46.7-.47h.48c.15 0 .4.06.6.5l.76 1.84c.08.2.13.43.03.65-.1.22-.16.35-.32.54l-.47.55c-.16.16-.33.34-.14.67.2.33.86 1.42 1.86 2.3 1.28 1.13 2.35 1.48 2.69 1.65.33.17.52.14.72-.08l.92-1.08c.22-.27.44-.22.74-.13l1.74.82c.33.16.55.24.63.37.08.14.08.78-.18 1.54-.26.76-1.53 1.45-2.1 1.54-.54.08-1.23.12-1.99-.12-.46-.14-1.05-.34-1.8-.67a10.5 10.5 0 0 1-4.4-3.87c-1.32-1.8-1.8-3.56-1.82-3.72-.02-.16-.22-1.56.59-2.37.2-.2.43-.36.55-.46z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Kontakt() {
  return (
    <section className="contact">
      <header className="contact__header">
        <p className="contact__eyebrow">Porozmawiajmy</p>
        <h1>Kontakt</h1>
        <div className="contact__general">
          <a className="contact__main-email" href="mailto:hello@actflow.pl">
            <MailIcon />
            hello@actflow.pl
          </a>
        </div>
      </header>

      <div className="contact__people">
        <article className="contact__person">
          <h2>Anita</h2>
          <div className="contact__links">
            <a href="tel:+48504773409"><PhoneIcon />+48 504 773 409</a>
            <a href="mailto:anita@actflow.pl"><MailIcon />anita@actflow.pl</a>
            <a
              href="https://wa.me/48504773409"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Napisz do Anity na WhatsApp"
            >
              <WhatsAppIcon />WhatsApp
            </a>
          </div>
        </article>

        <article className="contact__person">
          <h2>Marika</h2>
          <div className="contact__links">
            <a href="tel:+48577776736"><PhoneIcon />+48 577 776 736</a>
            <a href="mailto:marika@actflow.pl"><MailIcon />marika@actflow.pl</a>
          </div>
        </article>
      </div>

      <div className="contact__social">
        <p>Znajdź nas również tutaj</p>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
          Instagram
        </a>
      </div>
    </section>
  );
}

export default Kontakt;
