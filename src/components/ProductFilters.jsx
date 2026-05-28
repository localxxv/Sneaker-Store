function ProductFilters({ productCategories, activeCategory, onCategoryChange }) {
  return (
    <div className="filter-list" aria-label="Product filters">
      {productCategories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? "active" : ""}
          onClick={() => onCategoryChange(category)}
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default ProductFilters;