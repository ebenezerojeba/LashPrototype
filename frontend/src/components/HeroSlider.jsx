import React, { useState, useEffect } from 'react';
import lash5 from "../assets/lash5.jpg"
// import t1 from "../assets/t1.jpg"
// import t2 from "../assets/t2.jpg"
// import t3 from "../assets/t3.jpg"
// import t4 from "../assets/t4.jpg"
// import c1 from "../assets/c1.jpg"
import b2 from "../assets/b2.jpg"
import b1 from "../assets/b1.jpg"
import b3 from "../assets/b3.jpg"
import b5 from "../assets/b5.jpg"
import b7 from "../assets/b7.jpg"
import lashbackground from "../assets/lashbackground.jpg"
import lashbackground2 from "../assets/lashbackground2.jpg"
import lashbackground3 from "../assets/lashbackground3.png"



const HeroWithSlideshow = () => {
    const images = [
    lashbackground,
    lashbackground2,
    lashbackground3,
    lash5,
    // b1,
    // b2,
    b3,
    b5,
    b7
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsLoaded(true);

    // Image slideshow interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Smooth Transitions */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
            transform: currentImageIndex === index ? 'scale(1)' : 'scale(1.1)',
            zIndex: currentImageIndex === index ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent"></div>
        </div>
      ))}

      {/* Animated Content */}
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        {/* Main Heading - Staggered Animation */}
        <div className="mb-6 overflow-hidden">
          <h1 
            className={`text-3xl md:text-6xl font-bold leading-tight text-white transform transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Welcome to Beautish_NG
          </h1>
        </div>

        {/* Gradient Text - Delayed Animation */}
        <div className="mb-8 overflow-hidden">
          <span 
            className={`block text-2xl md:text-4xl italic font-bold bg-gradient-to-r from-pink-200 via-purple-200 to-pink-500 bg-clip-text text-transparent transform transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            Nigerian-Based, Globally Recognized
          </span>
        </div>

        {/* Description - Fade In */}
        <p 
          className={`text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed transform transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          Expert in lash extensions, lip blush, lamination, microblading and many more. We also offer training.
        </p>

        {/* Buttons - Staggered Slide Up */}
        <div className="flex flex-wrap gap-4 w-full max-sm:flex-col justify-center">
          <button 
          onClick={() => window.location.href = '/services'}
            className={`group relative bg-[#6B4E71]  text-white py-4 px-10 rounded-full text-lg font-semibold overflow-hidden transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            <span className="relative z-10">Book Your Appointment</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <button 
          onClick={() => window.location.href = '/training'}
            className={`group relative border-2 border-pink-100 bg-gray-50 text-[#6B4E71]  py-4 px-10 rounded-full text-lg font-semibold transform transition-all duration-700 ease-out hover:scale-105 hover:bg-pink-500/10 hover:shadow-xl hover:shadow-pink-500/30 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '1300ms' }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-purple-300">Explore Training</span>
          </button>
        </div>

   
      </div>

      {/* Enhanced Slideshow Indicators */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex gap-3 transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: '1700ms' }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
              currentImageIndex === index 
                ? 'bg-gradient-to-r from-pink-500 to-purple-900 w-12 shadow-lg shadow-pink-500/50' 
                : 'bg-white/40 w-8 hover:bg-white/60 hover:w-10'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

     

      {/* Ambient Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default HeroWithSlideshow;