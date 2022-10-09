import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-rose-600 ">Hello World</h1>
      <div className="w-[100%] h-[100px] border border-slate-600 flex">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
