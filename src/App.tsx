import { useState } from "react";
import PortfolioTest from "./components/PortfolioTest/PortfolioTest";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <PortfolioTest />
    </div>
  );
}

export default App;
