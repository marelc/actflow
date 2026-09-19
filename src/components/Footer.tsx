/** Footer text and the active Instagram profile. */

const INSTAGRAM_URL = 'https://www.instagram.com/actflow.pl';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        ActFlow — Acceptance &amp; Commitment
        <br />
        © {2026} ActFlow. Wszelkie prawa zastrzeżone.
      </p>

      <div className="footer__social">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>

      </div>
    </footer>
  );
}

export default Footer;
