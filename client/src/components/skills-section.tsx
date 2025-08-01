import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Globe, Database } from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setAnimateSkills(true), 500);
    }
  }, [isInView]);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 }
      ]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      icon: Database,
      title: "Data Management",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "DSA", level: 85 }
      ]
    }
  ];

  const powerSkills = [
    "Leadership", "Communication", "Critical Thinking", 
    "Teamwork", "Adaptability", "Problem Solving"
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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto mb-8"></div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="text-3xl text-gray-300 mr-4 h-8 w-8" />
                  <h3 className="text-xl font-semibold text-gray-100">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-300">{skill.level}%</span>
                      </div>
                      <div className="bg-gray-700 rounded-full h-3">
                        <motion.div 
                          className="skill-bar bg-gradient-to-r from-gray-500 to-gray-400 h-3 rounded-full"
                          initial={{ width: 0 }}
                          animate={animateSkills ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 2, delay: skillIndex * 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Power Skills */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Power Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {powerSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-700 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
