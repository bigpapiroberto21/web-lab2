import React from 'react';
import Item from './Item';
import contactsImg from '../assets/contacts.jpg';

export default function Contacts() {
  return (
    <aside id="contacts" className="mb-8 lg:mb-0 text-gray-800 dark:text-gray-300">
      <h2 className="text-xl mb-4 font-semibold">Контакти</h2>
      <Item icon={contactsImg}>
        <p>Email: klagno58@gmail.com</p>
        <p>Телефон: +3800000000</p>
        <p>GitHub: <a href="https://github.com/" className="text-blue-500 hover:underline">https://github.com/</a></p>
        <p>LinkedIn: <a href="https://ua.linkedin.com/" className="text-blue-500 hover:underline">https://ua.linkedin.com/</a></p>
      </Item>
    </aside>
  );
}