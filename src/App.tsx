import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Solutions } from './pages/Solutions';
import { TBRFramework } from './pages/TBRFramework';
import { Methodologies } from './pages/Methodologies';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SOLUTIONS} element={<Solutions />} />
          <Route path={ROUTES.TBR_FRAMEWORK} element={<TBRFramework />} />
          <Route path={ROUTES.METHODOLOGIES} element={<Methodologies />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          {/* Fallback routing */}
          <Route path="*" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
