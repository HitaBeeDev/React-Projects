import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  function calculateFutureDate(step) {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + step);

    const formattedFutureDate = futureDate.toDateString();
    return formattedFutureDate;
  }

  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);

  function subStep() {
    if (step > 0) setStep((s) => s - 1);
  }

  function addStep() {
    setStep((s) => s + 1);
  }

  function handleReset() {
    setCount(1);
    setStep(0);
  }

  return (
    <div className="container">
      <div className="step">
        <button className="btn btn--step__sub" onClick={subStep}>
          -
        </button>
        <h2 className="step__text">Step: {step}</h2>
        <button className="btn btn--step__add" onClick={addStep}>
          +
        </button>
      </div>

      <div className="count">
        <input
          type="range"
          min="1"
          max="100"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          class="slider"
          id="myRange"
        ></input>
        <h2 className="count__text">Count: {count}</h2>
      </div>

      <p className="text">
        {step * count} days from today is {calculateFutureDate(step)}
      </p>
      <div>
        <button className="reset__btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
