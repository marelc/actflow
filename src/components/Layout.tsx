import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

/**
 * App shell shared by every route: drifting background glows, the sticky
 * Header, the active page (<Outlet />), and the Footer. Scrolls back to the
 * top whenever the route changes.
 */
function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <div className="bg-glow-2" aria-hidden="true" />

      <div className="layout">
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
