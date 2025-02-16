import { useState, useEffect } from "react";
import moonSvg from "/assets/images/icon-moon.svg";
import sunSvg from "/assets/images/icon-sun.svg";
import lightLogo from "/assets/images/logo-light-theme.svg";
import darkLogo from "/assets/images/logo-dark-theme.svg";

const Header = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="px-6 py-4 xl:max-w-248 xl:mx-auto">
      <div className="flex justify-between items-center">
        <div className="h-6 md:h-9">
          <img
            src={dark ? darkLogo : lightLogo}
            alt="Logo of the website"
            className="h-full"
          />
        </div>
        <button
          type="button"
          className="bg-gray-200 dark:bg-gray-800 h-6 rounded-sm py-1 px-1 md:py-2 md:px-2 md:h-8"
          onClick={() => setDark(!dark)}
        >
          <img
            src={dark ? sunSvg : moonSvg}
            alt={dark ? "Sun Icon" : "Moon Icon"}
            className="h-full"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
