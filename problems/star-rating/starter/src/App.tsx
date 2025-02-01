import "./styles.css";
import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  onChange: (rating: number) => void;
}

const StarRating = ({ rating = 0, onChange }: StarRatingProps) => {
  return (
    <div className="flex gap-1">
      <button className="p-1 hover:scale-110 transition-transform">
        {/* EMPTY STAR */}
        <Star
          size={24}
          className="transition-colors fill-transparent stroke-gray-400"
        />
      </button>
      <button className="p-1 hover:scale-110 transition-transform">
        {/* FILLED STAR */}
        <Star
          size={24}
          className="transition-colors fill-yellow-400 stroke-yellow-400"
        />
      </button>
      {/* Add more stars here */}
    </div>
  );
};

export default function App() {
  const [rating, setRating] = useState(0);

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <StarRating rating={rating} onChange={setRating} />
      <p className="mt-2 text-sm text-gray-300">Selected rating: {rating}</p>
    </main>
  );
}
