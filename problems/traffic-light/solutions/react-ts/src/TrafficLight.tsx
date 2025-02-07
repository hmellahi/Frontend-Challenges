import { useEffect, useState } from "react";
import { Config } from "./types";
import { cn } from "./utils/cn";

function Light({
  backgroundColor,
  active,
}: {
  backgroundColor: string;
  active: boolean;
}) {
  return (
    <div
      className={cn([
        "w-20 h-20 rounded-full transition-all duration-300",
        active ? "shadow-[0_0_10px] shadow-current" : "opacity-40",
      ])}
      style={{ backgroundColor }}
    />
  );
}

export default function TrafficLight({
  config,
  layout = "vertical",
}: {
  config: Config;
  layout?: "vertical" | "horizontal";
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
      aria-live="polite"
      aria-label={`Traffic light is ${currentLight}`}
      className={cn([
        "p-6 rounded-2xl flex gap-4 bg-gray-900",
        "shadow-xl",
        layout === "vertical" ? "flex-row" : "flex-col",
      ])}
    >
      {Object.keys(config).map((color) => (
        <Light
          key={color}
          active={color === currentLight}
          backgroundColor={config[color].backgroundColor}
        />
      ))}
    </div>
  );
}
