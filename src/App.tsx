import "./App.css";

function App() {
  return (
    <>
      {/* Skip link (Uygulama-3) */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <h1>Hüda - Kişisel Portföy</h1>

        {/* Nav'a aria-label (Uygulama-3) */}
        <nav aria-label="Ana navigasyon">
          <ul className="nav-list">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="site-main">
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <figure className="profile">
            <img
              src="https://via.placeholder.com/140"
              alt="Hüda'nın profil fotoğrafı"
              width={140}
              height={140}
            />
            <figcaption>Hüda</figcaption>
          </figure>

          <p>
            Yazılım mühendisliği öğrencisiyim. Web geliştirme ve AR projeleriyle ilgileniyorum.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML5 / CSS</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projeler</h2>

          {/* Her proje bir article (Uygulama-5) */}
          <article className="card">
            <h3>Web Lab Projesi</h3>
            <p>Vite + React + TS ile geliştirilmiş temel web uygulaması.</p>
            <p><strong>Teknolojiler:</strong> React, TypeScript</p>
          </article>

          <article className="card">
            <h3>AR Güneş Sistemi</h3>
            <p>Gezegenleri AR ortamında incelemeyi sağlayan etkileşimli proje.</p>
            <p><strong>Teknolojiler:</strong> WebAR, Three.js</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>

          {/* Uygulama-4: doğrulamalı form + small error alanları */}
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                  defaultValue=""
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                />
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2025 Hüda. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;