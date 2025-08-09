import './hero.css';
import Header from "../../../../components/Header";
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="hero-container">
      <Header isStaticColor={false}/>
      <div className="content">
        <div className="hero-text">
          <h1>Licensed, Bonded and Insured.</h1>
          <div className='cta-button'>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
