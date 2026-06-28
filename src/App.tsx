import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Landing from './pages/Landing';
import ONas from './pages/ONas';
import DlaczegoAct from './pages/DlaczegoAct';
import Szkolenia from './pages/Szkolenia';
import Mentoring from './pages/Mentoring';
import Artykuly from './pages/Artykuly';
import Kontakt from './pages/Kontakt';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/dlaczego-act" element={<DlaczegoAct />} />
          <Route path="/szkolenia-i-warsztaty" element={<Szkolenia />} />
          <Route path="/szkolenia-i-warsztaty/:slug" element={<Szkolenia />} />
          <Route path="/mentoring" element={<Mentoring />} />
          <Route path="/artykuly" element={<Artykuly />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
