import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            AI & IT
            <br />
            <span className="hero-title-accent">Solutions</span>
          </h1>
          <p className="hero-description">
            Specialized in analysis, integration, and automation for business,
            education, and healthcare. Building software solutions that combine
            artificial intelligence with practical business needs.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
