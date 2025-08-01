import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImage from "@assets/iphone_1754042573286.png";
import backgroundImage from "@assets/manali1_1754042878473.jpg";

export default function HeroSection() {
  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1a1a1a'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16">
          {/* Left Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
                Hello.. I am
              </h1>
              <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-white">
                <span className="text-gray-200">Kanhiya</span><br />
                <span className="text-gray-300">Solanki</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
                AI-ML Enthusiast & Full Stack Developer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleScrollToContact}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleScrollToProjects}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  View My Work
                </Button>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Profile Image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-96 h-96 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src={portraitImage} 
                  alt="Kanhiya Solanki" 
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-green-500 w-8 h-8 rounded-full border-4 border-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
}
