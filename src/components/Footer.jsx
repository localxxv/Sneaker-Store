import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Logo />
        <p>Modern footwear store concept for React portfolio.</p>
      </div>

      <div className="footer-menu">
        <h3>Menu</h3>
        <a href="#categories">Categories</a>
        <a href="#products">Products</a>
        <a href="#gallery">Photo</a>
        <a href="#about">About</a>
      </div>

      <div className="newsletter">
        <h3>Sign up</h3>
        <p>Get fresh drops and sale alerts.</p>

        <form onSubmit={(event) => event.preventDefault()}>
          <input type="email" placeholder="Your email" aria-label="Email" />
          <button type="submit">Join</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;