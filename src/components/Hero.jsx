import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            AI & IT
            <br />
            <span className="hero-title-accent">Inovace pro byznys</span>
          </h1>
          <p className="hero-description">
            Specializuji se na analýzu, integraci a automatizaci v oblasti podnikání,
            vzdělání a zdravonictví. Vyvíjím softwarová řešení, která kombinují umělou
            inteligenci s praktickými business potřebami.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              Moje projekty
            </a>
            <a href="#contact" className="btn btn-secondary">
              Kontaktujte mě
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
