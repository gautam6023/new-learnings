import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Heading, extendTheme } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Navbar />
      </>
   );
}

export default App;
