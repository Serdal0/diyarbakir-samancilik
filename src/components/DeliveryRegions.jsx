import { useState } from "react";
import { Link } from "react-router-dom";
import { cities } from "../data/cities";

// Tüm illeri bölgelere göre grupla (sadece province tipi)
const regionOrder = [
  "Doğu Anadolu",
  "Güneydoğu Anadolu",
  "Karadeniz",
  "Akdeniz",
  "İç Anadolu",
  "Ege",
  "Marmara",
];

const regionMeta = {
  "Doğu Anadolu":      { id: "dogu",       tag: "16 İl · 100+ İlçe" },
  "Güneydoğu Anadolu": { id: "guneydogu",  tag: "9 İl · 60+ İlçe"  },
  "Karadeniz":         { id: "karadeniz",  tag: "17 İl · 130+ İlçe" },
  "Akdeniz":           { id: "akdeniz",    tag: "8 İl · 60+ İlçe"   },
  "İç Anadolu":        { id: "ic",         tag: "15 İl · 100+ İlçe" },
  "Ege":               { id: "ege",        tag: "7 İl · 50+ İlçe"   },
  "Marmara":           { id: "marmara",    tag: "11 İl · 80+ İlçe"  },
};

// Sadece il tipindeki şehirleri bölgelerine göre grupla
const grouped = regionOrder.map((region) => ({
  region,
  ...regionMeta[region],
  provinces: cities.filter((c) => c.type === "province" && c.region === region),
}));

// Bir ilçenin kendi sayfası var mı?
const districtSlugs = new Set(
  cities.filter((c) => c.type === "district").map((c) => c.slug)
);

// İlçe adını slug'a çevir (Türkçe karakter normalize)
function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
    .replace(/İ/g, "i").replace(/ö/g, "o").replace(/ş/g, "s")
    .replace(/ü/g, "u").replace(/\s+/g, "-");
}

export default function DeliveryRegions() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="delivery-section" id="teslimat">
      {/* BANNER */}
      <div className="delivery-hero">
        <img src="/truck1.jpeg" className="delivery-hero-img" alt="Saman Yüklü Tır" />
        <div className="delivery-hero-overlay">
          <span className="section-tag">— Teslimat Ağımız —</span>
          <h2 className="delivery-hero-title">
            Türkiye Geneline <span>Kapıya Teslimat</span>
          </h2>
          <div className="delivery-stats-row">
            <div className="delivery-stat">
              <span className="delivery-stat-num">81</span>
              <span className="delivery-stat-label">İl</span>
            </div>
            <div className="delivery-stat-sep" />
            <div className="delivery-stat">
              <span className="delivery-stat-num">500+</span>
              <span className="delivery-stat-label">İlçe</span>
            </div>
            <div className="delivery-stat-sep" />
            <div className="delivery-stat">
              <span className="delivery-stat-num">1–3</span>
              <span className="delivery-stat-label">Gün İçinde</span>
            </div>
          </div>
        </div>
      </div>

      {/* AKORDİYON */}
      <div className="delivery-body">
        <div className="delivery-accordion">
          {grouped.map(({ region, id, tag, provinces }) => {
            const isOpen = openId === id;
            return (
              <div key={id} className={`delivery-region${isOpen ? " open" : ""}`}>
                <button
                  className="delivery-region-header"
                  onClick={() => toggle(id)}
                >
                  <div className="delivery-region-header-left">
                    <span className="delivery-region-name">{region} Bölgesi</span>
                    <span className="delivery-region-tag">{tag}</span>
                  </div>
                  <span className={`delivery-chevron${isOpen ? " up" : ""}`}>▼</span>
                </button>

                <div className="delivery-region-body">
                  <div className="delivery-city-grid">
                    {provinces.map((city) => (
                      <div key={city.slug} className="delivery-city-card">
                        {/* İl adı → şehir SEO sayfasına link */}
                        <Link
                          to={`/${city.slug}-saman`}
                          className="delivery-city-name-link"
                        >
                          {city.name} Saman →
                        </Link>

                        {/* İlçeler — kendi sayfası varsa link, yoksa düz metin */}
                        <div className="delivery-city-districts">
                          {city.districts.map((d, i) => {
                            const dSlug = toSlug(d);
                            const hasPage = districtSlugs.has(dSlug);
                            return hasPage ? (
                              <Link
                                key={d}
                                to={`/${dSlug}-saman`}
                                className="delivery-district-link"
                              >
                                {d}
                                {i < city.districts.length - 1 ? ", " : ""}
                              </Link>
                            ) : (
                              <span key={d}>
                                {d}
                                {i < city.districts.length - 1 ? ", " : ""}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ALT GÖRSEL */}
        <div className="delivery-footer-banner">
          <img src="/truck2.jpeg" alt="Saman Yüklü Tır" className="delivery-footer-img" />
          <div className="delivery-footer-overlay">
            <p>"Her sipariş özenle hazırlanır, güvenle kapınıza teslim edilir."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
