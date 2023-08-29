// const Footer = () => {
//     return <footer style={{ textAlign: "center" }}>Footer</footer>;
//   };
  
//   export default Footer;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        display: "block",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      
      <nav className="footerContainer">
        <Link to="/">Pagrindinis</Link>
        <Link to="/apie-mus">Apie mus</Link>
        <Link to="/naujienos">Naujienos</Link>
        <Link to="/paslaugos">Paslaugos</Link>
        <Link to="/atlikti-darbai">Atlikti darbai</Link>
        <Link to="/kontaktai">Kontaktai</Link>
      </nav>
      <p>All Rights Reserved MB 2023</p>
    </footer>
  );
};

export default Footer;