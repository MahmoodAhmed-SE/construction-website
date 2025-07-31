import { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

import brandIcon from "/assets/brand-icon.webp";
import { NavLink } from "react-router";
import "./Header.css";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={scrolled ? "header dark-bg" : "header"}>
      <div className="brand-icon">
        <img src={brandIcon} />
      </div>

      <nav className={isOpen ? "menu open" : "menu"}>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>

      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        direction="right"
        size={45}
        color="white"
      />
    </header>
  );
}
