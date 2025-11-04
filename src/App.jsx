import React, { useState, useEffect } from 'react';
import { Sun, Moon, ExternalLink, Sparkles, Github, Linkedin, Twitter, Mail } from 'lucide-react';

// =============================================================================
// CONFIGURATION - Update with your information
// =============================================================================
const CONFIG = {
  name: 'Yash Pandit',
  title: 'Software & Security Engineering',
  subtitle: 'Self-taught learner',
  avatar: '/images/avatar3.png', // Place your image in public/images/avatar.png
  about: 'Learning to build secure web applications through hands-on projects and experimentation. Focused on understanding both how to create and how to protect modern software. Every bug is a lesson, every vulnerability is a puzzle to solve.',
  social: {
    github: 'https://github.com/k1ndnessforever',
    linkedin: 'https://linkedin.com/in/yashpandit1610',
    twitter: 'https://x.com/kinderworldfp',
    email: 'yash.pandit.dev01@gmail.com'
  }
};



// =============================================================================
// PIXEL ART FALLBACK ICON (if no image is provided)
// =============================================================================
const PixelIcon = ({ className = "h-18 w-18" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="4" width="8" height="2" fill="currentColor"/>
    <rect x="10" y="6" width="2" height="2" fill="currentColor"/>
    <rect x="20" y="6" width="2" height="2" fill="currentColor"/>
    <rect x="8" y="8" width="2" height="2" fill="currentColor"/>
    <rect x="22" y="8" width="2" height="2" fill="currentColor"/>
    <rect x="8" y="10" width="2" height="12" fill="currentColor"/>
    <rect x="22" y="10" width="2" height="12" fill="currentColor"/>
    <rect x="10" y="22" width="2" height="2" fill="currentColor"/>
    <rect x="20" y="22" width="2" height="2" fill="currentColor"/>
    <rect x="12" y="24" width="8" height="2" fill="currentColor"/>
    <rect x="14" y="26" width="4" height="2" fill="currentColor"/>
  </svg>
);

// =============================================================================
// MAIN COMPONENT
// =============================================================================
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [darkMode]);

  // =============================================================================
  // DATA STRUCTURES
  // =============================================================================
  
  const skills = {
    frontend: [
      { name: 'HTML/CSS', level: 'excellent', color: 'blue' },
      { name: 'JavaScript', level: 'proficient', color: 'blue' },
      { name: 'React', level: 'proficient', color: 'blue' },
      { name: 'Tailwind CSS', level: 'proficient', color: 'blue' },
      { name: 'TypeScript', level: 'learning', color: 'blue' }
    ],
    backend: [
      { name: 'Node.js', level: 'basics', color: 'green' },
      { name: 'Express', level: 'basics', color: 'green' },
      { name: 'PostgreSQL', level: 'basics', color: 'green' },
      { name: 'REST APIs', level: 'learning', color: 'green' }
    ],
    security: [
      { name: 'OWASP Top 10', level: 'learning', color: 'red' },
      { name: 'JWT Auth', level: 'basics', color: 'red' },
      { name: 'Input Validation', level: 'basics', color: 'red' },
      { name: 'Security Headers', level: 'learning', color: 'red' }
    ],
    tools: [
      { name: 'Git/GitHub', level: 'proficient', color: 'purple' },
      { name: 'Linux', level: 'basics', color: 'purple' },
      { name: 'Docker', level: 'learning', color: 'purple' },
      { name: 'VS Code', level: 'excellent', color: 'purple' }
    ]
  };

  const work = [
    {
      period: '2023 - present',
      title: 'Self-Taught Developer',
      company: 'Personal Learning',
      description: 'Building projects to understand web security, full-stack development, and DevSecOps practices. Learning through documentation, courses, and hands-on experimentation.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Security']
    },
    {
      period: '2022 - 2023',
      title: 'Learning Journey',
      company: 'Various Online Resources',
      description: 'Started with HTML/CSS basics, moved to JavaScript fundamentals, then React. Discovered security while learning about authentication systems.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Git']
    }
  ];

  const projects = [
    {
      year: 'Ongoing',
      name: 'Secure Portfolio Platform',
      description: 'Building a security-hardened portfolio implementing OWASP best practices. Learning about CSP, XSS prevention, and secure authentication patterns.',
      tech: ['React', 'Node.js', 'JWT', 'Helmet.js'],
      image: '/images/project1.png', // Add your project images
      link: '#'
    },
    {
      year: '2024',
      name: 'Authentication Service',
      description: 'Experimenting with JWT authentication, refresh token rotation, and session management. Understanding how to implement secure login systems.',
      tech: ['Express', 'bcrypt', 'PostgreSQL', 'Redis'],
      image: '/images/project2.png',
      link: '#'
    },
    {
      year: '2024',
      name: 'Security Scanner Tool',
      description: 'Learning to use OWASP ZAP and building a simple vulnerability scanner. Exploring how to identify common security issues in web apps.',
      tech: ['Python', 'OWASP ZAP', 'Burp Suite'],
      image: '/images/project3.png',
      link: '#'
    },
    {
      year: '2023',
      name: 'Task Manager API',
      description: 'First full-stack project with CRUD operations, input validation, and rate limiting. Learning about SQL injection prevention and secure APIs.',
      tech: ['Node.js', 'Express', 'SQLite', 'Zod'],
      image: '/images/project4.png',
      link: '#'
    }
  ];

  const learningResources = [
    { name: 'OWASP.org', description: 'Security standards', url: 'https://owasp.org' },
    { name: 'MDN Web Docs', description: 'Web development', url: 'https://developer.mozilla.org' },
    { name: 'PortSwigger', description: 'Web security', url: 'https://portswigger.net/web-security' },
    { name: 'Node.js Docs', description: 'Backend dev', url: 'https://nodejs.org/docs' }
  ];

  // Skill level colors and labels
  const getLevelStyle = (level, color) => {
    const levels = {
      excellent: { opacity: 1, label: 'excellent' },
      proficient: { opacity: 0.8, label: 'proficient' },
      basics: { opacity: 0.6, label: 'basics' },
      learning: { opacity: 0.4, label: 'learning' }
    };
    
    const colors = {
      blue: darkMode ? 'rgb(96, 165, 250)' : 'rgb(37, 99, 235)',
      green: darkMode ? 'rgb(74, 222, 128)' : 'rgb(22, 163, 74)',
      red: darkMode ? 'rgb(248, 113, 113)' : 'rgb(220, 38, 38)',
      purple: darkMode ? 'rgb(192, 132, 252)' : 'rgb(147, 51, 234)'
    };

    return {
      color: colors[color],
      opacity: levels[level].opacity,
      label: levels[level].label
    };
  };

  // Secure contact form handler
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactForm.name.trim() || contactForm.name.length < 2) {
      setFormStatus({ type: 'error', message: 'Name must be at least 2 characters' });
      setIsSubmitting(false);
      return;
    }
    if (!emailRegex.test(contactForm.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email' });
      setIsSubmitting(false);
      return;
    }
    if (!contactForm.message.trim() || contactForm.message.length < 10) {
      setFormStatus({ type: 'error', message: 'Message must be at least 10 characters' });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setFormStatus({ type: 'success', message: 'Message sent!' });
      setContactForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  // =============================================================================
  // RENDER
  // =============================================================================
  
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: darkMode ? '#000000' : '#ffffff',
      color: darkMode ? '#ffffff' : '#000000',
      transition: 'background-color 0.3s, color 0.3s'
    }}>
      {/* Theme Toggle */}
      <header style={{
        position: 'fixed',
        top: 0,
        right: 0,
        padding: '24px',
        zIndex: 50
      }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '8px',
            borderRadius: '8px',
            backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
          }}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '96px 16px'
      }}>
        
        {/* Hero Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '40px',
          alignItems: 'center'
        }}>
          <div style={{ gridColumn: 'span 1' }}>
            {!imageError && CONFIG.avatar ? (
              <img 
                src={CONFIG.avatar}
                alt={CONFIG.name}
                onError={() => setImageError(true)}
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: darkMode ? '2px solid rgba(255,255,255,0.2)' : '2px solid rgba(0,0,0,0.2)'
                }}
              />
            ) : (
              <PixelIcon className={darkMode ? 'text-white' : 'text-black'} />
            )}
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <h1 style={{
              fontSize: '20px',
              fontWeight: 400,
              marginBottom: '4px',
              color: darkMode ? '#ffffff' : '#000000'
            }}>
              {CONFIG.name}
            </h1>
            <p style={{
              fontSize: '14px',
              color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
              marginBottom: '4px'
            }}>
              {CONFIG.title}
            </p>
            <p style={{
              fontSize: '12px',
              color: darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'
            }}>
              {CONFIG.subtitle}
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '56px'
        }}>
          {CONFIG.social.github && (
            <a 
              href={CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
              }}
            >
              <Github size={18} />
            </a>
          )}
          {CONFIG.social.linkedin && (
            <a 
              href={CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
              }}
            >
              <Linkedin size={18} />
            </a>
          )}
          {CONFIG.social.twitter && (
            <a 
              href={CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
              }}
            >
              <Twitter size={18} />
            </a>
          )}
          {CONFIG.social.email && (
            <a 
              href={`mailto:${CONFIG.social.email}`}
              style={{
                color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
              }}
            >
              <Mail size={18} />
            </a>
          )}
        </div>

        {/* About Section */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontSize: '14px',
            fontWeight: 400,
            marginBottom: '8px',
            color: darkMode ? '#ffffff' : '#000000'
          }}>
            About
          </h2>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'
          }}>
            {CONFIG.about}
          </p>
        </section>

        {/* Skills Section */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontSize: '14px',
            fontWeight: 400,
            marginBottom: '24px',
            color: darkMode ? '#ffffff' : '#000000'
          }}>
            Skills
          </h2>

          {Object.entries(skills).map(([category, items]) => (
            <div key={category} style={{ marginBottom: '24px' }}>
              <h3 style={{
                fontSize: '12px',
                fontWeight: 400,
                marginBottom: '12px',
                color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                textTransform: 'capitalize'
              }}>
                {category}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {items.map((skill, i) => {
                  const style = getLevelStyle(skill.level, skill.color);
                  return (
                    <div key={i} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '12px'
                    }}>
                      <span style={{
                        color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'
                      }}>
                        {skill.name}
                      </span>
                      <span style={{
                        color: style.color,
                        opacity: style.opacity,
                        fontFamily: 'monospace',
                        fontSize: '10px'
                      }}>
                        {style.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* Work Experience */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontSize: '14px',
            fontWeight: 400,
            marginBottom: '24px',
            color: darkMode ? '#ffffff' : '#000000'
          }}>
            Learning Journey
          </h2>

          {work.map((job, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginBottom: '24px'
            }}>
              <div style={{ gridColumn: 'span 4' }}>
                <p style={{
                  fontSize: '12px',
                  color: darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                  marginBottom: '8px'
                }}>
                  {job.period}
                </p>
              </div>
              <div style={{ gridColumn: 'span 4' }}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  marginBottom: '4px',
                  color: darkMode ? '#ffffff' : '#000000'
                }}>
                  {job.title} — {job.company}
                </h3>
                <p style={{
                  fontSize: '12px',
                  lineHeight: '1.6',
                  marginBottom: '8px',
                  color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
                }}>
                  {job.description}
                </p>
                <p style={{
                  fontSize: '10px',
                  color: darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'
                }}>
                  {job.tech.join(' • ')}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontSize: '14px',
            fontWeight: 400,
            marginBottom: '24px',
            color: darkMode ? '#ffffff' : '#000000'
          }}>
            Learning Projects
          </h2>

          {projects.map((project, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginBottom: '24px'
            }}>
              <div style={{ gridColumn: 'span 4' }}>
                {project.image && (
                  <img 
                    src={project.image}
                    alt={project.name}
                    onError={(e) => { e.target.style.display = 'none'; }}
                    style={{
                      width: '100%',
                      aspectRatio: '16/9',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      marginBottom: '12px',
                      backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                    }}
                  />
                )}
                <p style={{
                  fontSize: '12px',
                  color: darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                  marginBottom: '4px'
                }}>
                  {project.year}
                </p>
              </div>
              <div style={{ gridColumn: 'span 4' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '4px'
                }}>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: darkMode ? '#ffffff' : '#000000'
                  }}>
                    {project.name}
                  </h3>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                        transition: 'color 0.2s',
                        display: 'flex'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)';
                      }}
                    >
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
                <p style={{
                  fontSize: '12px',
                  lineHeight: '1.6',
                  marginBottom: '8px',
                  color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
                }}>
                  {project.description}
                </p>
                <p style={{
                  fontSize: '10px',
                  color: darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'
                }}>
                  {project.tech.join(' • ')}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Learning Resources */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontSize: '14px',
            fontWeight: 400,
            marginBottom: '24px',
            color: darkMode ? '#ffffff' : '#000000'
          }}>
            Learning Resources
          </h2>

          {learningResources.map((resource, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginBottom: '12px'
            }}>
              <div style={{ gridColumn: 'span 4' }}>
                <p style={{
                  fontSize: '12px',
                  color: darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                  marginBottom: '4px'
                }}>
                  {resource.description}
                </p>
              </div>
              <div style={{ gridColumn: 'span 4' }}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: darkMode ? '#ffffff' : '#000000',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = darkMode ? '#ffffff' : '#000000';
                  }}
                >
                  {resource.name}
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Contact Form */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontSize: '14px',
            fontWeight: 400,
            marginBottom: '24px',
            color: darkMode ? '#ffffff' : '#000000'
          }}>
            Get In Touch
          </h2>

          <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '12px',
                marginBottom: '8px',
                color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
              }}>
                Name
              </label>
              <input
                type="text"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                maxLength={100}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  fontSize: '14px',
                  borderRadius: '4px',
                  border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  color: darkMode ? '#ffffff' : '#000000',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '12px',
                marginBottom: '8px',
                color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
              }}>
                Email
              </label>
              <input
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  fontSize: '14px',
                  borderRadius: '4px',
                  border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  color: darkMode ? '#ffffff' : '#000000',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '12px',
                marginBottom: '8px',
                color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
              }}>
                Message
              </label>
              <textarea
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                rows={4}
                maxLength={1000}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  fontSize: '14px',
                  borderRadius: '4px',
                  border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  color: darkMode ? '#ffffff' : '#000000',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  resize: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
                }}
              />
            </div>

            {formStatus && (
              <div style={{
                padding: '12px',
                borderRadius: '4px',
                fontSize: '12px',
                backgroundColor: formStatus.type === 'success' 
                  ? darkMode ? 'rgba(74, 222, 128, 0.1)' : 'rgba(74, 222, 128, 0.1)'
                  : darkMode ? 'rgba(248, 113, 113, 0.1)' : 'rgba(248, 113, 113, 0.1)',
                color: formStatus.type === 'success'
                  ? darkMode ? 'rgb(74, 222, 128)' : 'rgb(22, 163, 74)'
                  : darkMode ? 'rgb(248, 113, 113)' : 'rgb(220, 38, 38)'
              }}>
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '8px 16px',
                fontSize: '14px',
                borderRadius: '4px',
                backgroundColor: darkMode ? '#ffffff' : '#000000',
                color: darkMode ? '#000000' : '#ffffff',
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s',
                opacity: isSubmitting ? 0.5 : 1
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? '#ffffff' : '#000000';
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>

        {/* Design Inspirations */}
        <section style={{
          marginBottom: '32px',
          paddingTop: '32px',
          borderTop: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}>
            <Sparkles size={12} style={{
              color: darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'
            }} />
            <h3 style={{
              fontSize: '12px',
              fontWeight: 400,
              color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
            }}>
              Design Inspirations
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            fontSize: '10px'
          }}>
            {[
              { name: 'Maxime Bonhomme', desc: 'Timeless minimalism & grid structure' },
              { name: 'Jhey Tompkins', desc: 'Functional creativity & precision' },
              { name: 'Brittany Chiang', desc: 'Clean developer portfolios' },
              { name: 'Olaolu Olawuyi', desc: 'Bold typography & contrast' },
              { name: 'Katarina Eriksson', desc: 'Elegant simplicity & whitespace' },
              { name: 'Guillaume Kurkdjian', desc: 'Interactive experiences & motion' }
            ].map((person, i) => (
              <div key={i} style={{
                padding: '12px',
                borderRadius: '4px',
                backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
              }}>
                <p style={{
                  fontWeight: 500,
                  marginBottom: '4px',
                  color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'
                }}>
                  {person.name}
                </p>
                <p style={{
                  color: darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
                }}>
                  {person.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          paddingTop: '32px',
          borderTop: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'
        }}>
          <p style={{
            fontSize: '10px',
            textAlign: 'center',
            color: darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'
          }}>
            Built with security-first architecture • OWASP compliant • Lighthouse optimized
          </p>
          <p style={{
            fontSize: '10px',
            textAlign: 'center',
            marginTop: '8px',
            color: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
          }}>
            © 2024 • Learning in public
          </p>
        </footer>
      </main>

      {/* Global Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        @media screen and (min-width: 640px) {
          .grid-responsive {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          header {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
