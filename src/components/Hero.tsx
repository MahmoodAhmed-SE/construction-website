import { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

import brandIcon from "../assets/brand-icon.webp";
export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hero-container">
      <header className={scrolled ? "header dark-bg" : "header"}>
        <div className="brand-icon">
          <img src={brandIcon} />
        </div>

        <nav className={isOpen ? "menu open" : "menu"}>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>TESTIMONIALS</li>
            <li>CONTACT</li>
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
      <div className="content">
        <div className="hero-text">
          <h1>Licensed, Bonded and Insured.</h1>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}
