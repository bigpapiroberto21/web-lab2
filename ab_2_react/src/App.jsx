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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Nav />

      {/* Основний контент + sidebar */}
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto flex-1 gap-8 p-6">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <Contacts />
        </div>

        {/* Основний контент */}
        <div className="lg:w-3/4 flex-1">
          <About />
          <Education />
          <Experience />
          <Skills />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;