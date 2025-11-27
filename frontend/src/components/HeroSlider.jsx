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
import bt10 from "../assets/bt10.jpg"
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
    b7,
    bt10,
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
      <div className="container px-4 relative z-10 text-center max-w-3xl">
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










// import React, { useState, useEffect } from 'react';
// import lash5 from "../assets/lash5.jpg"
// import b3 from "../assets/b3.jpg"
// import b5 from "../assets/b5.jpg"
// import b7 from "../assets/b7.jpg"
// import bt10 from "../assets/bt10.jpg"
// import lashbackground from "../assets/lashbackground.jpg"
// import lashbackground2 from "../assets/lashbackground2.jpg"
// import lashbackground3 from "../assets/lashbackground3.png"

// const HeroWithSlideshow = () => {
//     const images = [
//         lashbackground,
//         lashbackground2,
//         lashbackground3,
//         lash5,
//         b3,
//         b5,
//         b7,
//         bt10,
//     ];
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [isLoaded, setIsLoaded] = useState(false);

//     useEffect(() => {
//         setIsLoaded(true);
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => 
//                 prevIndex === images.length - 1 ? 0 : prevIndex + 1
//             );
//         }, 4000);

//         return () => clearInterval(interval);
//     }, [images.length]);

//     return (
//         <section className="relative h-[70vh] sm:h-screen flex items-center justify-center overflow-hidden">
//             {/* Background Images with Enhanced Transitions */}
//             {images.map((image, index) => (
//                 <div
//                     key={index}
//                     className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
//                     style={{
//                         backgroundImage: `url(${image})`,
//                         opacity: currentImageIndex === index ? 1 : 0,
//                         transform: `scale(${currentImageIndex === index ? 1 : 1.05})`,
//                         zIndex: currentImageIndex === index ? 1 : 0,
//                         transition: 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
//                     }}
//                 >
//                     <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
//                 </div>
//             ))}

//             {/* Enhanced Animated Content */}
//             <div className="container px-4 relative z-10 text-center max-w-3xl">
//                 {/* Main Heading - Fade Up with Blur */}
//                 <div className="mb-3 sm:mb-6 overflow-hidden">
//                     <h1 
//                         className={`mb-8 text-2xl sm:text-3xl md:text-6xl font-bold leading-tight text-white transform transition-all duration-700 ease-out ${
//                             isLoaded 
//                                 ? 'translate-y-0 opacity-100 blur-0' 
//                                 : 'translate-y-4 opacity-0 blur-sm'
//                         }`}
//                         style={{ 
//                             transitionDelay: '200ms',
//                             transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)'
//                         }}
//                     >
//                         Welcome to Beautish_NG
//                     </h1>
//                 </div>

//                 {/* Gradient Text - Slide Up with Gradient Shift */}
//                 <div className="mb-4 sm:mb-8 overflow-hidden">
//                     <span 
//                         className={`block text-lg sm:text-2xl md:text-4xl italic font-bold bg-gradient-to-r from-pink-200 via-purple-200 to-pink-500 bg-clip-text text-transparent transform transition-all duration-800 ease-out ${
//                             isLoaded 
//                                 ? 'translate-y-0 opacity-100' 
//                                 : 'translate-y-6 opacity-0'
//                         }`}
//                         style={{ 
//                             transitionDelay: '400ms',
//                             transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)'
//                         }}
//                     >
//                         Nigerian-Based, Globally Recognized
//                     </span>
//                 </div>

//                 {/* Description - Staggered Fade In */}
//                 <p 
//                     className={`text-base sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-10 leading-relaxed transform transition-all duration-900 ease-out ${
//                         isLoaded 
//                             ? 'translate-y-0 opacity-100 blur-0' 
//                             : 'translate-y-8 opacity-0 blur-sm'
//                     }`}
//                     style={{ 
//                         transitionDelay: '600ms',
//                         transition: 'all 900ms cubic-bezier(0.4, 0, 0.2, 1)'
//                     }}
//                 >
//                     Expert in lash extensions, lip blush, lamination, microblading and many more. We also offer training.
//                 </p>

//                 {/* Buttons - Scale and Fade with Glow */}
//                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
//                     <button 
//                         onClick={() => window.location.href = '/services'}
//                         className={`group relative bg-[#6B4E71] text-white py-3 sm:py-4 px-6 sm:px-10 rounded-full text-base sm:text-lg font-semibold overflow-hidden transform transition-all duration-600 ease-out ${
//                             isLoaded 
//                                 ? 'translate-y-0 opacity-100 scale-100' 
//                                 : 'translate-y-10 opacity-0 scale-95'
//                         }`}
//                         style={{ 
//                             transitionDelay: '800ms',
//                             transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)'
//                         }}
//                     >
//                         <span className="relative z-10">Book Your Appointment</span>
//                         <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-105"></div>
//                         <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-md group-hover:blur-lg"></div>
//                     </button>
                    
//                     <button 
//                         onClick={() => window.location.href = '/training'}
//                         className={`group relative border-2 border-white/30 bg-white  text-gray-900 py-3 sm:py-4 px-6 sm:px-10 rounded-full text-base sm:text-lg font-semibold transform transition-all duration-600 ease-out ${
//                             isLoaded 
//                                 ? 'translate-y-0 opacity-100 scale-100' 
//                                 : 'translate-y-10 opacity-0 scale-95'
//                         }`}
//                         style={{ 
//                             transitionDelay: '1000ms',
//                             transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)'
//                         }}
//                     >
//                         <span className="relative z-10 transition-all duration-300">
//                             Explore Training
//                         </span>
//                         <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
//                     </button>
//                 </div>
//             </div>

//             {/* Sleek Slideshow Indicators */}
//             <div 
//                 className={`absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex gap-2 sm:gap-3 transition-all duration-1000 ease-out ${
//                     isLoaded 
//                         ? 'translate-y-0 opacity-100' 
//                         : 'translate-y-8 opacity-0'
//                 }`}
//                 style={{ transitionDelay: '1200ms' }}
//             >
//                 {images.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentImageIndex(index)}
//                         className={`relative rounded-full transition-all duration-500 ease-out overflow-hidden ${
//                             currentImageIndex === index 
//                                 ? 'w-8 sm:w-12 bg-white/80' 
//                                 : 'w-4 sm:w-8 bg-white/30 hover:bg-white/50'
//                         }`}
//                         style={{
//                             height: '3px',
//                             transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)'
//                         }}
//                         aria-label={`Go to slide ${index + 1}`}
//                     >
//                         {/* Progress Bar Animation */}
//                         {currentImageIndex === index && (
//                             <div 
//                                 className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 to-purple-500"
//                                 style={{
//                                     animation: 'progress 4s linear forwards',
//                                     width: '100%'
//                                 }}
//                             />
//                         )}
//                     </button>
//                 ))}
//             </div>

//             {/* Enhanced Ambient Glow */}
//             <div 
//                 className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[800px] sm:h-[800px] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none transform transition-all duration-2000 ease-out ${
//                     isLoaded ? 'scale-100 opacity-40' : 'scale-50 opacity-0'
//                 }`}
//             />

//             {/* CSS for progress animation */}
//             <style jsx>{`
//                 @keyframes progress {
//                     from { transform: scaleX(0); }
//                     to { transform: scaleX(1); }
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default HeroWithSlideshow;