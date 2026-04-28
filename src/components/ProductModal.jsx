export default function ProductModal({ product, onClose, onOrder }) {
  if (!product) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={product.bgImage} alt={product.name} className="modal-img" />
        <div className="modal-body">
          <span className="modal-tag">Ürün Detayı</span>
          <h3 className="modal-title">{product.name}</h3>
          <p className="modal-desc">{product.description}</p>
          <p className="modal-detail">"{product.detail}"</p>
          <div className="modal-features">
            {product.features.map((f) => (
              <span key={f} className="modal-feature">✓ {f}</span>
            ))}
          </div>
          <div className="modal-actions">
            <button className="btn-primary" onClick={() => onOrder(product.id)}>Bu Ürünü Sipariş Et</button>
            <button className="btn-secondary" onClick={onClose}>Geri Dön</button>
          </div>
        </div>
      </div>
    </div>
  );
}