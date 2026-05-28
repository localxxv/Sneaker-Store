import { useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesSection from "./components/CategoriesSection";
import ProductsSection from "./components/ProductsSection";
import GallerySection from "./components/GallerySection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import { products, categories, gallery } from "./data/storeData";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const productCategories = ["All", "Women", "Men", "Kids"];

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const cartCount = cartItems.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  const cartTotal = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  function handleAddToCart(product) {
    setCartItems((currentItems) => {
      const existingProduct = currentItems.find((item) => item.id === product.id);

      if (existingProduct) {
        return currentItems.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setIsCartOpen(true);
  }

  function handleIncreaseQuantity(productId) {
    setCartItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      })
    );
  }

  function handleDecreaseQuantity(productId) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  }

  function handleRemoveFromCart(productId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  }

  function handleClearCart() {
    setCartItems([]);
  }

  return (
    <main className="app-shell">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      <Hero />

      <CategoriesSection categories={categories} />

      <ProductsSection
        products={filteredProducts}
        productCategories={productCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onAddToCart={handleAddToCart}
      />

      <GallerySection images={gallery} />

      <AboutSection />

      <Footer />

      <Cart
        isOpen={isCartOpen}
        cartItems={cartItems}
        cartTotal={cartTotal}
        onClose={() => setIsCartOpen(false)}
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
      />
    </main>
  );
}

export default App;