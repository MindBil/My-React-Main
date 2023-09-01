import { Link } from "react-router-dom";
import { topNavigationItems } from "../routes/routes";
import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <header className="navigation-header">
      <img src="https://media.istockphoto.com/id/860088314/vector/sport-pub-soccer-pub-football-ball-vector-icon.jpg?s=170667a&w=0&k=20&c=euYlEcrhIiQXXrQArmSaJWl4kueQsqdkPhE1RzilbK8=" alt="logo" className="navigation-logo" />
      <div className="navigation-name">
      <h1>SPORTS PUB VILNIUS</h1>
      <h3>FOOTBALL-BEER-SLEEP-REPEAT</h3>
      </div>
      
      <nav>
        {topNavigationItems.map((navItem) => (
          <Link
            key={navItem.path}
            to={navItem.path}
            className="navigation-item"
          >
            {navItem.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default NavigationBar;