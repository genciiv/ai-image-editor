import {
  ImageIcon,
  Calendar,
  Languages,
  Star,
  WandSparkles,
  Clock,
  Copy,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <div className="dashHeader">
        <h1>Mirë se u ktheve!</h1>
        <p>Këtu është përmbledhja e hapësirës tënde AI Image Editor.</p>
      </div>

      <div className="statGrid">
        <div className="statCard">
          <div>
            <h3>Total Images</h3>
            <strong>0</strong>
            <p>Imazhe të edituara</p>
          </div>
          <ImageIcon size={18} />
        </div>

        <div className="statCard">
          <div>
            <h3>This Month</h3>
            <strong>0</strong>
            <p>Projekte të krijuara</p>
          </div>
          <Calendar size={18} />
        </div>

        <div className="statCard">
          <div>
            <h3>Tools</h3>
            <strong>3</strong>
            <p>AI tools aktive</p>
          </div>
          <Languages size={18} />
        </div>

        <div className="statCard">
          <div>
            <h3>Member Since</h3>
            <strong className="gold">2026</strong>
            <p>Account created</p>
          </div>
          <Star size={18} />
        </div>
      </div>

      <section className="dashPanel">
        <h2>
          <WandSparkles size={18} />
          Quick Actions
        </h2>

        <div className="quickGrid">
          <a href="/dashboard/edit" className="quickAction purpleAction">
            <WandSparkles size={20} />
            <strong>New Image Edit</strong>
            <span>Upload image and transform it</span>
          </a>

          <a href="/dashboard/history" className="quickAction">
            <Clock size={20} />
            <strong>View History</strong>
            <span>Browse saved edits</span>
          </a>
        </div>
      </section>

      <section className="dashPanel">
        <div className="panelTitleRow">
          <h2>
            <ImageIcon size={18} />
            Recent Images
          </h2>

          <a href="/dashboard/history">View All →</a>
        </div>

        <div className="recentList">
          <div className="recentItem">
            <div className="fileIcon">
              <ImageIcon size={18} />
            </div>

            <div>
              <strong>No images yet</strong>
              <p>Start by uploading your first image.</p>
            </div>

            <button>
              <Copy size={15} />
              Copy
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
