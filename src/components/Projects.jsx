import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Business Analytics Platform',
      category: 'Podnikání',
      description:
        'Komplexní analytická platforma pro predikci tržních trendů a optimalizaci business procesů pomocí machine learning algoritmů.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    },
    {
      title: 'Healthcare Data Integration',
      category: 'Zdravonictví',
      description:
        'Systém pro integraci a analýzu pacientských dat z různých zdrojů s důrazem na bezpečnost a GDPR compliance.',
      technologies: ['Node.js', 'MongoDB', 'HL7 FHIR', 'Docker'],
    },
    {
      title: 'AI Learning Assistant',
      category: 'Vzdělání',
      description:
        'Inteligentní vzdělávací asistent využívající NLP pro personalizované učení a automatické vyhodnocování pokroku studentů.',
      technologies: ['Python', 'OpenAI API', 'FastAPI', 'Vue.js'],
    },
    {
      title: 'Process Automation Suite',
      category: 'Podnikání',
      description:
        'Automatizační framework pro streamování repetitivních business operací a integrace s existujícími ERP systémy.',
      technologies: ['TypeScript', 'RPA', 'REST API', 'Azure'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projekty</h2>
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
