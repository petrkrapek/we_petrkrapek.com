import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-label">AI & IT Solutions</div>
          <h1 className="hero-title">
            Building intelligent systems for modern business
          </h1>
          <p className="hero-description">
            Specialized in analysis, integration, and automation.
            Creating software that combines artificial intelligence with practical business needs.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
