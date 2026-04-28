import { useState, useEffect, useRef } from "react";
import "./styles/global.css";

import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Products     from "./components/Products";
import ProductModal from "./components/ProductModal";
import About        from "./components/About";
import Order        from "./components/Order";
import Footer       from "./components/Footer";

export default function App() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [scrolled, setScrolled]           = useState(false);
  const [heroVisible, setHeroVisible]     = useState(false);
  const orderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOrder = () => {
    orderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOrderFromModal = (productId) => {
    setActiveProduct(null);
    setSelectedProduct(productId);
    scrollToOrder();
  };

  return (
    <div style={{ fontFamily: "'Playfair Display', serif", background: "#0f0d08", color: "#f0e8d5", minHeight: "100vh" }}>
      <Navbar scrolled={scrolled} onOrderClick={scrollToOrder} />
      <Hero
        heroVisible={heroVisible}
        onProductsClick={() => document.getElementById("urunler")?.scrollIntoView({ behavior: "smooth" })}
        onOrderClick={scrollToOrder}
      />
      <Products onProductClick={setActiveProduct} />
      <About />
      <div className="section-divider" />
      <Order orderRef={orderRef} defaultProduct={selectedProduct} />
      <Footer />
      <button className="wp-float" onClick={scrollToOrder} title="WhatsApp ile Sipariş">📲</button>
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onOrder={handleOrderFromModal}
      />
    </div>
  );
}