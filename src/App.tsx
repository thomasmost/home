import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Poetry from './pages/Poetry';
import CharacterSheet from './pages/CharacterSheet';

import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Analytics />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Easter egg: renders standalone, outside the site chrome.
            Deliberately not linked from the nav or anywhere else. */}
        <Route path="/character-sheet" element={<CharacterSheet />} />
      </Routes>
    </>
  );
}

export default App;
