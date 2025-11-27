import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

// Here is a clean set tailored to brows, lashes, and lamination only.

const testimonials = [
{
name: "Sarah Johnson",
text: "Your lash work lifted my eyes and kept the look sharp for weeks. The process felt smooth and the results looked natural.",
rating: 5,
service: "Classic Lash Extensions"
},
{
name: "Maya Roberts",
text: "My brow shaping came out clean and structured. You improved my face outline with precision. I love how easy it is to maintain now.",
rating: 5,
service: "Brow Shaping"
},
{
name: "Jessica White",
text: "The brow lamination gave me fuller brows with a soft lift. The hold stayed strong and improved my daily routine. Amazing work.",
rating: 5,
service: "Brow Lamination"
},
{
name: "Amara Lee",
text: "Your training showed me how to place lashes with accuracy. I improved my speed and gained the skill to take paid clients with confidence.",
rating: 5,
service: "Lash Extension Training"
},
{
name: "Tiffany Brooks",
text: "The brow training helped me build strong technique. You taught me mapping, shaping, and lamination in a simple way. I now offer the service in my studio.",
rating: 5,
service: "Brow Training"
},
{
name: "Keisha Brown",
text: "The lash and brow program improved my work quality. I learned isolation, volume placement, and proper aftercare. I now get repeat clients.",
rating: 5,
service: "Lash and Brow Certification"
}
];


  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6B4E71]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6B4E71]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#6B4E71] font-semibold text-sm tracking-widest uppercase bg-[#6B4E71]/10 px-4 py-2 rounded-full">
              Testimonials
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from our valued clients who trust us with their beauty journey
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 bg-white hover:bg-[#6B4E71] text-[#6B4E71] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 bg-white hover:bg-[#6B4E71] text-[#6B4E71] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden mx-auto max-w-3xl">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-[#6B4E71] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                    
                    {/* Card Content */}
                    <div className="relative p-10 md:p-12">
                      {/* Quote Icon */}
                      <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#6B4E71] rounded-full flex items-center justify-center transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 shadow-lg">
                        <Quote className="h-10 w-10 text-white" fill="currentColor" />
                      </div>

                      {/* Service Badge */}
                      <div className="text-right mb-6">
                        <span className="inline-block text-sm font-semibold text-[#6B4E71] bg-[#6B4E71]/10 px-4 py-2 rounded-full">
                          {testimonial.service}
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="flex mb-8 justify-center gap-2">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star
                            key={j}
                            className="h-6 w-6 fill-yellow-400 text-yellow-400 transform transition-all duration-300 group-hover:scale-110"
                            style={{
                              transitionDelay: `${j * 50}ms`
                            }}
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed text-center italic relative px-6">
                        <span className="text-4xl text-[#6B4E71]/30 absolute -left-2 -top-2">"</span>
                        {testimonial.text}
                        <span className="text-4xl text-[#6B4E71]/30 absolute -right-2 -bottom-4">"</span>
                      </p>

                      {/* Author */}
                      <div className="text-center pt-8 border-t border-gray-100">
                        <p className="font-bold text-gray-900 text-xl">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 mt-2">Verified Client</p>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-[#6B4E71]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? 'bg-[#6B4E71] w-12 shadow-lg shadow-[#6B4E71]/50'
                    : 'bg-gray-300 w-8 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">Join hundreds of satisfied clients</p>
          <button className="group relative bg-[#6B4E71] text-white py-4 px-10 rounded-full text-lg font-semibold overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#6B4E71]/50">
            <span className="relative z-10">Share Your Experience</span>
            <div className="absolute inset-0 bg-[#6B4E71]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-[#6B4E71]">500+</p>
            <p className="text-gray-600 text-sm mt-1">Happy Clients</p>
          </div>
          <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-[#6B4E71]">5.0</p>
            <p className="text-gray-600 text-sm mt-1">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-[#6B4E71]">100%</p>
            <p className="text-gray-600 text-sm mt-1">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;