import React from 'react';
import Item from './Item';
import expImg from '../assets/exp.jpg';

export default function Experience() {
  return (
    <section id="experience" className="mb-8 pb-4 border-b border-gray-300">
      <h2 className="text-2xl mb-4 font-semibold">Досвід роботи</h2>
      <Item icon={expImg}>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>2024-2025</strong> — Оператор відеомоніторингу
            <p>Відстежування камер безпеки, аналіз підозрілої активності, швидке реагування, підтримка зв’язку із клієнтами.</p>
          </li>
          <li>
            <strong>2025</strong> — Team Lead
            <p>Керував командою з 11 людей, допомагав у вирішенні інцидентів, підтримував працездатність команди та інструментів.</p>
          </li>
          <li>
            <strong>2025-дотепер</strong> — SOC Аналітик, Tier 1
            <p>Аналіз і розслідування інцидентів ІБ, класифікація інцидентів, ескалація складних випадків, розробка сценаріїв реагування, моніторинг мереж, документування та взаємодія з ІТ-підрозділами та зовнішніми командами.</p>
          </li>
        </ul>
      </Item>
    </section>
  );
}