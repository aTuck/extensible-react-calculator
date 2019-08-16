import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const CalculationButton = ({ opName, op, onClick }) => {
  const handleOnClick = () => {
    onClick(op);
  };

  return (
    <button name={opName} onClick={handleOnClick}>
      {opName}!
    </button>
  );
};

function App() {
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);
  const [result, setResult] = useState(0);

  const buttonOps = [
    { opName: "Add", op: (x, y) => x + y },
    { opName: "Subtract", op: (x, y) => x - y },
    { opName: "Divide", op: (x, y) => x / y },
    { opName: "Multiply", op: (x, y) => x * y },
    { opName: "Add Then Multiply by 2", op: (x, y) => (x + y) * 2 }
  ];

  const calculateValues = op => {
    let x = parseInt(valueOne, 10);
    let y = parseInt(valueTwo, 10);

    setResult(op(x, y));
  };

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          value={valueOne}
          onChange={e => {
            setValueOne(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="0"
          value={valueTwo}
          onChange={e => {
            setValueTwo(e.target.value);
          }}
        />
      </div>

      {buttonOps.map(op => (
        <CalculationButton {...op} onClick={calculateValues} />
      ))}

      <h2>{result}</h2>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
