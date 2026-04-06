import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import Form from './components/Form';

function App() {
  const [theme, setTheme] = useState("light");

  // Встановлюємо тему за часом доби при першому рендері
  useEffect(() => {
    const hour = new Date().getHours();
    const initialTheme = hour >= 7 && hour < 21 ? "light" : "dark";
    setTheme(initialTheme);
  }, []);

  // Додаємо/видаляємо клас 'dark' на <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-700 flex flex-col transition-colors duration-300">

      <button
        onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}
        className="fixed top-4 right-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded shadow hover:brightness-95 transition"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      {/* Header */}
      <Header />

      {/* Navigation */}
      <Nav />

      {/* Основний контент + sidebar */}
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto flex-1 gap-8 p-6">
        {/* Sidebar */}
        <aside className="lg:w-1/4">
          <Contacts />
        </aside>

        {/* Основний контент */}
        <main className="lg:w-3/4 flex-1 space-y-6">
          <About />
          <Education />
          <Experience />
          <Skills />
          <Reviews />
        </main>
      </div>

      {/* Contact Form */}
      <Form />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;