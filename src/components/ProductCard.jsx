function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} />
        <span className="product-badge">{product.badge}</span>
      </div>

      <div className="product-info">
        <div>
          <p>{product.category}</p>
          <h3>{product.name}</h3>
          <span>{product.color}</span>
        </div>

        <strong>${product.price}</strong>
      </div>

      <button type="button" onClick={() => onAddToCart(product)}>
        Add to cart
      </button>
    </article>
  );
}

export default ProductCard;