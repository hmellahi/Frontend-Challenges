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
    <main className="items-center flex flex-col gap-5 p-20">
      <TrafficLight config={config} />
      <TrafficLight layout="horizontal" config={config} />
    </main>
  );
}
