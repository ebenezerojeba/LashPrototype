import { Heart, Target, Users, Award } from "lucide-react";
import {assets} from '../assets/assets.js'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeValue, setActiveValue] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate(); 

 useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="animate-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  const values = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Passion",
      description: "We're passionate about helping you look and feel your absolute best",
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every service we provide",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community",
      description: "Building a supportive community of beauty professionals and clients",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Expertise",
      description: "Years of experience and continuous education in the latest techniques",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-primary-foreground">
       {/* Story Section with Parallax Effect */}
<section id="animate-story" className={`py-15 px-4 transition-all duration-1000 ${isVisible['animate-story'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">

    <div className="relative group">
      <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
      <img
        src={assets.ceo}
        alt="Founder of Beautish"
        className="relative rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition duration-500"
      />
    </div>

    <div className="space-y-6">
      <div className="inline-block">
        <h2 className="text-5xl font-bold mb-2 bg-[#6B4E71] bg-clip-text text-transparent">
          Our Story
        </h2>
        <div className="h-1 w-20 bg-[#6B4E71] rounded-full"></div>
      </div>

      <div className="space-y-4 text-gray-600 text-lg leading-relaxed">

        <p className="transform hover:translate-x-2 transition duration-300">
          My name is Cynthia. I am the founder and lead artist at Beautish. I started my journey in beauty ten years ago. I moved into permanent makeup in 2021.
        </p>

        <p className="transform hover:translate-x-2 transition duration-300">
          I studied my work with intention. I always wanted strong skill and strong knowledge. Many artists know the work, but few know how to build a structured business. I decided to take structure seriously.
        </p>

        <p className="transform hover:translate-x-2 transition duration-300">
          I invested in training and branding. This shaped my growth. It helped me serve clients with confidence and clarity. I built trust by showing skill and by staying consistent.
        </p>

        <p className="transform hover:translate-x-2 transition duration-300">
          Running a real business came with challenges. Learning how to manage feedback, build a team, and create clear processes required effort. I pushed myself to do things with intention and not follow the crowd.
        </p>

        <p className="transform hover:translate-x-2 transition duration-300">
          I now want to help new SPMU and lash artists. Many know the technique but do not know how to build a strong brand. Skill is one part of the journey. Structure is another.
        </p>

        <p className="transform hover:translate-x-2 transition duration-300">
          I want to support artists who feel stuck, stressed, or unsure of their next step. You deserve a brand that grows with clarity and direction. I am here to guide you through that process.
        </p>

      </div>
    </div>

  </div>
</section>


      {/* CTA Section */}
      <section className="py-15 bg-gray-100 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of satisfied clients or start your journey as a beauty professional
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={()=> navigate('/services')} className="bg-[#6B4E71]  text-white py-3 px-8 rounded-full text-lg hover:bg-white/90 transition">
              Book Appointment
            </button>
            <button   onClick={() => window.location.href = 'https://beautishacademy.com'}className="bg-gray-900 text-white border border-white py-3 px-8 rounded-full text-lg hover:bg-white/10 transition">
              View Training Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
