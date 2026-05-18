"use client";

import { useState } from "react";
import { Upload, WandSparkles, ImageIcon, ExternalLink } from "lucide-react";

function buildTransformedUrl(url, tool) {
  if (!url) return "";

  const separator = url.includes("?") ? "&" : "?";

  if (tool === "Remove Background") {
    return `${url}${separator}tr=e-bgremove`;
  }

  if (tool === "Upscale Image") {
    return `${url}${separator}tr=w-1600,q-95`;
  }

  if (tool === "Smart Crop") {
    return `${url}${separator}tr=w-800,h-800,fo-auto`;
  }

  return url;
}

export default function EditImagePage() {
  const [imageUrl, setImageUrl] = useState("");
  const [processedUrl, setProcessedUrl] = useState("");
  const [tool, setTool] = useState("Remove Background");
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("tool", "Upload");

    setUploading(true);

    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setUploading(false);

    if (data.error) {
      alert(data.error);
      return;
    }

    setImageUrl(data.url);
    setProcessedUrl("");
  }

  async function handleProcess() {
  if (!imageUrl) {
    alert("Ngarko një foto fillimisht.");
    return;
  }

  const creditsRes = await fetch("/api/user/credits");
  const creditsData = await creditsRes.json();

  if (creditsData.plan !== "PRO" && creditsData.credits <= 0) {
    alert("Nuk ke më credits. Upgrade në Pro.");
    return;
  }

  const newUrl = buildTransformedUrl(imageUrl, tool);
  setProcessedUrl(newUrl);

  const useCreditRes = await fetch("/api/use-credit", {
    method: "POST",
  });

  const useCreditData = await useCreditRes.json();

  if (useCreditData.error) {
    alert(useCreditData.error);
  }
}

  return (
    <>
      <div className="dashHeader centerHeader">
        <h1>AI Image Editor</h1>
        <p>Upload një imazh dhe përpunoje me mjetet AI.</p>
      </div>

      <div className="editGrid">
        <section className="dashPanel">
          <h2>Settings</h2>
          <p className="muted">Zgjidh çfarë do bësh me imazhin.</p>

          <label className="inputLabel">Tool</label>

          <select
            className="dashInput"
            value={tool}
            onChange={(e) => setTool(e.target.value)}
          >
            <option>Remove Background</option>
            <option>Upscale Image</option>
            <option>Smart Crop</option>
          </select>

          <button className="mainGradientBtn" onClick={handleProcess}>
            <WandSparkles size={16} />
            Process Image
          </button>
        </section>

        <section className="dashPanel">
          <h2>Image Input</h2>
          <p className="muted">Ngarko një foto nga kompjuteri.</p>

          <label className="uploadBox">
            <Upload size={22} />
            <span>{uploading ? "Duke u ngarkuar..." : "Upload image file"}</span>

            <input type="file" accept="image/*" onChange={handleUpload} hidden />
          </label>

          <div className="compareGrid">
            <div className="latestBox resultBox">
              <div className="panelTitleRow">
                <strong>Original</strong>

                {imageUrl && (
                  <a href={imageUrl} target="_blank">
                    <ExternalLink size={15} />
                    Open
                  </a>
                )}
              </div>

              {imageUrl ? (
                <img src={imageUrl} alt="Original" className="previewImage" />
              ) : (
                <p>No image uploaded yet.</p>
              )}
            </div>

            <div className="latestBox resultBox">
              <div className="panelTitleRow">
                <strong>Processed</strong>

                {processedUrl && (
                  <a href={processedUrl} target="_blank">
                    <ExternalLink size={15} />
                    Open
                  </a>
                )}
              </div>

              {processedUrl ? (
                <img src={processedUrl} alt="Processed" className="previewImage" />
              ) : (
                <p>No processed image yet.</p>
              )}
            </div>
          </div>
        </section>
      </div>

      <section className="dashHeader centerHeader smallTop">
        <h2>Recent Edits</h2>
        <p>Rezultatet ruhen te History pas upload-it.</p>
      </section>

      <div className="historyGrid">
        <div className="historyCard">
          <ImageIcon size={20} />
          <strong>Image tools ready</strong>
          <p>Upload, process and open the generated result.</p>
        </div>
      </div>
    </>
  );
}