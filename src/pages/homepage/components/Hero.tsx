import Header from "../../../components/header/Header"

export default function Hero() {
  return (
    <div className="hero-container">
      <Header />
      <div className="content">
        <div className="hero-text">
          <h1>Licensed, Bonded and Insured.</h1>
          <button>Get a Free Estimate</button>
        </div>
      </div>
    </div>
  );
}
