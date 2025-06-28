import { useState } from "react";

import { useState, useEffect } from "react";

export default function Header() {
  const [isdark, setIsDark] = useState(() => {
    return JSON.parse(localStorage.getItem("isdarkMode")) ?? false;
  });

  // Apply theme on initial render
  useEffect(() => {
    if (isdark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isdark]);

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">Where in the World?</h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isdark);
            localStorage.setItem("isdarkMode", JSON.stringify(!isdark)); // ✅ Store properly
          }}
        >
          <i className={`fa-solid fa-${isdark ? "moon" : "sun"}`} /> &nbsp;
          {isdark ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
}
