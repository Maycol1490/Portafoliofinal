import pokedex from './assets/Pokedex.jpg';
import rick_morty from './assets/rick.jpg';
import clima from './assets/Clima.jpg';
import pokedex2 from './assets/pokedex2.jpeg';
import frase from './assets/Frase.jpg';

const projects = [
  {
    id: 1,
    title: "Pokédex con API de Pokémon usando React",
    image: pokedex ,
    description: 'Aplicación desarrollada en React que consume la PokéAPI mediante fetch para renderizar dinámicamente datos de más de 1000 Pokémon. Implementa paginación, búsqueda por nombre y filtrado por tipo, con manejo eficiente del estado usando useState y useEffect.',
    demo: "https://pokedexkanto.netlify.app/",
    code: "https://github.com/Maycol1490/PokedexP"
  },
  {
    id: 2,
    title: "Rick y Morty con API oficial usando React",
    image: rick_morty,
    description: 'Proyecto en React que integra la Rick and Morty API para consultar y renderizar personajes, ubicaciones y episodios. Incluye paginación dinámica, carga condicional de datos y modularización de componentes reutilizables.',
    demo: "https://rick-mortys.netlify.app/",
    code: "https://github.com/Maycol1490/rick_morty"
  },
  {
    id: 3,
    title: "App del clima usando React",
    image: clima ,
    description: 'Web app que utiliza una API meteorológica como OpenWeatherMap para mostrar clima en tiempo real por ciudad. Se implementa consumo de API REST con manejo de errores, estados de carga y validación de inputs mediante hooks personalizados.',
    demo: "https://weathers-locations.netlify.app/",
    code: "https://github.com/Maycol1490/weather_app"
  },
    {
    id: 4,
    title: "Segunda Pokédex con otro diseño",
    image: pokedex2 ,
    description: 'Segunda implementación de Pokédex que reutiliza la lógica de consumo de la PokéAPI pero con un rediseño completo de la interfaz. Se emplea diseño responsive con CSS Grid y animaciones con framer-motion para mejorar la experiencia del usuario.',
    demo: "https://pokedex-x.netlify.app/",
    code: "https://github.com/Maycol1490/pokedex"
  },
  {
    id: 5,
    title: "Frases diarias desde un archivo JSON",
    image: frase ,
    description: 'Aplicación simple pero funcional que carga frases desde un archivo JSON estático y renderiza una frase distinta cada vez. Usa React puro, enfoque declarativo y aleatorización controlada desde el frontend sin necesidad de API externa.',
    demo: "https://phrases-of-the-day.netlify.app/",
    code: "https://github.com/Maycol1490/phrases-_of-_the_day"
  },
];

export default projects;