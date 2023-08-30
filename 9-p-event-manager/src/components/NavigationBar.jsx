import { Link } from "react-router-dom";
import { topNavigationItems } from "../routes/routes";
import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <header className="navigation-header">
      <img src="https://media.istockphoto.com/id/1284069443/vector/dog-with-bone.jpg?s=612x612&w=0&k=20&c=cmOLlczwDU03W3dtM3eHUqSOzGR4p049WrtO05iwmw8=" alt="logo" className="navigation-logo" />
      <h1>HAPPY PETS EVENTS</h1>
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