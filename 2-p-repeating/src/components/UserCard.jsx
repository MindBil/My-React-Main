import PropTypes from "prop-types";

const UserCard = ({ name, height, birthDate }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{height}cm</p>
      <p>Born on {birthDate.toDateString()}</p>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  birthDate: PropTypes.instanceOf(Date).isRequired,
  height: PropTypes.number,
};

export default UserCard;