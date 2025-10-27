import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      label: 'Email',
      value: 'kontakt@example.com',
      link: 'mailto:kontakt@example.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/petr-krapek',
      link: 'https://linkedin.com/in/petr-krapek',
    },
    {
      label: 'GitHub',
      value: 'github.com/petrkrapek',
      link: 'https://github.com/petrkrapek',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>
              Interested in collaboration or want to discuss AI implementation
              possibilities for your project? Let's connect.
            </p>
          </div>
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <span className="contact-label">{info.label}</span>
                <a
                  href={info.link}
                  className="contact-value"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
