import SectionHeading from "./SectionHeading";

function GallerySection({ images }) {
  return (
    <section id="gallery" className="section-block gallery-section">
      <SectionHeading eyebrow="Our photos" title="Style inspiration" />

      <div className="gallery-grid">
        {images.map((image, index) => (
          <img key={image} src={image} alt={`Sneaker lifestyle ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default GallerySection;