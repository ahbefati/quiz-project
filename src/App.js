import React, { useEffect, useState } from "react";
import Question from "./components/Question";

import "./App.css";
const TOKEN = "Su9Gq6Lw2OUZPbRhFPkTfsNHhifynVvM1b5ZYKyX";

function App() {
  const [quizData, setQuizData] = useState([]);
  const [curQuestionNo, setCurQuestionNo] = useState(1);

  useEffect(() => {
    fetch("https://quizapi.io/api/v1/questions?apiKey=" + TOKEN + "&limit=10")
      .then((data) => data.json())
      .then((data) => {
        setQuizData(data);
      });
  }, []);

  return quizData.length > 0 ? (
    <div className="App">
      <progress max={10} value={curQuestionNo} />
      <h1>Question {curQuestionNo}/10</h1>
      <Question />
    </div>
  ) : null;
}

export default App;
