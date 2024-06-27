import { useState } from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState({ num1: "", num2: "", result: "" });
  const [hidden, setHidden] = useState(true);

  const handleInputChange = (event) => {
    setNumbers({ ...numbers, [event.target.name]: event.target.value });
  };

  const handleResult = (operation) => {
    if (operation === "plus") {
      const add = () => {
        return Number(numbers.num1) + Number(numbers.num2);
      };

      setNumbers({ ...numbers, result: add() });
      setHidden(false);
    } else if (operation === "minus") {
      const minus = () => {
        return Number(numbers.num1) - Number(numbers.num2);
      };

      setNumbers({ ...numbers, result: minus() });
      setHidden(false);
    }
  };
  return (
    <>
      {hidden ? null : <p>Result = {numbers.result}</p>}
      <input
        type="text"
        name="num1"
        value={numbers.num1}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="num2"
        value={numbers.num2}
        onChange={handleInputChange}
      />
      <button onClick={() => handleResult("plus")}>+</button>
      <button onClick={() => handleResult("minus")}>-</button>
    </>
  );
}

export default App;
