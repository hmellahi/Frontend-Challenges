import { useEffect, useState } from "react";
import { Config } from "./types";
import { cn } from "./utils/cn";

function Light({ backgroundColor }: { backgroundColor: string }) {
  return <div className="traffic-light" style={{ backgroundColor }} />;
}

export default function TrafficLight({
  config,
  layout = "vertical",
}: {
  config: Config;
  layout?: string;
}) {
  const [currentLight, setCurrentLight] = useState("green");

  useEffect(() => {
    const { next, duration } = config[currentLight];
    const timerId = setTimeout(() => {
      setCurrentLight(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentLight, config]);

  return (
    <div
      role="alert"
      aria-label={`Traffic light is ${currentLight}`}
      className={cn([
        "traffic-light-container",
        layout === "vertical" && "traffic-light-container--vertical",
      ])}
    >
      {Object.keys(config).map((color) => (
        <Light
          key={color}
          backgroundColor={
            color === currentLight ? config[color].backgroundColor : "grey"
          }
        />
      ))}
    </div>
  );
}
