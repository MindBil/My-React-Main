// import { useState } from "react";

// const QuestionForm = ({ onQuestionSubmit }) => {
//   const [question, setQuestion] = useState("");

//   const handleQuestionChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (question.trim() === "") {
//       return;
//     }
//     onQuestionSubmit(question);
//     setQuestion("");
//   };

//   return (
//     <div>
//       <h2>Ask a Question</h2>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={question}
//           onChange={handleQuestionChange}
//           placeholder="Type your question..."
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default QuestionForm;

import { useState } from "react";
import "./../../styles/QuestionForm.css";

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
    <div className="question-form-container">
      <h2 className="question-form-title">Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="question-textarea"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Type your question..."
        ></textarea>
        <button className="question-submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
