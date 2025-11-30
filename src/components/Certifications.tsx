import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Retrieval Augmented Generation (RAG) with LangChain",
    provider: "IBM SkillsBuild",
    year: "2025",
    color: "from-primary to-primary-dark",
    file: "/rag.pdf",
  },
  {
    title: "AI-Powered Document Retrieval System",
    provider: "IBM SkillsBuild",
    year: "2025",
    color: "from-secondary to-secondary-light",
    file: "/lab.pdf",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    provider: "IBM SkillsBuild (Credly)",
    year: "2025",
    color: "from-accent to-purple-600",
    file: "/ai.pdf",
  },
  {
    title: "Machine Learning with Python",
    provider: "IBM (edX)",
    year: "2025",
    color: "from-blue-500 to-cyan-500",
    file: "/machinelearning.pdf",
  },
  {
    title: "CS50P: Introduction to Programming with Python",
    provider: "HarvardX (edX)",
    year: "2025",
    color: "from-red-500 to-orange-500",
    file: "/cs50.pdf",
  },
];

const Certifications: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openFile = (path: string) => {
    if (!path) return;
    // open in new tab for viewing
    window.open(path, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="certifications" className="py-20 sm:py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Award className="h-5 w-5" />
            <span className="text-sm font-semibold">Certifications</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized certification programs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="h-full bg-card border-2 border-border rounded-3xl p-6 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity rounded-full`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-md`}
                  >
                    <Award className="h-6 w-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {cert.provider}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-semibold">
                      {cert.year}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
                      onClick={() => openFile(cert.file)}
                      aria-label={`Open certificate: ${cert.title}`}
                      title="View certificate"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Actively pursuing additional certifications in AI/ML and cloud technologies
          </p>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Certifications;
