import PropTypes from "prop-types";

const Article = (props) => {
  return (
    <div className="art">
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Article;