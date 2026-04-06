import React from 'react';
import Item from './Item';
import skillImg from '../assets/skill.jpg';

export default function Skills() {
  return (
    <section id="skills" className="mb-8 pb-4 border-b border-gray-300 dark:border-gray-300 text-gray-800 dark:text-gray-300">
      <h2 className="text-2xl mb-4 font-semibold">Навички</h2>
      <Item icon={skillImg}>
        <ul className="list-disc pl-5 space-y-1">
          <li>Основи мережевих технологій</li>
          <li>TCP/IP</li>
          <li>Linux</li>
          <li>Wireshark</li>
          <li>SQL</li>
          <li>Основи Python, Bash</li>
        </ul>
      </Item>
    </section>
  );
}