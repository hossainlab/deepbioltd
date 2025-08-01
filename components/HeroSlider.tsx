
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/Icons.tsx';

const slides = [
  {
    title: 'Revolutionizing Health Research with AI & Bioinformatics',
    subtitle:
      'At DeepBio Limited, we combine cutting-edge artificial intelligence with advanced bioinformatics to tackle the most pressing challenges in genomics, cancer, and public health.',
    buttonText: 'Learn More',
    buttonLink: '/services',
    image: 'https://www.cd-genomics.com/wp-content/themes/v1/img/index-img8.webp',
  },
  {
    title: 'Empowering Science in Resource-Limited Settings',
    subtitle:
      'We build scalable, cost-effective solutions for data-driven health research—empowering scientists and clinicians in low- and middle-income countries to unlock the power of precision medicine.',
    buttonText: 'Our Research',
    buttonLink: '/research',
    image: 'https://www.cd-genomics.com/wp-content/themes/v1/img/servicesbg.webp',
  },
  {
    title: 'From Genomes to Insights—Faster, Smarter, Deeper',
    subtitle:
      'Our interdisciplinary team transforms raw biological data into actionable insights using high-performance computing, machine learning, and next-gen sequencing pipelines.',
    buttonText: 'Explore Resources',
    buttonLink: '/resources',
    image: 'https://www.cd-genomics.com/wp-content/themes/v1/img/index-img1.webp',
  },
];

const HeroSlider: React.FC = () => {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  useEffect(() => {
    slideRefs.current.forEach((slideEl, index) => {
      if (slideEl) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = new Image();
                img.src = slides[index].image;
                img.onload = () => {
                  slideEl.style.backgroundImage = `url(${slides[index].image})`;
                };
                observer.unobserve(slideEl);
              }
            });
          },
          { rootMargin: '0px', threshold: 0.1 }
        );
        observer.observe(slideEl);
      }
    });
  }, [slides]);

  return (
    <section className="relative w-full h-screen max-h-[700px] overflow-hidden font-heading flex items-center justify-center">
      {slides.map((slide, index) => (
        <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out flex items-center justify-center text-white ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
            }`}
            data-src={slide.image}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-20 text-center p-8 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{slide.title}</h1>
            <p className="text-md sm:text-lg md:text-xl lg:text-2xl mb-8 font-sans">{slide.subtitle}</p>
            <Link
              to={slide.buttonLink}
              className="px-8 py-3 rounded-full text-lg font-semibold bg-secondary text-white transition-transform transform hover:scale-105 duration-300 inline-block"
            >
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 transition-colors duration-300 z-30"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 transition-colors duration-300 z-30"
        aria-label="Next slide"
      >
        <ChevronRightIcon size={32} />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;