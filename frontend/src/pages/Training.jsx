import { CheckCircle2, Clock, Award, BookOpen, Sparkles, TrendingUp, Users, ArrowRight, Circle } from "lucide-react";
import { useState, useEffect } from "react";
import { assets } from "../assets/assets";


const Training = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

const courses = [
{
title: "Professional Lash Extension Course",
duration: "14 Days",
price: "₦50,000",
description: "Learn classic and volume lash application with precise technique",
gradient: "from-purple-500 to-red-900",
features: [
"Full theory and live practice",
"Model training sessions",
"Starter kit included",
"Certification provided",
"Lifetime support",
],
},
{
title: "Brow Shaping and Tinting Course",
duration: "7 Days",
price: "₦45,000",
description: "Learn mapping, shaping, tinting, and correction techniques",
gradient: "from-purple-500 to-red-900",
features: [
"Brow mapping guide",
"Hands-on shaping practice",
"Tinting and color selection",
"Safety and hygiene",
"Certification provided",
],
},
{
title: "Lash and Brow Combined Certification",
duration: "21 Days",
price: "₦100,000",
description: "A complete program covering lashes, brow shaping, and lamination",
gradient: "from-purple-500 to-red-900",
features: [
"Classic and volume lash training",
"Brow mapping and shaping",
"Lamination techniques",
"Model-based practice",
"Certification provided",
],
},
];

  const benefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Industry-Recognized Certification",
      description: "Get certified credentials that boost your professional credibility",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive Curriculum",
      description: "Learn from beginner basics to advanced professional techniques",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Scheduling",
      description: "Choose training dates that work with your busy schedule",
      color: "from-violet-400 to-purple-500",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const studentSlides = [
    {
      // image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop",
      image: assets.bt5,
      title: "Master the Art of Lash Extensions",
      subtitle: "Join our certified training program",
      student: "Class of 2024"
    },
    {
      image: assets.bt6,
      title: "Hands-On Professional Training",
      subtitle: "Learn from industry experts",
      student: "Advanced Techniques Workshop"
    },
    {
      // image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=800&fit=crop",
      image: assets.bt2,
      title: "Build Your Beauty Empire",
      subtitle: "From student to successful entrepreneur",
      student: "Success Stories"
    },
    {
      image: assets.bt8,
      title: "Practice Makes Perfect",
      subtitle: "Real models, real experience",
      student: "Training in Action"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % studentSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ top: '10%', left: '10%', animationDelay: '0s' }}
        />
        <div 
          className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ top: '60%', right: '10%', animationDelay: '2s' }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ bottom: '10%', left: '50%', animationDelay: '4s' }}
        />
      </div>

      {/* Hero Section with Image Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Slides */}
        <div className="absolute inset-0">
          {studentSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
          <div 
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/30 shadow-lg"
          >
            {/* <Sparkles className="h-4 w-4 text-white animate-pulse" /> */}
            <span className="text-sm font-medium text-white">
              {studentSlides[currentSlide].student}
            </span>
          </div>

          <h1 
            key={currentSlide}
            className="text-5xl md:text-7xl font-bold mb-6 text-white max-w-4xl animate-fadeInUp"
          >
            {studentSlides[currentSlide].title}
          </h1>
          
          <p 
            key={`subtitle-${currentSlide}`}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            {studentSlides[currentSlide].subtitle}
          </p>

          <div 
            className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            <button  onClick={() => window.location.href = 'https://beautishacademy.com'} className="cursor-pointer group relative px-8 py-4 bg-white text-gray-600 rounded-full font-semibold shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore Courses
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/40 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
              Schedule a Call
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-3">
            {studentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-12 h-2 bg-white'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>


      </section>

  

      {/* Courses Section */}
      <section id="courses" data-animate className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect course to launch or elevate your beauty career
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`group relative bg-white/70 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                  visibleSections.has("courses") ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient Header */}
                <div className={`relative bg-gradient-to-br ${course.gradient} p-8 overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                  
                  <h3 className="text-2xl font-bold text-white relative z-10 mb-4">{course.title}</h3>
                  <div className="flex items-center justify-between text-white/90 relative z-10">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {/* <Clock className="h-4 w-4" /> */}
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    <div className="text-3xl font-bold">{course.price}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, fIndex) => (
                      <li 
                        key={fIndex} 
                        className="flex items-start gap-3 group/item"
                      >
                       <Circle className="w-3 h-3 text-[#6B4E71]" />

                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      {/* <section id="gain" data-animate className="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            What You'll Gain
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Skills",
                icon: <TrendingUp className="h-6 w-6" />,
                color: "from-blue-500 to-cyan-500",
                items: [
                  "Professional application techniques",
                  "Product knowledge and selection",
                  "Safety and sanitation protocols",
                  "Client consultation methods",
                ],
              },
              {
                title: "Business Skills",
                icon: <Sparkles className="h-6 w-6" />,
                color: "from-purple-500 to-pink-500",
                items: [
                  "Setting up your beauty business",
                  "Marketing and client acquisition",
                  "Pricing and service packages",
                  "Building client relationships",
                ],
              },
              {
                title: "Hands-On Practice",
                icon: <Users className="h-6 w-6" />,
                color: "from-green-500 to-emerald-500",
                items: [
                  "Work with real models",
                  "Instructor supervision and feedback",
                  "Build your portfolio",
                  "Perfect your technique",
                ],
              },
              {
                title: "Ongoing Support",
                icon: <Award className="h-6 w-6" />,
                color: "from-orange-500 to-red-500",
                items: [
                  "Lifetime access to resources",
                  "Alumni community network",
                  "Continued education opportunities",
                  "Business mentorship available",
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className={`group relative bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  visibleSections.has("gain") ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">{section.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

  

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#6B4E71] opacity-95 rounded-xl" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Ready to Start Your Beauty Career?
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Enroll today and take the first step toward becoming a certified beauty professional
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button  onClick={() => window.location.href = 'https://beautishacademy.com'} className="group px-10 py-5 cursor-pointer bg-white text-[#9e2a2c] rounded-full text-lg font-semibold shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-110">
              <span className="flex items-center gap-2">
                Enroll Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-110">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
             transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Training;