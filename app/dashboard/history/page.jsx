import { ImageIcon, Search, Trash2, Copy } from "lucide-react";

export default function HistoryPage() {
  return (
    <>
      <div className="dashHeader">
        <h1>Image History</h1>
        <p>Manage and organize your saved image edits.</p>
      </div>

      <section className="dashPanel">
        <div className="historyToolbar">
          <div className="searchBox">
            <Search size={16} />
            <input placeholder="Search images by filename, tool, date..." />
          </div>

          <select>
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </div>
      </section>

      <section className="historyList">
        <div className="historyRow">
          <div className="fileIcon">
            <ImageIcon size={19} />
          </div>

          <div>
            <strong>No history yet</strong>
            <p>Your edited images will appear here after processing.</p>
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
