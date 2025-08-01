import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      title: "B.Tech in Computer Science",
      institution: "Lovely Professional University",
      duration: "2023 - 2027",
      description: "Specializing in Artificial Intelligence and Machine Learning",
      status: "current"
    },
    {
      title: "JEE-ADVANCED Preparation",
      institution: "Allen Career Institute",
      duration: "2022 - 2023",
      status: "completed"
    },
    {
      title: "Senior Secondary",
      institution: "Vikas Bal Vidhya Peeth, Deeg",
      duration: "2020 - 2022",
      status: "completed"
    }
  ];

  const certifications = [
    {
      title: "Google Certified: Foundation of Project Management",
      icon: "fab fa-google",
      description: "Comprehensive training in project management principles and methodologies",
      status: "Certified",
      color: "blue"
    },
    {
      title: "Full Stack Web Development Intern",
      company: "CodSoft | Jan'24 - Feb'24",
      description: "Worked on web applications using HTML, CSS, JavaScript, Node.js and AWS services",
      status: "Completed",
      color: "purple"
    },
    {
      title: "Data Structures & Algorithms",
      company: "Online Certification Program",
      description: "Advanced training in DSA concepts and problem-solving techniques",
      status: "In Progress",
      color: "gray"
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current": return "bg-blue-600";
      case "completed": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  const getBadgeColor = (color: string) => {
    switch (color) {
      case "blue": return "bg-blue-100 text-blue-800";
      case "purple": return "bg-purple-100 text-purple-800";
      case "green": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Education & Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-blue-600" />
                Education
              </h3>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex"
                  >
                    <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-2 mr-4 ${getStatusColor(item.status)}`}></div>
                    <div className="flex-grow">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-blue-600 font-medium mb-2">{item.institution}</p>
                        <p className="text-gray-600 text-sm mb-2">{item.duration}</p>
                        {item.description && (
                          <p className="text-gray-600 mt-2">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Certifications */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
                <Award className="mr-3 h-6 w-6 text-blue-600" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        {index === 0 && <Award className="text-blue-600 text-xl h-6 w-6" />}
                        {index === 1 && <Briefcase className="text-purple-600 text-xl h-6 w-6" />}
                        {index === 2 && <GraduationCap className="text-gray-600 text-xl h-6 w-6" />}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-2">{cert.title}</h4>
                        {cert.company && (
                          <p className="text-blue-600 font-medium mb-2">{cert.company}</p>
                        )}
                        <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
                        <Badge className={`${getBadgeColor(cert.color)} px-3 py-1 rounded-full text-xs font-medium`}>
                          {cert.status}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
