import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Award } from "lucide-react";

/**
 * Featured / Projects component
 * - Each project may include `repo` and `demo` fields (both optional).
 * - Buttons only render when those fields are present.
 */

const projects = [
  {
    title: "Automated Resume Relevance Check System",
    subtitle: "AI-Powered",
    description:
      "NLP-based system that compares resumes with job descriptions and calculates relevance scores using TF-IDF vectorization and Cosine Similarity.",
    tech: ["Python", "Hugging Face", "Streamlit", "NLP", "Transformers"],
    year: "2025",

    // <-- YOUR PROVIDED LINKS
    repo: "https://github.com/Praveenkammala/Automated_Resume_Relevance_Check_System-AI_Powered.git",
    demo: "https://praveenkammala-resume-checker-app-app-streamlit-lr2jdq.streamlit.app/",

    features: [
      "TF-IDF vectorization for text similarity",
      "Cosine Similarity matching algorithm",
      "Hugging Face Transformers integration",
      "User-friendly Streamlit interface"
    ]
  },

  // Add more projects here with same shape { title, subtitle, description, tech, year, repo, demo, features }
];

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience building practical AI applications
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12 * index }}
              className="group bg-card border-2 border-border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Project header */}
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <span className="text-sm text-muted-foreground ml-2">{project.subtitle}</span>
                      )}
                    </div>

                    <p className="text-muted-foreground max-w-xl">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="sm:text-right">
                    <div className="inline-flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                      <Award className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>

               {/* Action Buttons */}
<div className="flex gap-3">
  {project.repo && project.repo.length > 0 ? (
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View code for ${project.title}`}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all"
    >
      <Github className="h-4 w-4" />
      View Code
    </a>
  ) : null}

  {project.demo && project.demo.length > 0 ? (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open live demo for ${project.title}`}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-md hover:opacity-95 transition-all"
    >
      <ExternalLink className="h-4 w-4" />
      Live Demo
    </a>
  ) : null}
</div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decoration (keeps same layout as original) */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Projects;
