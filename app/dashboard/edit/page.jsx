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
          <p className="muted">Choose image editing options.</p>

          <label className="inputLabel">Tool</label>
          <select className="dashInput">
            <option>Remove Background</option>
            <option>Upscale Image</option>
            <option>Smart Crop</option>
          </select>

          <button className="mainGradientBtn">
            <WandSparkles size={16} />
            Process Image
          </button>
        </section>

        <section className="dashPanel">
          <h2>Image Input</h2>
          <p className="muted">Upload an image file to edit.</p>

          <div className="uploadBox">
            <Upload size={22} />
            <span>Upload image file</span>
          </div>

          <div className="latestBox">
            <div className="panelTitleRow">
              <strong>Latest Result</strong>
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
          <strong>No recent edits</strong>
          <p>Edited images will appear here.</p>
        </div>
      </div>
    </>
  );
}
