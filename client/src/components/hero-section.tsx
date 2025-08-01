import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImage from "@assets/iphone_1754042573286.png";

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
      className="relative min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
          
          {/* Left Side - AI-ML Developer */}
          <motion.div 
            className="lg:w-1/3 text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight">
              ai-ml<br />
              <span className="font-normal">developer</span>
            </h1>
            <div className="space-y-2 text-gray-600">
              <p>AI enthusiast specializing in</p>
              <p>machine learning and intelligent</p>
              <p>system development</p>
            </div>
            
            {/* Code snippet decorations */}
            <div className="mt-8 space-y-1 text-xs text-gray-400 font-mono">
              <p>&lt;brain&gt;</p>
              <p className="pl-4">neural_networks();</p>
              <p className="pl-4">deep_learning();</p>
              <p>&lt;/brain&gt;</p>
            </div>
          </motion.div>
          
          {/* Center - Profile Image */}
          <motion.div 
            className="lg:w-1/3 flex justify-center mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src={portraitImage} 
                  alt="Kanhiya Solanki" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Artistic paint strokes overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 left-4 w-20 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-sm"></div>
                <div className="absolute top-12 right-8 w-16 h-20 bg-gradient-to-br from-yellow-400/40 to-orange-400/40 rounded-full blur-sm"></div>
                <div className="absolute bottom-16 left-8 w-24 h-12 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-sm"></div>
                <div className="absolute bottom-8 right-4 w-12 h-16 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-sm"></div>
              </div>
              
              {/* Secret Name Button */}
              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.button
                  className="w-3 h-3 bg-gray-700 rounded-full border border-gray-600 hover:bg-gray-600 transition-colors duration-300 relative"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
                </motion.button>
                
                {/* Hidden Name that appears when robot pushes button */}
                <motion.div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  initial={{ opacity: 0, y: 10, scale: 0 }}
                  animate={{ opacity: 0, y: 10, scale: 0 }}
                  id="secret-name"
                >
                  <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-semibold shadow-lg border border-gray-600"
                       style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                    Kanhiya Solanki
                  </div>
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rotate-45 border-r border-b border-gray-600"></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Side - Full Stack Coder */}
          <motion.div 
            className="lg:w-1/3 text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight">
              &lt;coder&gt;
            </h1>
            <div className="space-y-2 text-gray-600">
              <p>Developer who creates modern,</p>
              <p>scalable and efficient</p>
              <p>web applications</p>
            </div>
            
            {/* Tech stack decorations */}
            <div className="mt-8 space-y-1 text-xs text-gray-400 font-mono">
              <p className="text-right">React.js</p>
              <p className="text-right">Node.js</p>
              <p className="text-right">Python</p>
              <p className="text-right">JavaScript</p>
              <p className="text-right">TypeScript</p>
            </div>
          </motion.div>
        </div>
        
        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            onClick={handleScrollToContact}
            className="bg-gray-800 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
          <Button 
            variant="outline"
            onClick={handleScrollToProjects}
            className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Button>
        </motion.div>
      </div>
      
      {/* Animated Robot */}
      <motion.div
        className="absolute w-24 h-24 z-20 hidden lg:block"
        style={{ top: '65%', left: '0' }}
        animate={{
          x: [0, 400, 1000],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.4, 1]
        }}
        onUpdate={(latest) => {
          // Check robot position and trigger name reveal
          if (latest.x >= 350 && latest.x <= 450) {
            const nameElement = document.getElementById('secret-name');
            if (nameElement && nameElement.style.opacity !== '1') {
              nameElement.style.opacity = '1';
              nameElement.style.transform = 'translateX(-50%) translateY(10px) scale(1)';
              nameElement.style.transition = 'all 0.5s ease-out';
              
              // Auto-hide name after 2 seconds
              setTimeout(() => {
                if (nameElement) {
                  nameElement.style.opacity = '0';
                  nameElement.style.transform = 'translateX(-50%) translateY(10px) scale(0)';
                }
              }, 2000);
            }
          }
        }}
      >
        {/* Robot with reflection */}
        <div className="relative">
          {/* Main Robot */}
          <motion.svg 
            viewBox="0 0 64 64" 
            className="w-full h-full text-gray-700 drop-shadow-lg"
            animate={{
              y: [0, -2, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <g fill="currentColor">
              {/* Robot body */}
              <rect x="18" y="24" width="28" height="32" rx="4" />
              {/* Robot head */}
              <rect x="22" y="12" width="20" height="16" rx="2" />
              {/* Eyes with blinking animation */}
              <motion.g
                animate={{
                  scaleY: [1, 0.1, 1],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 3,
                  times: [0, 0.5, 1]
                }}
              >
                <circle cx="28" cy="18" r="2" fill="white" />
                <circle cx="36" cy="18" r="2" fill="white" />
                <circle cx="28" cy="18" r="1" fill="currentColor" />
                <circle cx="36" cy="18" r="1" fill="currentColor" />
              </motion.g>
              {/* Mouth */}
              <rect x="30" y="22" width="4" height="2" rx="1" fill="white" />
              {/* Arms with walking motion */}
              <motion.rect 
                x="12" y="28" width="6" height="16" rx="3"
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ transformOrigin: "15px 28px" }}
              />
              <motion.rect 
                x="46" y="28" width="6" height="16" rx="3"
                animate={{ rotate: [10, -10, 10] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ transformOrigin: "49px 28px" }}
              />
              {/* Legs with walking motion */}
              <motion.rect 
                x="22" y="56" width="6" height="6" rx="1"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{ transformOrigin: "25px 56px" }}
              />
              <motion.rect 
                x="36" y="56" width="6" height="6" rx="1"
                animate={{ rotate: [5, -5, 5] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{ transformOrigin: "39px 56px" }}
              />
              {/* Antenna */}
              <line x1="32" y1="12" x2="32" y2="8" stroke="currentColor" strokeWidth="2" />
              <circle cx="32" cy="8" r="2" fill="white" />
            </g>
          </motion.svg>
          
          {/* Robot Shadow/Reflection */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-10 h-3 bg-gray-400 rounded-full opacity-40 blur-sm"></div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-gray-600 text-2xl" />
      </motion.div>
    </section>
  );
}
