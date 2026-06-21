import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home   from './pages/Home/Home';
import About  from './pages/About/About';
import WorkInProgress from './pages/WorkInProgress/WorkInProgress';

// import Products from './pages/Products/Products';
// import Contact  from './pages/Contact/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/products" element={<WorkInProgress />} />
          <Route path="/contact"  element={<WorkInProgress />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
