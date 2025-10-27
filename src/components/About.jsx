import './About.css';

const About = () => {
  const expertise = [
    {
      title: 'Podnikání',
      description: 'Automatizace procesů, analýza dat a optimalizace business operací pomocí AI.',
    },
    {
      title: 'Vzdělání',
      description: 'Inteligentní vzdělávací platformy a personalizované learning management systémy.',
    },
    {
      title: 'Zdravonictví',
      description: 'Digitální zdravotní řešení, analýza medicínských dat a optimalizace pacientské péče.',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">O mně</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Jsem softwarový vývojář specializující se na implementaci AI řešení
              do reálných business procesů. Kombinuji technickou expertízu s hlubokým
              pochopením potřeb klientů v různých odvětvích.
            </p>
            <p>
              Moje přístup je založen na důkladné analýze, následné integraci
              moderních technologií a komplexní automatizaci, která přináší
              měřitelné výsledky.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="expertise-card">
                <h3 className="expertise-title">{item.title}</h3>
                <p className="expertise-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
