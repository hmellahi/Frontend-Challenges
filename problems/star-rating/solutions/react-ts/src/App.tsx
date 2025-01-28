import "./styles.css";
import React, { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  onChange: (rating: number) => void;
  ariaLabel?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  onChange,
  ariaLabel = "Rate your experience",
}) => {
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
    <div aria-label={ariaLabel} className="flex gap-1">
      {stars.map((starNumber) => (
        <button
          key={starNumber}
          // label = Rate X stars
          aria-label={`Rate ${starNumber} star${starNumber === 1 ? "" : "s"}`}
          className="p-1 hover:scale-110 transition-transform"
          onMouseEnter={() => setHoverRating(starNumber)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => onChange(starNumber)}
        >
          <Star
            size={24}
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

// Example usage component
export default function App() {
  const [rating, setRating] = useState(3);

  return (
    <main className="mx-auto pt-10 h-full">
      <StarRating rating={rating} onChange={setRating} />
      <p className="mt-2 text-sm text-gray-300">Selected rating: {rating}</p>
    </main>
  );
}
