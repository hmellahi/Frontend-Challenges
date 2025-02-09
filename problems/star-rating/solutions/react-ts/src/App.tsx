import "./styles.css";
import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  onChange: (rating: number) => void;
  ariaLabel?: string;
  size?: number;
}

const StarRating = ({
  rating = 0,
  onChange,
  ariaLabel = "Rate your experience",
  size = 24,
}: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  // Array of 5 stars
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  // Determine if a star should be filled based on rating and hover state
  const isStarFilled = (starNumber: number) => {
    if (hoverRating > 0) {
      return starNumber <= hoverRating;
    }
    return starNumber <= rating;
  };

  return (
    <div role="group" aria-label={ariaLabel} className="flex gap-1">
      {stars.map((starNumber) => (
        <button
          key={starNumber}
          aria-label={`Rate ${starNumber} star${starNumber === 1 ? "" : "s"}`}
          aria-pressed={rating === starNumber}
          className={`p-1 hover:scale-110 transition-transform rounded`}
          onMouseEnter={() => setHoverRating(starNumber)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => onChange(starNumber)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              // decrement rating
              onChange(Math.max(1, rating - 1));
            } else if (e.key === "ArrowRight") {
              // increment rating
              onChange(Math.min(5, rating + 1));
            }
          }}
        >
          <Star
            size={size}
            className={`transition-colors ${
              isStarFilled(starNumber)
                ? "fill-yellow-400 stroke-yellow-400"
                : "fill-transparent stroke-gray-400"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default function App() {
  const [rating, setRating] = useState(3);

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <StarRating rating={rating} onChange={setRating} size={48} />
      <p className="mt-2 text-xl text-gray-300">Selected rating: {rating}</p>
    </main>
  );
}
