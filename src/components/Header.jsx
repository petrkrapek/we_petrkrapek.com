import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-text">PK</span>
          </div>
          <ul className="nav-links">
            <li>
              <button onClick={() => scrollToSection('about')}>
                O mně
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')}>
                Projekty
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>
                Kontakt
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
