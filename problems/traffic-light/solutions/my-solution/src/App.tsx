import { useEffect, useState } from "react";
import "./styles.css";

// Static light durations
const lightDurations: Record<"green" | "yellow" | "red", number> = {
  green: 3000,
  yellow: 1000,
  red: 4000,
};

// Helper function to determine the next light
const nextLight = (
  light: "green" | "yellow" | "red"
): "green" | "yellow" | "red" => {
  if (light === "green") return "yellow";
  if (light === "yellow") return "red";
  return "green";
};

export default function App() {
  const [currentLight, setCurrentLight] = useState<"green" | "yellow" | "red">(
    "green"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLight((prev) => nextLight(prev));
    }, lightDurations[currentLight]);

    return () => clearTimeout(timer);
  }, [currentLight]);

  return (
    <main className="bg-gray-400 h-screen flex items-center justify-center">
      <div className="bg-black w-28 flex flex-col py-4 items-center">
        {/* Red Light */}
        <div
          className={`${
            currentLight === "red" ? "bg-red-600" : "bg-gray-400"
          } m-2 w-20 h-20 rounded-full`}
        ></div>
        {/* Yellow Light */}
        <div
          className={`${
            currentLight === "yellow" ? "bg-yellow-400" : "bg-gray-400"
          } m-2 w-20 h-20 rounded-full`}
        ></div>
        {/* Green Light */}
        <div
          className={`${
            currentLight === "green" ? "bg-green-500" : "bg-gray-400"
          } m-2 w-20 h-20 rounded-full`}
        ></div>
      </div>
    </main>
  );
}
