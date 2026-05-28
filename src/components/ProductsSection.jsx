import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";

function ProductsSection({
  products,
  productCategories,
  activeCategory,
  onCategoryChange,
  onAddToCart,
}) {
  return (
    <section id="products" className="section-block products-section">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Top picks</p>
          <h2>Featured products</h2>
        </div>

        <ProductFilters
          productCategories={productCategories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            product={product}
            onAddToCart={onAddToCart}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;