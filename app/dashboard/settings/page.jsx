export default function SettingsPage() {
  return (
    <>
      <div className="dashHeader">
        <h1>Cilësimet e llogarisë</h1>
        <p>Menaxho preferencat e llogarisë dhe cilësimet e sigurisë.</p>
      </div>

      <div className="settingsWrap">
        <section className="settingsCard">
          <h2>Emri</h2>
          <p>Ju lutemi shkruani emrin tuaj të plotë ose një emër të shfaqur.</p>

          <input defaultValue="AI Image Editor User" />

          <div className="settingsBottom">
            <span>Ju lutemi përdorni maksimumi 32 karaktere.</span>
            <button>Ruaj</button>
          </div>
        </section>

        <section className="settingsCard">
          <h2>Email</h2>
          <p>
            Futni adresën e email-it që dëshironi të përdorni për t'u kyçur.
          </p>

          <input defaultValue="user@example.com" />

          <div className="settingsBottom">
            <span>Ju lutemi shkruani një adresë të vlefshme email-i.</span>
            <button>Ruaj</button>
          </div>
        </section>

        <section className="settingsCard">
          <h2>Vendos fjalëkalimin</h2>
          <p>
            Klikoni butonin më poshtë për të vendosur një fjalëkalim për
            llogarinë tuaj.
          </p>

          <div className="settingsBottom">
            <span>Siguro llogarinë tënde.</span>
            <button>Vendos fjalëkalimin</button>
          </div>
        </section>
      </div>
    </>
  );
}
