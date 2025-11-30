import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Layers, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: Code2,
    color: "from-primary to-primary-dark",
    skills: ["Python", "SQL"]
  },
  {
    category: "AI / ML",
    icon: Brain,
    color: "from-secondary to-secondary-light",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Prompt Engineering", "Generative AI (LLMs)"]
  },
  {
    category: "Frameworks & Libraries",
    icon: Layers,
    color: "from-accent to-purple-600",
    skills: ["Hugging Face", "OpenAI", "LangChain", "Pandas", "Matplotlib"]
  },
  {
    category: "Tools",
    icon: Wrench,
    color: "from-blue-500 to-cyan-500",
    skills: ["GitHub", "VS Code", "Google Colab", "Jupyter Notebook"]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 sm:py-24 bg-gradient-to-br from-background to-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Brain className="h-5 w-5" />
            <span className="text-sm font-semibold">Technical Skills</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in cutting-edge technologies for AI and software development
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillsData.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-card border-2 border-border rounded-3xl p-6 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                {/* Icon Header */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skillSet.color} flex items-center justify-center mb-4 shadow-md`}
                >
                  <skillSet.icon className="h-7 w-7 text-white" />
                </motion.div>

                <h3 className="font-display text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {skillSet.category}
                </h3>

                <div className="space-y-2">
                  {skillSet.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      <span className="text-muted-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Soft Skills & Strengths
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card border-2 border-border rounded-3xl p-6 shadow-lg">
              <h4 className="font-semibold text-lg mb-4 text-primary">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Analytical Thinking", "Communication", "Team Collaboration", "Adaptability", "Quick Learning"].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-foreground border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-card border-2 border-border rounded-3xl p-6 shadow-lg">
              <h4 className="font-semibold text-lg mb-4 text-secondary">Key Strengths</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  Self-motivated and enthusiastic learner
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  Strong logical and analytical skills
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  Quick adoption of new technologies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  Independent and team player
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
