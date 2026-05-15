import { Star } from "lucide-react";

const reviews = [
  {
    text: "Platformë shumë e shpejtë dhe profesionale për editim fotosh.",
    name: "Ardit Hoxha",
    role: "Graphic Designer",
  },
  {
    text: "Upscale AI funksionon shumë mirë për produktet e biznesit tim.",
    name: "Elona K.",
    role: "E-commerce Owner",
  },
  {
    text: "Crop inteligjent dhe heqja e sfondit kursen shumë kohë.",
    name: "Kledi M.",
    role: "Content Creator",
  },
];

export default function Reviews() {
  return (
    <section className="reviewsSection" id="reviews">
      <div className="sectionTop">
        <h2>
          Të Preferuar nga <span>Krijuesit</span>
        </h2>
        <p>Shiko çfarë thonë përdoruesit për platformën tonë AI.</p>
      </div>

      <div className="reviewsGrid">
        {reviews.map((review) => (
          <div className="reviewCard" key={review.name}>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={15}
                  fill="#fbbf24"
                  color="#fbbf24"
                />
              ))}
            </div>

            <p className="reviewText">“{review.text}”</p>

            <div className="reviewUser">
              <strong>{review.name}</strong>
              <span>{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}