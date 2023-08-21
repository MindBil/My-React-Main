import PropTypes from "prop-types";

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn &&  2+2===4) {
    return <div>Hello Rokas, How are you today?</div>;
  }
  return <div>Hello Guest, You need to login first.</div>;
};

Greeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Greeting;