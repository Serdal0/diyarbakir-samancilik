export default function About() {
  return (
    <section id="hakkimizda" className="about-section">
      <div className="about-bg-text">SAMAN</div>
      <div className="about-inner">
        <div className="about-img-wrapper">
          <img src="/kapak2.jpeg" alt="Çiftlik" className="about-img" />
          <div className="about-img-frame" />
          <div className="about-year">
            <span className="about-year-num">1987</span>
            <span className="about-year-label">Kuruluş Yılı</span>
          </div>
        </div>
        <div className="about-text">
          <span className="section-tag">— Biz Kimiz —</span>
          <h2 className="section-title">Güven ve <span>Kalitenin</span> Adresi</h2>
          <p>  Türkiye'nin tüm illerine Kapıya teslimat yapıyoruz: Ankara Saman, Ardahan Saman, Göle Saman, Erzurum Saman, Oltu Saman, Pasinler Saman, 
  Malatya Saman, Rize Saman, Kars Saman, Hakkari Saman, Cizre Saman, Yüksekova Saman, Iğdır Saman, Tabzon Saman, Malatya Saman, Diyarbakır Saman, Karaman Saman, Muş Saman, Kırıkkale Saman, Sivas Saman, Kastamonu Saman,Tatvan Saman, Patnos Saman, Ağrı Saman, Kağızman Saman, Hanak Saman, Digor Saman, Selim Saman, Sarıkamış Saman, Horasan Saman, Şenkaya Saman, Arpaçay Saman ve daha fazlası</p>
          <div className="about-values">
            <div className="about-value">
              <div className="about-value-icon">🌱</div>
              <div className="about-value-text">
                <h4>%100 Doğal</h4>
                <p>Hiçbir katkı maddesi veya kimyasal içermez. Tamamen doğal hasat ürünüdür.</p>
              </div>
            </div>
            <div className="about-value">
              <div className="about-value-icon">🚚</div>
              <div className="about-value-text">
                <h4>Hızlı Teslimat</h4>
                <p>Diyarbakır ve çevre illere aynı gün, Türkiye genelinde 1-3 iş günü içinde teslimat.</p>
              </div>
            </div>
            <div className="about-value">
              <div className="about-value-icon">⚖️</div>
              <div className="about-value-text">
                <h4>Adil Fiyat</h4>
                <p>Aracı olmadan doğrudan üreticiden; rekabetçi fiyatlarla toptan ve perakende satış.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}