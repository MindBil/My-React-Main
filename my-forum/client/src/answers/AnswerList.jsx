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

export default AnswerList;
