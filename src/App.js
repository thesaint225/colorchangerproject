import { useState } from "react";
import Input from "./Input";
import Square from "./Square";

function App() {
  const [colorValue, setcolorValue] = useState("");
  const [hexValue, sethexValue] = useState("");
  const [isDarkText, setisDarkText] = useState(true);
  return (
    <div className="App">
      <Square
       colorValue={colorValue}
        hexValue={hexValue} 
        isDarkText={isDarkText}
       />
      <Input
        colorValue={colorValue}
        setcolorValue={setcolorValue}
        sethexValue={sethexValue}
        isDarkText={isDarkText}
        setisDarkText={setisDarkText}

      />
    </div>
  );
}

export default App;
