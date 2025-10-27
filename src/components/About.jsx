import './About.css';

const About = () => {
  const expertise = [
    {
      title: 'Business',
      description: 'Process automation, data analysis, and optimization of business operations using AI.',
    },
    {
      title: 'Education',
      description: 'Intelligent learning platforms and personalized learning management systems.',
    },
    {
      title: 'Healthcare',
      description: 'Digital health solutions, medical data analysis, and patient care optimization.',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Software developer specializing in implementing AI solutions
              into real-world business processes. Combining technical expertise with deep
              understanding of client needs across various industries.
            </p>
            <p>
              My approach is based on thorough analysis, integration
              of modern technologies, and comprehensive automation that delivers
              measurable results.
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
