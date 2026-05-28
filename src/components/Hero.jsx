import Stats from "./Stats";
import HeroVisual from "./HeroVisual";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">New collection 2026</p>

        <h1>Fresh sneakers for every step of your day.</h1>

        <p className="hero-description">
          Discover comfortable, original and stylish shoes for men, women and
          kids. Built for city walks, sport days and weekend plans.
        </p>

        <div className="hero-actions">
          <a href="#products" className="primary-link">
            Shop collection
          </a>

          <a href="#categories" className="secondary-link">
            Explore categories
          </a>
        </div>

        <Stats />
      </div>

      <HeroVisual />
    </section>
  );
}

export default Hero;