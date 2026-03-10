import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <hr />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;