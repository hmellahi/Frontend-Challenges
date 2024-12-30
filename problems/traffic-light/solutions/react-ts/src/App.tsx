import TrafficLight from "./TrafficLight";

import "./styles.css";
import { Config } from "./types";

const config: Config = {
  red: {
    backgroundColor: "red",
    duration: 2000,
    next: "green",
  },
  yellow: {
    backgroundColor: "yellow",
    duration: 1000,
    next: "red",
  },
  green: {
    backgroundColor: "green",
    duration: 2000,
    next: "yellow",
  },
};

export default function App() {
  return (
    <main className="container">
      <TrafficLight
        layout="horizontal"
        config={config}
      />
      <TrafficLight config={config} />
    </main>
  );
}
