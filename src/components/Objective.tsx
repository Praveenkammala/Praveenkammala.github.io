import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Zap, Sparkles } from "lucide-react";

const Objective = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="objective" className="py-20 sm:py-24 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg"
            >
              <Target className="h-6 w-6 text-white" />
            </motion.div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center">
              Career Objective
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border-2 border-border rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
          >
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <p className="text-lg sm:text-xl leading-relaxed text-foreground/90 mb-6">
                Motivated Computer Science Engineering student aspiring for a role in{" "}
                <span className="font-semibold text-primary">Artificial Intelligence</span>,{" "}
                <span className="font-semibold text-primary">Machine Learning</span>, or{" "}
                <span className="font-semibold text-primary">Generative AI Engineering</span>.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent"
                >
                  <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Technical Skills</h4>
                    <p className="text-sm text-muted-foreground">
                      Proficient in Python, NLP, and AI-driven automation with hands-on experience building AI applications
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent"
                >
                  <Sparkles className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Core Strengths</h4>
                    <p className="text-sm text-muted-foreground">
                      Quick learner with strong adaptability and ability to contribute effectively to technical projects
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Objective;
