import { ImageIcon, Search, Trash2, Copy } from "lucide-react";

export default function HistoryPage() {
  return (
    <>
      <div className="dashHeader">
        <h1>Historiku i imazheve</h1>
        <p>Menaxho dhe organizo ndryshimet e ruajtura të imazheve.</p>
      </div>

      <section className="dashPanel">
        <div className="historyToolbar">
          <div className="searchBox">
            <Search size={16} />
            <input placeholder="Search images by filename, tool, date..." />
          </div>

          <select>
            <option>Më të rejat e para</option>
            <option>Më i vjetri i parë</option>
          </select>
        </div>
      </section>

      <section className="historyList">
        <div className="historyRow">
          <div className="fileIcon">
            <ImageIcon size={19} />
          </div>

          <div>
            <strong>Nuk ka ende historik</strong>
            <p>Imazhet e modifikuara do të shfaqen këtu pas përpunimit.</p>
          </div>

          <div className="rowActions">
            <Copy size={16} />
            <Trash2 size={16} />
          </div>
        </div>
      </section>
    </>
  );
}
