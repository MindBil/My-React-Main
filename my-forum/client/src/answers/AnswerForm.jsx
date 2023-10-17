import React, { useState } from "react";

const AnswerForm = ({ onAnswerSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() === "") {
      return;
    }
    onAnswerSubmit(answer);
    setAnswer("");
  };

  return (
    <div>
      <h3>Answer this question</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleAnswerChange}
          placeholder="Your answer..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AnswerForm;
