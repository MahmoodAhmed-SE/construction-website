// font: (hero, headers): Sansation, (menu, buttons, text): Lato
// colors: cta: E74C3C, primary text: 2A2A2A, secondary text: 8F8F8F
import { useEffect, useState } from "react";
import "./App.css";

import { Sling as Hamburger } from "hamburger-react";

import brandIcon from "./assets/brand-icon.webp";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="hero-container">
        <header className={scrolled ? 'header dark-bg' : 'header'}>
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
        <div className="overlay"></div>
        <div className="content">
          <div className="hero-text">
            <h1>Welcome to Our Brand</h1>
            <button>Explore More</button>
          </div>
        </div>
      </div>
      kew;fkjw;fw
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
