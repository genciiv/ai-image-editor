import {
  Scissors,
  Expand,
  Focus,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <Scissors size={28} />,
    title: "Heqje Sfondi",
    text: "Hiq sfondin nga fotot në sekonda me AI profesionale.",
    color: "#dcfce7",
    iconColor: "#16a34a",
  },
  {
    icon: <Expand size={28} />,
    title: "Rritje Cilësie",
    text: "Përmirëso cilësinë dhe rezolucionin pa humbur detaje.",
    color: "#dbeafe",
    iconColor: "#2563eb",
  },
  {
    icon: <Focus size={28} />,
    title: "Crop Inteligjent",
    text: "AI fokuson automatikisht objektin kryesor të fotos.",
    color: "#f3e8ff",
    iconColor: "#9333ea",
  },
  {
    icon: <Zap size={28} />,
    title: "Procesim i Shpejtë",
    text: "Përpuno imazhet shumë shpejt me infrastrukturë AI.",
    color: "#fef3c7",
    iconColor: "#d97706",
  },
];

export default function Features() {
  return (
    <section className="featuresSection" id="features">
      <div className="sectionTop">
        <h2>
          Mjete AI në <span>Majat e Gishtave</span>
        </h2>

        <p>
          Gjithçka që të duhet për të krijuar dhe përmirësuar imazhe profesionale.
        </p>
      </div>

      <div className="featuresGrid">
        {features.map((item, index) => (
          <div className="featureCard" key={index}>
            <div
              className="featureIcon"
              style={{
                background: item.color,
                color: item.iconColor,
              }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}