import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/logo/actflow-logo-horizontal.png';
import { navItems } from '../navigation';

/**
 * Sticky header: horizontal logo across the top, text tabs centered below.
 * Logo + tabs stay visible at all times. Clicking the logo goes to the
 * landing page ("/"). A faint border/shadow fades in once you scroll.
 */
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__logo" aria-label="ActFlow — strona główna">
          <img src={logo} alt="ActFlow" />
        </Link>

        <nav className="nav" aria-label="Menu główne">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className="nav__link">
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
