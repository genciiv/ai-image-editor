import { Upload, WandSparkles, ImageIcon } from "lucide-react";

export default function EditImagePage() {
  return (
    <>
      <div className="dashHeader centerHeader">
        <h1>AI Image Editor</h1>
        <p>Upload an image and transform it with AI tools.</p>
      </div>

      <div className="editGrid">
        <section className="dashPanel">
          <h2>Settings</h2>
          <p className="muted">Zgjidhni opsionet e redaktimit të imazhit.</p>

          <label className="inputLabel">Tool</label>
          <select className="dashInput">
            <option>Hiq sfondin</option>
            <option>Imazh i nivelit të lartë</option>
            <option>Smart Crop</option>
          </select>

          <button className="mainGradientBtn">
            <WandSparkles size={16} />
            Imazh i procesit
          </button>
        </section>

        <section className="dashPanel">
          <h2>Futja e imazhit</h2>
          <p className="muted">Ngarko një skedar imazhi për ta modifikuar.</p>

          <div className="uploadBox">
            <Upload size={22} />
            <span>Ngarko skedarin e imazhit</span>
          </div>

          <div className="latestBox">
            <div className="panelTitleRow">
              <strong>Rezultati më i fundit</strong>
              <button>Copy</button>
            </div>

            <p>No image processed yet.</p>
          </div>
        </section>
      </div>

      <section className="dashHeader centerHeader smallTop">
        <h2>Recent Edits</h2>
        <p>Your latest AI image results</p>
      </section>

      <div className="historyGrid">
        <div className="historyCard">
          <ImageIcon size={20} />
          <strong>Nuk ka ndryshime të fundit</strong>
          <p>Imazhet e modifikuara do të shfaqen këtu.</p>
        </div>
      </div>
    </>
  );
}
