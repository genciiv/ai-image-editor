import { Check } from "lucide-react";

const plans = [
  {
    title: "Falas",
    price: "0€",
    period: "/muaj",
    desc: "Perfekt për ta provuar platformën.",
    features: ["5 imazhe në ditë", "Heqje sfondi", "Crop AI", "Support bazik"],
    button: "Fillo",
    active: false,
  },
  {
    title: "Pro",
    price: "19€",
    period: "/muaj",
    desc: "Për krijues dhe biznese serioze.",
    features: [
      "Imazhe pa limit",
      "Upscale HD",
      "Procesim ultra i shpejtë",
      "Support prioritar",
      "Export premium",
    ],
    button: "Kalo në Pro",
    active: true,
  },
];

export default function Pricing() {
  return (
    <section className="pricingSection" id="pricing">
      <div className="sectionTop">
        <h2>
          Plane të <span>Thjeshta</span>
        </h2>
        <p>Zgjidh planin që përshtatet me nevojat e tua.</p>
      </div>

      <div className="pricingGrid">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`pricingCard ${plan.active ? "activePlan" : ""}`}
          >
            <h3>{plan.title}</h3>

            <div className="price">
              <strong>{plan.price}</strong>
              <span>{plan.period}</span>
            </div>

            <p className="planDesc">{plan.desc}</p>

            <div className="planFeatures">
              {plan.features.map((feature) => (
                <div className="planFeature" key={feature}>
                  <Check size={16} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className={plan.active ? "planBtn activeBtn" : "planBtn"}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}