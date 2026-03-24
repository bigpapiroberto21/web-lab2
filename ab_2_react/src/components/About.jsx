import React from 'react';
import Item from './Item';
import aboutImg from '../assets/about.avif';

export default function About() {
  return (
    <section id="about" className="mb-8 pb-4 border-b border-gray-300">
      <h2 className="text-2xl mb-4 font-semibold">Про мене</h2>
      <Item icon={aboutImg}>
        <p>
          Я студент, який цікавиться кібербезпекою, мережевими технологіями та програмуванням.
          Маю базові знання з мережевої безпеки, криптографії та адміністрування систем, які активно використовую на практиці.
        </p>
      </Item>
    </section>
  );
}