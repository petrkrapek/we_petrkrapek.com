import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {currentYear} Petr Krapek. All rights reserved.
          </p>
          <p className="footer-tagline">AI & IT Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
