import React, { useState, useRef, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'Mantenimiento Chiller Industrial',
    description: 'Limpieza y calibración de sistema de enfriamiento para planta manufacturera.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Instalación Minisplit',
    description: 'Instalación residencial estética con ocultamiento de tubería.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Reparación de Ductos',
    description: 'Sellado y aislamiento térmico en edificio de oficinas.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Diagnóstico Electrónico',
    description: 'Reparación de tarjeta lógica en unidad inverter VRF.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Instalación Aire Central',
    description: 'Montaje de unidad paquete de 5 toneladas en azotea para residencia de lujo, cumpliendo normativa eléctrica.',
    image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Proyecto VRF Comercial',
    description: 'Instalación completa de sistema VRF para edificio corporativo, optimizando el consumo energético.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Logística de Instalación (Video)',
    description: 'Coordinación y supervisión técnica en proyecto de gran escala. Garantizamos seguridad en maniobras complejas.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/2563456/2563456-hd_1920_1080_24fps.mp4'
  }
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Pause videos when sliding away
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
      }
    });
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Galería de Proyectos
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Evidencia real de nuestra calidad y compromiso en cada reparación e instalación.
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto group select-none">
            <div className="overflow-hidden rounded-2xl shadow-xl h-[300px] sm:h-[400px] lg:h-[500px] relative bg-gray-900">
                {projects.map((project, index) => (
                    <div 
                        key={project.id} 
                        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        {project.video ? (
                            <video
                                ref={el => { videoRefs.current[index] = el }}
                                src={project.video}
                                poster={project.image}
                                controls
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-cover"
                            >
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        ) : (
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover opacity-90"
                            />
                        )}
                        
                        {/* Gradient Overlay - pointer-events-none allows clicks to pass through to video controls */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Content */}
                        <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white transition-all duration-700 transform pointer-events-none ${
                            index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-200 text-sm md:text-lg max-w-2xl">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white z-20"
                aria-label="Anterior"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Right Arrow */}
            <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white z-20"
                aria-label="Siguiente"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
                {projects.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`transition-all duration-300 rounded-full focus:outline-none ${
                            currentIndex === slideIndex ? 'w-8 h-2.5 bg-brand-600' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Ir a diapositiva ${slideIndex + 1}`}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;