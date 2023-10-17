import React, { useState } from "react";

const QuestionForm = ({ onQuestionSubmit }) => {
  const [question, setQuestion] = useState("");

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() === "") {
      return;
    }
    onQuestionSubmit(question);
    setQuestion("");
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={handleQuestionChange}
          placeholder="Type your question..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuestionForm;
