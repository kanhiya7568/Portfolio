import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ShoppingCart, UserCheck, Leaf, Brain, Plus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "UNIMART - E-Commerce Platform",
      description: "A comprehensive e-commerce web application with modern UI, product management, and shopping cart functionality.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: ShoppingCart,
      gradient: "from-blue-500 to-purple-600",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Medical Appointment System",
      description: "A streamlined platform for booking medical appointments with doctors, featuring calendar integration and patient management.",
      technologies: ["HTML", "CSS", "Java"],
      icon: UserCheck,
      gradient: "from-green-500 to-teal-600",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      title: "Ecosystem Protection",
      description: "An educational website promoting environmental awareness and showcasing ecosystem protection initiatives.",
      technologies: ["HTML", "CSS"],
      icon: Leaf,
      gradient: "from-green-600 to-emerald-700",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      title: "Ayurvedic AI Consultation Website",
      description: "A comprehensive platform combining ancient Ayurvedic wisdom with modern AI. Features Dosha quiz, AI consultant for personalized advice, herb database, and holistic wellness guidance.",
      technologies: ["AI", "Web Development", "Healthcare", "Machine Learning"],
      icon: Leaf,
      gradient: "from-emerald-500 to-green-600",
      badgeColor: "bg-emerald-100 text-emerald-800",
      link: "https://www.linkedin.com/posts/kanhiya-singh-330629358_ayurveda-ai-webdevelopment-activity-7356722052025729025-i5D3",
      isLarge: true
    },
    {
      title: "AI-Enhanced System Call Optimization",
      description: "An advanced AI system that optimizes system calls using machine learning algorithms to improve performance and efficiency.",
      technologies: ["Python", "Machine Learning", "System Optimization"],
      icon: Brain,
      gradient: "from-purple-600 to-indigo-700",
      badgeColor: "bg-purple-100 text-purple-800",
      isLarge: true
    },
    {
      title: "More Projects Coming Soon",
      description: "Stay tuned for more exciting projects showcasing the latest technologies and innovative solutions.",
      technologies: ["React", "Node.js", "AI/ML"],
      icon: Plus,
      gradient: "from-gray-400 to-gray-600",
      badgeColor: "bg-gray-100 text-gray-800",
      isComingSoon: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto mb-8"></div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Highlighted Ayurveda AI Project */}
            <motion.div 
              variants={cardVariants}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-600 col-span-full"
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-bold">
                  FEATURED
                </div>
                <svg className="text-6xl text-gray-300 h-20 w-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Ayurveda AI Consultation</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  AI-powered Ayurvedic consultation system that provides personalized health recommendations based on ancient Ayurvedic principles combined with modern machine learning algorithms.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm">AI/ML</span>
                  <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm">Python</span>
                  <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm">Healthcare</span>
                </div>
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => window.open('https://www.linkedin.com/in/kanhiya-singh-330629358', '_blank')}
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-500 transition-all duration-300 transform hover:scale-105"
                  >
                    View on LinkedIn →
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Other Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter((_, index) => index !== 0).map((project, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                className={`bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${project.isLarge ? 'lg:col-span-2' : ''}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <project.icon className="text-4xl text-gray-300 h-16 w-16" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    {project.isComingSoon ? (
                      <>
                        <span className="text-gray-400 font-medium">Coming Soon</span>
                        <Clock className="text-gray-400 h-5 w-5" />
                      </>
                    ) : project.link ? (
                      <>
                        <Button 
                          variant="ghost"
                          className="text-gray-300 hover:text-white font-medium p-0"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          View Project <ExternalLink className="ml-1 h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-200">
                          <Github className="h-5 w-5" />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button 
                          variant="ghost"
                          className="text-gray-300 hover:text-white font-medium p-0"
                        >
                          View Project <ExternalLink className="ml-1 h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-200">
                          <Github className="h-5 w-5" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
