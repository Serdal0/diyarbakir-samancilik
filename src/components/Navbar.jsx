export default function Navbar({ scrolled, onOrderClick }) {
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-logo">
        <span className="nav-logo-main">Diyarbakır Samancılık</span>
        <span className="nav-logo-sub">Est. 1987</span>
      </div>

      <ul className="nav-links" style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "32px",
        listStyle: "none",
      }}>
        <li><a href="#urunler">Ürünler</a></li>
        <li><a href="#hakkimizda">Hakkımızda</a></li>
        <li><a href="#siparis">Sipariş Ver</a></li>
      </ul>

      <button className="btn-primary nav-order-btn" onClick={onOrderClick} style={{ padding: "10px 24px", fontSize: "0.75rem" }}>
        Sipariş Ver
      </button>
    </nav>
  );
}