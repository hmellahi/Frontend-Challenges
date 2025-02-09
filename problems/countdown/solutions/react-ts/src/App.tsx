import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);

      if (count === 1) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <main className="h-full flex items-center justify-center">
      <div className="countdown text-[15rem]">
        {count > 0 ? count : "START!"}
      </div>
    </main>
  );
}
