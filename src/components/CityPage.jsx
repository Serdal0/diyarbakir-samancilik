import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getCityBySlug, cities } from "../data/cities";

const PHONE = "05330497892";
const PHONE_DISPLAY = "0533 049 78 92";
const WA_MSG = (city) =>
  encodeURIComponent(`Merhaba, ${city} için pres saman fiyatı öğrenmek istiyorum.`);

export default function CityPage() {
  const { slug } = useParams();
  const citySlug = slug?.replace(/-saman$/, "");
  const city = getCityBySlug(citySlug);

  if (!city) return <Navigate to="/" replace />;

  const nearbyLinks = (city.nearby || [])
    .map((s) => cities.find((c) => c.slug === s))
    .filter(Boolean);

  const title =
    city.type === "district"
      ? `${city.name} Pres Saman — ${city.province} | Kapıya Teslimat | Diyarbakır Samancılık`
      : `${city.name} Pres Saman | Kapıya Teslimat | Buğday & Arpa Samanı — Diyarbakır Samancılık`;

  const description =
    city.type === "district"
      ? `${city.name} (${city.province}) pres saman siparişi — buğday samanı, arpa samanı kapınıza teslim. Hızlı teslimat, uygun fiyat. Hemen arayın: ${PHONE_DISPLAY}`
      : `${city.name} ve tüm ilçelerine pres saman teslimatı. ${city.districts.slice(0, 4).join(", ")} dahil tüm ${city.name} iline buğday samanı, arpa samanı kapıya teslim. Tel: ${PHONE_DISPLAY}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Diyarbakır Samancılık",
    description: description,
    url: `https://www.diyarbakirsamancilik.com/${city.slug}-saman`,
    telephone: "+90-533-049-78-92",
    areaServed: [
      { "@type": "City", name: city.name },
      ...nearbyLinks.map((c) => ({ "@type": "City", name: c.name })),
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={`${city.name} saman, ${city.name} pres saman, ${city.name} buğday samanı, ${city.name} arpa samanı, ${city.name} saman satın al, ${city.name} saman teslimat, ${city.type === "district" ? city.province + " saman," : ""} pres saman ${city.name}, saman fiyatları ${city.name}`}
        />
        <link
          rel="canonical"
          href={`https://www.diyarbakirsamancilik.com/${city.slug}-saman`}
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="city-page">
        {/* NAV */}
        <nav className="city-nav">
          <Link to="/" className="city-nav-logo">
            <span className="city-nav-logo-main">DİYARBAKIR</span>
            <span className="city-nav-logo-sub">SAMANCILIK</span>
          </Link>
          <a href={`tel:${PHONE}`} className="city-nav-phone">
            📞 {PHONE_DISPLAY}
          </a>
        </nav>

        {/* HERO */}
        <header className="city-hero">
          <div className="city-hero-bg" />
          <div className="city-hero-content">
            <span className="city-hero-tag">{city.region} Bölgesi</span>
            <h1 className="city-hero-title">
              {city.name} <span>Pres Saman</span>
            </h1>
            <p className="city-hero-subtitle">
              {city.type === "district"
                ? `${city.province} iline bağlı ${city.name} ilçesine kapıya teslimat`
                : `${city.name} merkez ve tüm ilçelerine kapıya teslimat`}
            </p>
            <div className="city-hero-ctas">
              <a href={`tel:${PHONE}`} className="city-btn-primary">
                📞 Hemen Ara — {PHONE_DISPLAY}
              </a>
              <a
                href={`https://wa.me/9${PHONE}?text=${WA_MSG(city.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="city-btn-secondary"
              >
                WhatsApp ile Sipariş
              </a>
            </div>
          </div>
        </header>

        {/* ÜRÜNLER */}
        <section className="city-products">
          <div className="city-section-inner">
            <h2 className="city-section-title">
              {city.name}'e Teslim Edilen Ürünler
            </h2>
            <div className="city-product-grid">
              {[
                {
                  name: "Pres Buğday Samanı",
                  desc: "1. kalite buğday samanı, sıkı preslenmiş balya",
                  img: "/bugday.jpeg",
                },
                {
                  name: "Pres Arpa Samanı",
                  desc: "Yüksek besin değerli arpa samanı balya",
                  img: "/arpa.jpg",
                },
                {
                  name: "Mercimek Samanı",
                  desc: "Protein açısından zengin mercimek samanı",
                  img: "/mercimek.jpg",
                },
              ].map((p) => (
                <div key={p.name} className="city-product-card">
                  <img src={p.img} alt={`${city.name} ${p.name}`} className="city-product-img" />
                  <div className="city-product-info">
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <a href={`tel:${PHONE}`} className="city-product-cta">
                      Fiyat Al
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESLİMAT KAPSAMI */}
        {city.type === "province" && city.districts.length > 0 && (
          <section className="city-coverage">
            <div className="city-section-inner">
              <h2 className="city-section-title">
                {city.name} İlçelerine Teslimat
              </h2>
              <p className="city-coverage-intro">
                {city.name} merkez dahil tüm ilçelerine pres saman teslimatı
                yapıyoruz.
              </p>
              <div className="city-district-grid">
                {city.districts.map((d) => (
                  <div key={d} className="city-district-chip">
                    {d} Saman
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* NEDEN BİZ */}
        <section className="city-why">
          <div className="city-section-inner">
            <h2 className="city-section-title">
              Neden Diyarbakır Samancılık?
            </h2>
            <div className="city-why-grid">
              {[
                { icon: "🚚", title: "Hızlı Teslimat", text: `${city.name}'e 1–3 iş günü içinde kapıya teslim` },
                { icon: "🌱", title: "%100 Doğal", text: "Katkısız, kimyasalsız, doğal hasat ürünü" },
                { icon: "⚖️", title: "Uygun Fiyat", text: "Doğrudan üreticiden, aracısız toptan fiyat" },
                { icon: "📦", title: "1987'den Beri", text: "35 yılı aşkın deneyimle güvenilir hizmet" },
              ].map((w) => (
                <div key={w.title} className="city-why-card">
                  <span className="city-why-icon">{w.icon}</span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YAKIN ŞEHİRLER — iç linkleme */}
        {nearbyLinks.length > 0 && (
          <section className="city-nearby">
            <div className="city-section-inner">
              <h2 className="city-section-title">Yakın Bölgelere de Teslimat</h2>
              <div className="city-nearby-grid">
                {nearbyLinks.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/${c.slug}-saman`}
                    className="city-nearby-link"
                  >
                    {c.name} Pres Saman
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ALT CTA */}
        <section className="city-bottom-cta">
          <h2>
            {city.name} Pres Saman Siparişi için Hemen Ulaşın
          </h2>
          <p>
            En uygun fiyat ve en hızlı teslimat için şimdi arayın veya WhatsApp
            ile mesaj atın.
          </p>
          <div className="city-hero-ctas">
            <a href={`tel:${PHONE}`} className="city-btn-primary">
              📞 {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/9${PHONE}?text=${WA_MSG(city.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="city-btn-secondary"
            >
              WhatsApp
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="city-footer">
          <Link to="/" className="city-footer-home">
            ← Ana Sayfaya Dön
          </Link>
          <p>© 2025 Diyarbakır Samancılık — Türkiye Geneli Pres Saman Teslimatı</p>
        </footer>
      </div>
    </>
  );
}
