import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Guitars from './pages/Guitars';
import Limited from './pages/Limited';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="guitars" element={<Guitars />} />
        <Route path="limited" element={<Limited />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
}

export default App;

