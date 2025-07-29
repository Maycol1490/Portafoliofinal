import { useEffect, useRef, useState } from 'react';
import projects from './Projects';
import './App.css';

const Carousel = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
const scrollToNext = () => {
  if (!carouselRef.current) return;
  const container = carouselRef.current;
  const children = container.children;
  if (children.length === 0) return;

  const itemWidth = children[0].offsetWidth;
  const scrollLeft = container.scrollLeft;
  const visibleItems = Math.floor(container.clientWidth / itemWidth);
  const currentIndex = Math.round(scrollLeft / itemWidth);
  const nextIndex = currentIndex + 1;

  if (nextIndex > children.length - visibleItems) {
    // Volver al inicio
    container.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    const scrollAmount = itemWidth * nextIndex;
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
};


  const startAutoScroll = () => {
    intervalRef.current = setInterval(scrollToNext, 3000);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  const resetInactivityTimeout = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 500); // 5 segundos sin interacción
  };

  const handleUserInteraction = () => {
    if (!isUserInteracting)setIsUserInteracting(true);
    stopAutoScroll();
    resetInactivityTimeout();
  };

  useEffect(() => {
    if (!isUserInteracting) startAutoScroll();
    else stopAutoScroll();

    return () => {
      stopAutoScroll();
      clearTimeout(timeoutRef.current);
    };
  }, [isUserInteracting]);

  return (
    <div
      ref={carouselRef}
      className="carousel-container"
    >
      {projects.map(project => (
        <div className="carousel-item" key={project.id}
            onMouseEnter={handleUserInteraction}
            onMouseLeave={resetInactivityTimeout}>
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="flip-card-back">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="buttons">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-demo">Ver demo</a>
          <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn btn-code">Ver código</a>
        </div>
      </div>
    </div>
  </div>
</div>
      ))}
    </div>
  );
};

export default Carousel;