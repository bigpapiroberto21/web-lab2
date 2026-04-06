import { useEffect, useState } from "react";

export default function Footer() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const data = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookiesEnabled: navigator.cookieEnabled,
      online: navigator.onLine,
      screenWidth: screen.width,
      screenHeight: screen.height
    };

    localStorage.setItem("systemInfo", JSON.stringify(data));

    const stored = JSON.parse(localStorage.getItem("systemInfo"));
    setInfo(stored);
  }, []);

  return (
    <footer className="w-full text-center text-sm border-t border-gray-300 dark:border-gray-300 text-gray-800 dark:text-gray-300 py-4 mt-8">
      © 2026 Лагно Костянтин
      <div>
        {info && (
          <>
            <p><b>User Agent:</b> {info.userAgent}</p>
            <p><b>Platform:</b> {info.platform}</p>
            <p><b>Language:</b> {info.language}</p>
            <p><b>Cookies:</b> {info.cookieEnabled}</p>
            <p><b>Online:</b> {info.online}</p>
            <p><b>Screen Width:</b> {info.screenWidth}</p>
            <p><b>Screen Heigth:</b> {info.screenHeight}</p>
          </>
        )}
        </div>
    </footer>
  );
}