// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Contacts from "./pages/Contacts";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/contacts" element={<Contacts />} />
//     </Routes>
//   );
// };

// export default App;

import { useState } from "react";
import QuestionForm from "./components/questions/QuestionForm";
import QuestionList from "./components/questions/QuestionList";
import AnswerForm from "./answers/AnswerForm";
import AnswerList from "./answers/AnswerList";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const handleQuestionSubmit = (question) => {
    setQuestions([...questions, question]);
  };

  const handleAnswerSubmit = (answer) => {
    setAnswers([...answers, answer]);
  };

  return (
    <div>
      <Header />
      <QuestionForm onQuestionSubmit={handleQuestionSubmit} />
      <QuestionList questions={questions} />
      <AnswerForm onAnswerSubmit={handleAnswerSubmit} />
      <AnswerList answers={answers} />
      <Footer />
    </div>
  );
};

export default App;