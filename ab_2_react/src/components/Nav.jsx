import React from 'react';

export default function Nav() {
  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-center gap-6 p-4 flex-wrap">
        <li>
          <a
            href="#about"
            className="text-gray-800 font-medium hover:text-blue-500 hover:underline transition-colors duration-200"
          >
            Про мене
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="text-gray-800 font-medium hover:text-blue-500 hover:underline transition-colors duration-200"
          >
            Освіта
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-gray-800 font-medium hover:text-blue-500 hover:underline transition-colors duration-200"
          >
            Досвід роботи
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-gray-800 font-medium hover:text-blue-500 hover:underline transition-colors duration-200"
          >
            Навички
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            className="text-gray-800 font-medium hover:text-blue-500 hover:underline transition-colors duration-200"
          >
            Контакти
          </a>
        </li>
      </ul>
    </nav>
  );
}