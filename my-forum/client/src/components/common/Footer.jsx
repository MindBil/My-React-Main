// const Footer = () => {
//   return (
//     <footer>
//       <div className="container">
//         <p>&copy; {new Date().getFullYear()} Your Forum Name. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import "./../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Your Forum Name. All rights reserved. |{" "}
          <a href="/terms" className="footer-link">
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
