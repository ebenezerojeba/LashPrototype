import lashbackground from "../assets/lash5.jpg";
import { Sparkles, Star, Clock, Award } from "lucide-react";
import HeroWithSlideshow from "../components/HeroSlider";
import TestimonialsSection from "../components/TestimonialSection";
import CTASection from "../components/CTA";
const Home = () => {
  const services = [
    {
      title: "Lash Extensions",
      description: "Transform your look with stunning, long-lasting lash extensions",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
    },
    {
      title: "Nail Artistry",
      description: "Professional nail services from classic manicures to intricate designs",
      icon: <Star className="h-8 w-8 text-primary" />,
    },
    {
      title: "Pedicures",
      description: "Pamper yourself with our relaxing spa pedicure experiences",
      icon: <Clock className="h-8 w-8 text-primary" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Best lash extensions I've ever had! Ope is incredibly talented and professional.",
      rating: 5,
    },
    {
      name: "Jessica L.",
      text: "The training program changed my career. Highly recommend LashedbyOpe!",
      rating: 5,
    },
    {
      name: "Maya K.",
      text: "Always leave feeling beautiful and pampered. The atmosphere is so welcoming!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-primary-foreground">

      {/* Hero Section */}
  <HeroWithSlideshow /> 
<TestimonialsSection />
<CTASection/>

    </div>
  );
};

export default Home;
