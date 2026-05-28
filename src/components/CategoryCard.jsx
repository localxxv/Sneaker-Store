function CategoryCard({ category }) {
  return (
    <article className="category-card">
      <img src={category.image} alt={`${category.title} sneakers`} />

      <div className="category-overlay">
        <h3>{category.title}</h3>
        <p>{category.subtitle}</p>
        <a href="#products">{category.label}</a>
      </div>
    </article>
  );
}

export default CategoryCard;