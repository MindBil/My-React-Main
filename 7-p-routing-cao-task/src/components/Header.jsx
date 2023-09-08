import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: 48,
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_EI0BQgJSzo9lilWQuKn3asfEZ-yACXHcbQ&usqp=CAU"
        alt="logo"
        width={200}
      />
      <nav>
        <Link to="/">Pagrindinis</Link>
        <Link to="/apie-mus">Apie mus</Link>
        <Link to="/naujienos">Naujienos</Link>
        <Link to="/paslaugos">Paslaugos</Link>
        <Link to="/atlikti-darbai">Atlikti darbai</Link>
        <Link to="/kontaktai">Kontaktai</Link>
      </nav>
    </header>
  );
};

export default Header;