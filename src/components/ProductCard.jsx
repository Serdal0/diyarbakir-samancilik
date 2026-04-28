export default function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img src={product.bgImage} alt={product.name} className="product-card-img" />
      <div className="product-card-overlay" />
      <div className="product-card-content">
        <span className="product-card-icon">{product.icon}</span>
        <div className="product-card-name">{product.name}</div>
        <p className="product-card-short">{product.description.slice(0, 100)}...</p>
        <span className="product-card-tag">Detayları Gör →</span>
      </div>
    </div>
  );
}