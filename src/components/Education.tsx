import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech – Computer Science Engineering",
    institution: "Siddharth Institute of Engineering and Technology",
    location: "Puttur, India",
    period: "2022 – 2026",
    score: "CGPA: 8.48/10",
    icon: GraduationCap,
    color: "from-primary to-primary-dark"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Madanapalli Junior College",
    location: "Madanapalli, India",
    period: "2020 – 2022",
    score: "Marks: 886/1000",
    icon: Award,
    color: "from-secondary to-secondary-light"
  },
  {
    degree: "SSC",
    institution: "Vivekananda Municipal High School",
    location: "Madanapalli, India",
    period: "2019 – 2020",
    score: "CGPA: 10/10",
    icon: Award,
    color: "from-accent to-purple-600"
  }
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 sm:py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-semibold">Education</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Academic <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="bg-card border-2 border-border rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <edu.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-muted-foreground mb-3">
                      {edu.institution}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-secondary" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-sm">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Line for non-last items */}
              {index < educationData.length - 1 && (
                <div className="hidden sm:block absolute left-10 top-full h-6 w-0.5 bg-gradient-to-b from-border to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Education;
