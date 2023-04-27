import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SimpleBarChart from "./SimpleBarChart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Simple Bar Chart Example</h1>
      <h2>Left to Right</h2>
      <SimpleBarChart direction="ltr" />
      <h2>Right to Left</h2>
      <SimpleBarChart direction="rtl" />
    </>
  );
}

export default App;
