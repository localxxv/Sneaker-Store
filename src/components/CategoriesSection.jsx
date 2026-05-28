import SectionHeading from "./SectionHeading";
import CategoryCard from "./CategoryCard";

function CategoriesSection({ categories }) {
  return (
    <section id="categories" className="section-block">
      <SectionHeading eyebrow="Choose your fit" title="Product categories" />

      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.title} />
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;