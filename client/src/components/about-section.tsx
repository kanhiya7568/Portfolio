import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">AI-ML Enthusiast & Developer</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a first-year computer science student specializing in artificial intelligence and machine learning, I am embarking on an exciting journey to explore the world of data science. My passion lies in understanding complex algorithms, harnessing the power of Python, and diving into the depths of deep learning.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With a curious mind and a commitment to continuous learning, I eagerly collaborate with fellow enthusiasts to create intelligent solutions that push the boundaries of what's possible.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-2 h-5 w-5" />
                  <span className="text-gray-600">Bharatpur, Rajasthan</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="text-blue-600 mr-2 h-5 w-5" />
                  <span className="text-gray-600">B.Tech Computer Science</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="mountain-gradient p-8 rounded-2xl text-white">
                <h4 className="text-xl font-semibold mb-6">Quick Facts</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Experience</span>
                    <span className="font-semibold">Internship + Projects</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Specialization</span>
                    <span className="font-semibold">AI-ML & Web Dev</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Projects Completed</span>
                    <span className="font-semibold">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Certifications</span>
                    <span className="font-semibold">3+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
