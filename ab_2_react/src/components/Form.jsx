import { useEffect, useState } from "react";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3 className="text-2xl mb-4 font-semibold">Зворотній зв'язок</h3>

        <form action="https://formspree.io/f/xkopkzqd" method="POST">
          <input type="text" name="name" placeholder="Ім’я" required /><br /><br />
          <input type="email" name="email" placeholder="Email" required /><br /><br />
          <input type="tel" name="phone" placeholder="Телефон" /><br /><br />
          <textarea name="message" placeholder="Повідомлення"></textarea><br /><br />
          <div className="flex justify-between">
            <button type="submit" 
                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded shadow hover:brightness-95 transition">Відправити</button>
            <button onClick={() => setIsOpen(false)} 
                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded shadow hover:brightness-95 transition">Закрити</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
};

const modalStyle = {
  background: "white",
  padding: "20px",
  margin: "10% auto",
  width: "300px",
};