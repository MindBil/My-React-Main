import { useState } from "react";
import PropTypes from "prop-types";
import "./../styles/AnswerForm.css";

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
    <div className="answer-form-container">
      <h3 className="answer-form-title">Answer this question</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="answer-textarea"
          value={answer}
          onChange={handleAnswerChange}
          placeholder="Your answer..."
        ></textarea>
        <button className="answer-submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

AnswerForm.propTypes = {
  onAnswerSubmit: PropTypes.func.isRequired,
};

export default AnswerForm;
