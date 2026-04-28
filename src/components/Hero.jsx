export default function Hero({ heroVisible, onProductsClick, onOrderClick }) {
  return (
    <section className="hero">
      <div className={`hero-bg${heroVisible ? " visible" : ""}`} />
      <div className="hero-overlay" />
      <div className="hero-grain" />
      <div className={`hero-content${heroVisible ? " visible" : ""}`}>
        <div className="hero-badge">Diyarbakır · Güneydoğu Anadolu</div>
        <h1 className="hero-title">
          Adrese Teslim <br /><span>Diyarbakır</span><br />Samanı
        </h1>
        <p className="hero-sub">
          Türkiyenin 81 iline Diyarbakır'ın bereketli Tarlalarından toplanan en kaliteli samanları,
          güvenilir ve hızlı teslimatla müşterilerimize buluşturuyoruz.
        </p>
        <div className="hero-cta">

          <button className="btn-primary" onClick={onOrderClick}>Hemen Sipariş Ver</button>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat"><div className="stat-num">37+</div><div className="stat-label">Yıllık Tecrübe</div></div>
        <div className="stat"><div className="stat-num">5000+</div><div className="stat-label">Mutlu Müşteri</div></div>
        <div className="stat"><div className="stat-num">%100</div><div className="stat-label">Doğal Ürün</div></div>
      </div>
    </section>
  );
}