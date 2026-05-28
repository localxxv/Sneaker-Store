import Logo from "./Logo";

function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="navbar">
      <Logo />

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#categories">Categories</a>
        <a href="#products">Products</a>
        <a href="#gallery">Photo</a>
        <a href="#about">About</a>
      </nav>

      <button className="cart-button" type="button" onClick={onOpenCart}>
        Cart <span>{cartCount}</span>
      </button>
    </header>
  );
}

export default Navbar;