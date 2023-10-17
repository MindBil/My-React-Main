import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get("/api/questions").then((response) => {
      setQuestions(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            <Link to={`/questions/${question._id}`}>{question.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
