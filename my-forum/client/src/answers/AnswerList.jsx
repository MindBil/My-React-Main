import PropTypes from "prop-types"; // Import PropTypes

const AnswerList = ({ answers }) => {
  return (
    <div>
      <h3>Answers</h3>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

AnswerList.propTypes = {
  answers: PropTypes.array.isRequired, // Add prop validation for the 'answers' prop
};

export default AnswerList;
