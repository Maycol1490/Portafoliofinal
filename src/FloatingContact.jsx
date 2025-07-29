import { useState } from 'react';
import './App.css';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function FloatingContact() {

  const [showSocial, setShowSocial] = useState(false);

  return (
<div className="floating-social">
  <button
    className="social-toggle"
    onClick={() => setShowSocial(!showSocial)}
  >
    🌐 Contacto
  </button>

  {showSocial && (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/guerrero-maycol14/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>  <FaLinkedin />LinkedIn
      </a>
      <a href="mailto:maicol1490@hotmail.com?subject=Interesado%20en%20tu%20portafolio">
        <i className="fas fa-envelope"></i>  <FaEnvelope /> Email
      </a>
      <a
        href="https://wa.me/573122813460?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>  <FaWhatsapp />WhatsApp
      </a>
    </div>
  )}
</div>
  );
}

export default FloatingContact;