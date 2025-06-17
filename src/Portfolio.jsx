import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Code, User, Briefcase, Download, ChevronDown, Star, GitBranch, Twitter, Instagram } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  // Datos del portafolio
  const profileData = {
    name: "Eddie",
    fullName: "Eddie Antonio Ponce Alpizar",
    title: "Web Developer",
    subtitle: "Front End Developer / React Expert",
    email: "eddie18ponce@gmail.com",
    github: "https://github.com/J-E-Creations",
    linkedin: "www.linkedin.com/in/eddie-ponce-alpizar-a38956316",
    twitter: "https://twitter.com/jackdev",
    instagram: "https://instagram.com/jack.codes",
    bio: "Especializado en crear experiencias web modernas y atractivas con React, JavaScript y las últimas tecnologías frontend.",
    location: "Alajuela, Costa Rica"
  };

  const skills = [
    { name: "React", level: 95, color: "bg-pink-500" },
    { name: "JavaScript", level: 90, color: "bg-pink-500" },
    { name: "TypeScript", level: 85, color: "bg-pink-500" },
    { name: "Next.js", level: 88, color: "bg-pink-500" },
    { name: "CSS/Tailwind", level: 92, color: "bg-pink-500" },
    { name: "Node.js", level: 80, color: "bg-pink-500" }
  ];

  const projects = [
    {
      id: 1,
      name: "PocketRad",
      description: "Aplicación móvil para técnicos en radiología, desarrollada con Flutter y Firebase.",
      technologies: ["Flutter", "Firebase", "Dart"],
      githubUrl: "https://github.com/J-E-Creations/PocketRad.git",
      liveUrl: "https://github.com/J-E-Creations/PocketRad.git",
      stars: 67,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Portfolio CMS",
      description: "Sistema de gestión de contenido para portafolios creativos",
      technologies: ["Next.js", "Sanity", "Tailwind CSS"],
      githubUrl: "https://github.com/J-E-Creations/portfolio-cms",
      liveUrl: "https://jack-portfolio-cms.vercel.app",
      stars: 43,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    }
  ];

  const certificates = [
    {
      id: 1,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
      credentialUrl: "#"
    },
    {
      id: 2,
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
      credentialUrl: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const SkillBar = ({ skill, index }) => (
    <div className="mb-6" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform`}
          style={{ 
            width: isVisible.skills ? `${skill.level}%` : '0%',
            animationDelay: `${index * 150}ms`
          }}
        />
      </div>
    </div>
  );

  const ProjectCard = ({ project, index }) => (
    <div 
      className={`bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-pink-500/50 ${
        isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={project.githubUrl}
            className="p-2 bg-pink-500/90 rounded-full hover:bg-pink-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} className="text-white" />
          </a>
          <a 
            href={project.liveUrl}
            className="p-2 bg-pink-500/90 rounded-full hover:bg-pink-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} className="text-white" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
          <div className="flex items-center text-pink-500">
            <Star size={14} fill="currentColor" />
            <span className="ml-1 text-sm">{project.stars}</span>
          </div>
        </div>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-gray-800 text-pink-400 rounded-full text-sm font-medium border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a 
            href={project.githubUrl}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 hover:border-pink-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranch size={16} />
            Code
          </a>
          <a 
            href={project.liveUrl}
            className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  const CertificateCard = ({ certificate, index }) => (
    <div 
      className={`bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-pink-500/50 ${
        isVisible.certificates ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={certificate.image} 
          alt={certificate.name}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-pink-500">
          <Award className="w-8 h-8 mb-2" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2">{certificate.name}</h3>
        <p className="text-gray-400 mb-2">{certificate.issuer}</p>
        <p className="text-gray-500 mb-4">{certificate.date}</p>
        <a 
          href={certificate.credentialUrl}
          className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={16} />
          View Credential
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-gray-900 border-r border-gray-800 z-50 transition-all duration-300">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">E</span>
              </div>
              <div className="ml-3 hidden lg:block">
                <div className="text-lg font-bold text-white">{profileData.name}</div>
                <div className="text-sm text-gray-400">Web Developer</div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 py-6">
            {[
              { name: 'About', id: 'hero', icon: User },
              { name: 'Skills', id: 'skills', icon: Code },
              { name: 'Work', id: 'projects', icon: Briefcase },
              { name: 'Certificates', id: 'certificates', icon: Award },
              { name: 'Contact', id: 'contact', icon: Mail }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center px-6 py-3 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 group"
              >
                <item.icon size={20} className="group-hover:text-pink-500 transition-colors" />
                <span className="ml-3 hidden lg:block">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Blog */}
          <div className="p-6 border-t border-gray-800">
            <button className="w-full flex items-center text-pink-500 hover:text-pink-400 transition-colors">
              <span className="text-lg hidden lg:block">Blog</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Social Icons - Right Side */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <a 
          href={profileData.twitter}
          className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:border-pink-500 hover:bg-pink-500 transition-all duration-300 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size={20} className="text-gray-400 group-hover:text-white" />
        </a>
        <a 
          href={profileData.linkedin}
          className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:border-pink-500 hover:bg-pink-500 transition-all duration-300 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} className="text-gray-400 group-hover:text-white" />
        </a>
        <a 
          href={profileData.github}
          className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:border-pink-500 hover:bg-pink-500 transition-all duration-300 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} className="text-gray-400 group-hover:text-white" />
        </a>
        <a 
          href={profileData.instagram}
          className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:border-pink-500 hover:bg-pink-500 transition-all duration-300 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={20} className="text-gray-400 group-hover:text-white" />
        </a>
      </div>

      {/* Main Content */}
      <main className="ml-20 lg:ml-64 mr-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative">
          <div className="max-w-4xl mx-auto px-6 py-20">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl lg:text-8xl font-light text-white mb-6 leading-tight">
                Hi,<br />
                I'm <span className="text-pink-500 font-bold">{profileData.name}</span>,<br />
                <span className="text-gray-300">web developer</span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                {profileData.subtitle}
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-pink-500 text-pink-500 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transform transition-all duration-300 hover:scale-105"
              >
                Contact me!
              </button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-500" />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl font-bold text-white mb-16">
                My <span className="text-pink-500">Skills</span>
              </h2>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-8">Technologies</h3>
                  {skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-8">Tools & More</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['Git & GitHub', 'VS Code', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Figma', 'Agile/Scrum'].map((tool, index) => (
                      <div 
                        key={tool}
                        className={`p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-pink-500 transition-all duration-300 transform hover:scale-105 ${
                          isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="font-medium text-gray-300">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl font-bold text-white mb-16">
                My <span className="text-pink-500">Work</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
              <div className="text-center mt-12">
                <a 
                  href={profileData.github}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  View More on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`transform transition-all duration-1000 ${isVisible.certificates ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl font-bold text-white mb-16">
                My <span className="text-pink-500">Certificates</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((certificate, index) => (
                  <CertificateCard key={certificate.id} certificate={certificate} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className={`transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl font-bold text-white mb-8">
                Let's <span className="text-pink-500">Work Together</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                I'm always open to new opportunities and interesting projects. 
                Let's discuss how I can help bring your ideas to life!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3 px-8 py-4 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Mail size={20} />
                  Send Email
                </a>
                <a 
                  href={profileData.linkedin}
                  className="flex items-center gap-3 px-8 py-4 border-2 border-pink-500 text-pink-500 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio; 