import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Business Analytics Platform',
      category: 'Business',
      description:
        'Comprehensive analytics platform for market trend prediction and business process optimization using machine learning algorithms.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    },
    {
      title: 'Healthcare Data Integration',
      category: 'Healthcare',
      description:
        'System for integrating and analyzing patient data from various sources with emphasis on security and GDPR compliance.',
      technologies: ['Node.js', 'MongoDB', 'HL7 FHIR', 'Docker'],
    },
    {
      title: 'Process Automation Suite',
      category: 'Business',
      description:
        'Automation framework for streamlining repetitive business operations and integration with existing ERP systems.',
      technologies: ['TypeScript', 'RPA', 'REST API', 'Azure'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
