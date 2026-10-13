"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/navigation";
import { personal } from "@/data/personal";

type Theme = "light" | "dark";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="site-container navbar__inner">
        <a
          className="navbar__brand"
          href="#top"
          aria-label={`${personal.name} home`}
          onClick={closeMenu}
        >
          S.
        </a>

        <nav className="navbar__desktop-nav" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              className={item.label === "Contact" ? "navbar__contact-link" : ""}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {mounted && theme === "dark" ? (
              <Sun size={17} strokeWidth={1.6} />
            ) : (
              <Moon size={17} strokeWidth={1.6} />
            )}
          </button>

          <button
            className="navbar__menu-button"
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="navbar__mobile-nav" aria-label="Mobile navigation">
          <div className="site-container navbar__mobile-nav-inner">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}