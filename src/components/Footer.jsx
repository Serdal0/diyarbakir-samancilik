export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-map">
        <div className="footer-map-label">
          <span>📍</span> Diyarbakır, Türkiye — Türkiye'nin 81 İline Teslimat
        </div>
        <iframe
          title="Diyarbakır Samancılık Konum"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.5568089130347!2d42.71628607659021!3d41.100529071337704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89654446714e460f%3A0x25b62bd30363a44a!2zRGl5YXJiYWvEsXIgU2FtYW5jxLFsxLFr!5e0!3m2!1str!2str!4v1777385825934!5m2!1str!2str></iframe>"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="footer-inner">
        <div>
          <div className="footer-logo-main">Diyarbakır Samancılık</div>
          <div className="footer-logo-sub">Est. 1987</div>
          <p className="footer-desc">Güneydoğu Anadolu'nun en güvenilir saman tedarikçisi. Kaliteli ürün, zamanında teslimat ve dürüst ticaret anlayışımızla hizmetinizdeyiz.</p>
        </div>
        <div className="footer-col">
          <h4>Ürünlerimiz</h4>
          <ul>
            <li>🌾 Buğday Samanı</li>
            <li>🌿 Arpa Samanı</li>
            <li>🟤 Mercimek Samanı</li>
            <li>📦 Toptan Satış</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>İletişim</h4>
          <ul>
            <li>📍 Diyarbakır, Türkiye</li>
            <li>📞 0533 049 78 92</li>
            <li>💬 WhatsApp Sipariş</li>
            <li>🕐 7/24 </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Diyarbakır Samancılık. Tüm hakları saklıdır.</span>
            <p>
            Powered by{" "}
            <a
              href="https://www.serdalkolpar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-gray-300"
            >
              Serdal Kolpar
            </a>
          </p>
      </div>
    </footer>
  );
}