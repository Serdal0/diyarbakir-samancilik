import products from "../data/products";
import ProductCard from "./ProductCard";

export default function Products({ onProductClick }) {
  return (
    <section id="urunler" className="products-section">
      <div className="section-header">
        <span className="section-tag">— Ürün Kataloğumuz —</span>
        <h2 className="section-title"><span>Kapıya Teslim</span><br />Hızlı Teslimat</h2>
        <p className="section-desc">Her saman türü, farklı hayvan besleme ihtiyaçlarına özel özellikleriyle dikkat çeker.</p>
      </div>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onClick={onProductClick} />
        ))}
      </div>
    </section>
  );
}