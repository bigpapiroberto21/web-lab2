import React from 'react';
import Item from './Item';
import educImg from '../assets/educ.avif';

export default function Education() {
  return (
    <section id="education" className="mb-8 pb-4 border-b border-gray-300 dark:border-gray-300 text-gray-800 dark:text-gray-300">
      <h2 className="text-2xl mb-4 font-semibold">Освіта</h2>
      <Item icon={educImg}>
        <ul className="list-disc pl-5 space-y-1">
          <li>2021 - 2024 - Бакалавр, спеціальність "Кібербезпека", НТУУ "КПІ ім. І. Сікорського" (незакінчена)</li>
          <li>2024 - дотепер - Бакалавр, спеціальність "Кібербезпека", НУ "Львівська Політехніка"</li>
          <li>Курси по мережах від Cisco, Prometheus, Coursera, Udemy</li>
        </ul>
      </Item>
    </section>
  );
}