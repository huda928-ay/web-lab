import "./App.css";

function App() {
  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <h1>Hüda - Kişisel Portföy</h1>

        <nav aria-label="Ana navigasyon">
          <ul className="nav-list">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="site-main">

        {/* HAKKIMDA */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <figure className="profile">
            <img
              src="https://i.pravatar.cc/150"
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

        {/* PROJELER */}
        <section id="projeler">
          <h2>Projeler 🚀</h2>

          <article className="card">
            <h3>Web Lab Projesi</h3>
            <p>Vite + React + TS ile geliştirilmiş temel web uygulaması.</p>
            <p><strong>Teknolojiler:</strong> React, TypeScript</p>
          </article>

          <article className="card">
            <h3>AR Güneş Sistemi</h3>
            <p>Artırılmış gerçeklik ile gezegen inceleme uygulaması.</p>
            <p><strong>Teknolojiler:</strong> WebAR, Three.js</p>
          </article>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim">
          <h2>İletişim 📩</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <p className="form-hint">
                * İşaretli alanlar zorunludur.
              </p>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  placeholder="Adınız Soyadınız"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="ornek@mail.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu *</label>
                <select id="subject" name="subject" required defaultValue="">
                  <option value="">Seçiniz</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  placeholder="Mesajınızı yazınız..."
                />
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>

      </main>

      <footer className="site-footer">
        <p>© 2025 Hüda</p>
      </footer>
    </>
  );
}

export default App;