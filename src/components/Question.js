import React, { useState } from "react";
import "./Question.css";

function Question({ question, answers }) {
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(checkedAnswer);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>{question}</p>
      <hr />

      {Object.entries(answers).map(([key, value], i) => {
        return value ? (
          <div key={i}>
            <input
              onChange={(e) => setCheckedAnswer(e.target.value)}
              type="radio"
              name="answer"
              id={key}
              value={key[key.length - 1]}
            />
            <label htmlFor={key}>{value}</label>
          </div>
        ) : null;
      })}

      <button>{"Next -->"}</button>
      {/*  */}
    </form>
  );
}

export default Question;
