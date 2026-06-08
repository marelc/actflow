/**
 * Footer: a short line or two of text + Instagram & Facebook links.
 * Lives at the bottom of the page flow, so on short pages it's only
 * seen once you scroll down.
 *
 * TODO: replace the placeholder text and the "#" social URLs once available.
 */

// Placeholder links — swap "#" for the real profile URLs.
const INSTAGRAM_URL = '#';
const FACEBOOK_URL = '#';

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

        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
