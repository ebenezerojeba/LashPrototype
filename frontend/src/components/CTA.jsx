import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Sparkles, ArrowRight, Clock, Award, Heart } from 'lucide-react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-10 overflow-hidden rounded-xl bg-[#6B4E71]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center">
          {/* Icon Badge */}
     

          {/* Main Heading */}
          <h2 
            className={`text-5xl md:text-7xl font-bold mb-6 text-white leading-tight transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Ready to Transform
            <span className="block mt-2">Your Look?</span>
          </h2>

          {/* Description */}
          <p 
            className={`text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Book your appointment today and experience luxury beauty services that will leave you feeling confident and beautiful
          </p>
        </div>
      </div>

     
    </section>
  );
};

export default CTASection;