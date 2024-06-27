import { useState } from "react";
import DOMPurify from "dompurify";
import "./App.css";

function App() {
  const [question, setQuestion] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const sanitizedElement = DOMPurify.sanitize(question.question);

  const fetchQuestion = () => {
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((resData) => {
        setQuestion(resData.results[0]);
        console.log(resData.results[0]);
        setShowAnswer(false);
      })
      .catch((err) => console.log(err));
  };

  const answer = () => {
    console.log(question.correct_answer);
    setShowAnswer(true); // clear the answer after 5 seconds
  };

  return (
    <div style={{ display: "flex", gap: "5rem", flexDirection: 'column'}}>
      <div>
        <button onClick={fetchQuestion}>New question</button>
        <p dangerouslySetInnerHTML={{ __html: sanitizedElement }}></p>

      </div>
      <div>
        <button onClick={answer}>Show correct answer</button>
        {showAnswer && <p>{question.correct_answer}</p>}{" "}

      </div>
    </div>
  );
}

export default App;
