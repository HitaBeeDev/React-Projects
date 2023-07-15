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
  const [count, setCount] = useState(0);

  function subStep() {
    if (step > 0) setStep((s) => s - 1);
  }

  function addStep() {
    setStep((s) => s + 1);
  }

  function subCount() {
    if (count > 0) setCount((s) => s - 1);
  }

  function addCount() {
    setCount((s) => s + 1);
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
        <button className="btn btn--count__sub" onClick={subCount}>
          -
        </button>
        <h2 className="count__text">Count: {count}</h2>
        <button className="btn btn--count__add" onClick={addCount}>
          +
        </button>
      </div>

      <p className="text">
        {step * count} days from today is {calculateFutureDate(step)}
      </p>
    </div>
  );
}
