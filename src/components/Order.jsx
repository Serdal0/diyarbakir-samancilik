import products from "../data/products";

const WHATSAPP_NUMBER = "905330497892";
const PHONE_NUMBER    = "+905330497892";

export default function Order({ orderRef }) {
  const handleWhatsApp = (productId = "") => {
    const productLabel = productId
      ? products.find((p) => p.id === productId)?.name
      : "";
    const message = productLabel
      ? `Merhaba, Diyarbakır Samancılık'tan sipariş vermek istiyorum.%0A%0AÜrün: ${productLabel}`
      : `Merhaba, Diyarbakır Samancılık'tan sipariş vermek istiyorum.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="siparis" className="order-section" ref={orderRef}>
      <div className="order-inner">
        <div className="section-header">
          <span className="section-tag">— Sipariş —</span>
          <h2 className="section-title">WhatsApp ile <span>Hızlı Sipariş</span></h2>
          <p className="section-desc">Ürün seçin veya direkt WhatsApp'tan bize ulaşın.</p>
        </div>

        <div className="order-card" style={{ padding: "50px 40px" }}>
          
          {/* WhatsApp Butonu */}
          <button
            className="order-btn"
            onClick={() => handleWhatsApp()}
            style={{ maxWidth: "480px", margin: "0 auto 16px" }}
          >
            <span style={{ fontSize: "1.3rem" }}>📲</span>
            WhatsApp ile Sipariş Ver
          </button>

          
          <a
            href={`tel:${PHONE_NUMBER}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              maxWidth: "480px",
              margin: "0 auto 40px",
              background: "rgba(200,169,110,0.08)",
              border: "1px solid rgba(200,169,110,0.3)",
              color: "#C8A96E",
              padding: "18px 48px",
              fontFamily: "'Crimson Pro', serif",
              fontSize: "1rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(200,169,110,0.18)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(200,169,110,0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span style={{ fontSize: "1.3rem" }}>📞</span>
            Ara, Sipariş Ver
          </a>

          {/* Ayraç */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(200,169,110,0.2)" }} />
            <span style={{
              fontFamily: "'Crimson Pro', serif",
              color: "#605040",
              fontSize: "0.8rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>
              Ürüne Göre Sipariş Ver
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(200,169,110,0.2)" }} />
          </div>

          {/* Ürün Butonları */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => handleWhatsApp(p.id)}
                style={{
                  background: "rgba(200,169,110,0.08)",
                  border: "1px solid rgba(200,169,110,0.3)",
                  color: "#C8A96E",
                  padding: "14px 28px",
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: "1rem",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(200,169,110,0.18)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(200,169,110,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span>{p.icon}</span>
                {p.name}
              </button>
            ))}
          </div>

          <p className="order-note" style={{ marginTop: "28px" }}>
            Butona tıkladığınızda WhatsApp veya telefon üzerinden bizimle iletişime geçebilirsiniz. Ekibimiz en kısa sürede yanıt verecektir.
          </p>
        </div>
      </div>
    </section>
  );
}