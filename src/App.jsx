import './App.css'
import { useState } from 'react';
import profilePic from './assets/Foto-perfil.jpg';
import Carousel from './Carousel';
import DiagonalTransition from './DiagonalTransition';
import FloatingContact from './FloatingContact';


function App() {

    const [section, setSection] = useState('intro');
    const [transitioning, setTransitioning] = useState(false);
    const [nextSection, setNextSection] = useState(null);
    
    const changeSection = (target) => {
  if (transitioning || target === section) return;

  setTransitioning(true);
  setNextSection(target);

  setTimeout(() => {
    setSection(target);
    setNextSection(null);
    setTimeout(() => {
      setTransitioning(false);
    }, 700); // esperar que termine la animación
  }, 700); // debe coincidir con duración de la animación
};
  return (
    <>
<DiagonalTransition active={transitioning} />
  <div className='app'>
      {/* Inicio - Foto y presentación animada */}
      {section === 'intro' && (
      <section className="intro-section">
      <h1 className="title-all title-intro" >Mi Portafolio</h1>
        <div className="profile-container">
          <div className="profile-photo">
            <img src={profilePic} alt="Foto de perfil" />
          </div>
          <div className="profile-info">
            <h1>Hola, soy Maycol Guerrero</h1>
            <p> Desarrollador web con enfoque en frontend, apasionado por crear interfaces limpias, funcionales y responsivas.
                Me especializo en React, JavaScript, HTML, CSS y herramientas modernas como TailwindCSS y GitHub.
                Disfruto transformar ideas en experiencias digitales intuitivas y eficientes. Siempre estoy explorando nuevas tecnologías para seguir creciendo como profesional y ofrecer soluciones actualizadas y creativas.
            </p>
          </div>
        </div>
         <div className='btn-intro'>
            <button className="btn1" onClick={() => changeSection('projects')}>Mis Proyectos</button>
            <button className="btn2" onClick={() => changeSection('skills')}>Mis Skills</button>
          </div>
      </section>

      ) }


      {/* Proyectos - Carrusel */}
      {section === 'projects' && (
      <section className="projects-section">
        <h2 className='title-all title-projects'>Proyectos</h2>
        < Carousel />
          <div className='btn-projects'>
            <button className="btn1" onClick={() => changeSection('intro')}>Perfil</button>
            <button className="btn2" onClick={() => changeSection('skills')}>Ir a Skills</button>
          </div>
      </section>
      ) }

      {/* Habilidades - Íconos giratorios */}
      {section === 'skills' && (
      <section className="skills-section">
        <h2 className='title-all'>Habilidades</h2>
        <div className='container-skills'>
          <div className='skills-text'>
            <p className="skills-description">
              A lo largo de mi formación y experiencia como desarrollador web, he trabajado con un conjunto sólido 
              de herramientas que me permiten construir interfaces modernas, responsivas y eficientes. Estas tecnologías 
              no solo forman parte de mi stack, sino que también representan mi compromiso con las buenas prácticas, 
              la mejora continua y la creación de experiencias digitales intuitivas y funcionales. 
              Cada habilidad aquí mostrada es una pieza clave en los proyectos que desarrollo.
            </p>
          </div>
          <div className="skills-circle">
            <div className="skill-icon html" data-skill="HTML"></div>
            <div className="skill-icon css" data-skill="CSS"></div>
            <div className="skill-icon js" data-skill="JavaScript"></div>
            <div className="skill-icon react" data-skill="React"></div>
            <div className="skill-icon dbeaver" data-skill="DBeaver"></div>
            <div className="skill-icon github" data-skill="GitHub"></div>
            <div className="skill-icon mysql" data-skill="MySql"></div>
            <div className="skill-icon python" data-skill="Python"></div>
            <div className="skill-icon wordpress" data-skill="WordPress"></div>
          {/* Agrega más íconos si deseas */}
        </div>
        </div>
          <div className='btn-skills'>
            <button className="btn1" onClick={() => changeSection('projects')}>Mis Proyectos</button>
            <button className="btn2" onClick={() => changeSection('intro')}>Mi Perfil</button>
          </div>
      </section>
       ) }

    </div>
      {/* Contacto */}
      <FloatingContact />
    </>
  )
}

export default App
