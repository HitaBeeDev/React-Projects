import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const flashcardsData = [
  {
    id: 1001,
    question: "What is a JavaScript closure?",
    answer:
      "A closure is a function that retains access to variables from its parent scope even after the parent function has finished executing.",
  },
  {
    id: 1002,
    question: "What is the purpose of 'use strict' in JavaScript?",
    answer:
      "'use strict' is a directive that enables strict mode in JavaScript, enforcing stricter rules and preventing the use of certain error-prone features.",
  },
  {
    id: 1003,
    question:
      "What is the difference between 'let', 'const', and 'var' in JavaScript?",
    answer:
      "'let' and 'const' are block-scoped variables introduced in ES6, while 'var' is function-scoped. 'let' allows reassignment, while 'const' is for variables with constant values.",
  },
  {
    id: 1004,
    question: "What is event delegation?",
    answer:
      "Event delegation is a technique where you attach an event listener to a parent element instead of individual child elements, allowing events to be handled dynamically.",
  },
  {
    id: 1005,
    question:
      "What is the purpose of the 'async' and 'await' keywords in JavaScript?",
    answer:
      "'async' and 'await' are used to handle asynchronous operations in JavaScript. 'async' marks a function as asynchronous, while 'await' pauses the execution until a promise is resolved.",
  },
  {
    id: 1006,
    question: "What is the purpose of a CSS preprocessor like Sass or Less?",
    answer:
      "CSS preprocessors enhance CSS by introducing features like variables, mixins, nested rules, and functions, making the styling process more efficient and maintainable.",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {flashcardsData.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
