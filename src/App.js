import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Mobile from './components/Mobile';
import Email from './components/Email';
import Adhar from './components/Adhar';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/email" element={<Email />} />
          <Route path="/adhar" element={<Adhar />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
