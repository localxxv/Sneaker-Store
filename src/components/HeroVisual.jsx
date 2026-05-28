function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Featured sneaker">
      <div className="hero-card hero-card-main">
        <img
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1100&q=80"
          alt="White and orange sneaker"
        />

        <div className="floating-price">
          <span>From</span>
          <strong>$79</strong>
        </div>
      </div>

      <div className="hero-card hero-card-small">
        <span>Limited drop</span>
        <strong>Summer Street Pack</strong>
      </div>
    </div>
  );
}

export default HeroVisual;