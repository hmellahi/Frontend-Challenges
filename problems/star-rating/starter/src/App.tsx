import "./styles.css";
import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating = 0, onChange }: StarRatingProps) => {
  return (
    // <Star
    //   size={10}
    //   className={`transition-colors ${
    //       ? "fill-yellow-400 stroke-yellow-400"
    //       : "fill-transparent stroke-gray-400"
    //   }`}
    // />
    <div className="flex gap-2">
      <Star size={60} className={`fill-yellow-400 stroke-yellow-400`} />
      <Star size={60} className={`fill-transparent stroke-gray-400"`} />
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
