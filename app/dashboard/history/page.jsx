"use client";

import { useEffect, useState } from "react";
import { ImageIcon, Search, ExternalLink } from "lucide-react";

export default function HistoryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getImages() {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImages(data);
    }

    getImages();
  }, []);

  return (
    <>
      <div className="dashHeader">
        <h1>Image History</h1>
        <p>Këtu shfaqen të gjitha fotot që ke ngarkuar.</p>
      </div>

      <section className="dashPanel">
        <div className="historyToolbar">
          <div className="searchBox">
            <Search size={16} />
            <input placeholder="Search images..." />
          </div>
        </div>
      </section>

      <div className="realHistoryGrid">
        {images.length === 0 ? (
          <div className="historyCard">
            <ImageIcon size={20} />
            <strong>No images yet</strong>
            <p>Upload your first image from Edit Image.</p>
          </div>
        ) : (
          images.map((image) => (
            <div className="realImageCard" key={image.id}>
              <img src={image.url} alt={image.name} />

              <div>
                <strong>{image.name}</strong>
                <p>{image.tool || "Upload"}</p>
              </div>

              <a href={image.url} target="_blank">
                <ExternalLink size={15} />
                Open
              </a>
            </div>
          ))
        )}
      </div>
    </>
  );
}