import PropTypes from "prop-types";
import { BsPersonFillCheck } from "react-icons/bs";
import "./EventCard.scss";

const EventCard = ({ event }) => {
  const { imageUrl, title, startingDate, attendanceeCount } = event;
  return (
    <div className="card-container">
      <img src={imageUrl} alt={title} className="card-img" />
      <div className="card-info">
        <p className="card-title">{title}</p>
        <p className="card-date">{startingDate}</p>
      </div>
      <div>
        <p className="card-additionalInfo">
          <BsPersonFillCheck className="card-icon" />
          {attendanceeCount}
        </p>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    startingDate: PropTypes.string.isRequired,
    endingDate: PropTypes.string.isRequired,
    attendanceeCount: PropTypes.number.isRequired,
  }),
};

export default EventCard;