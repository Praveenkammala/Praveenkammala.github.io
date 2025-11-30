import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const cvUrl = "/praveen_cv.pdf"; // ensure the file exists at public/praveen_cv.pdf

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-bold mb-4"
          >
            Hi, I&apos;m <span className="text-primary">Kammala Praveen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8"
          >
         Aspiring AI/ML engineer with hands-on experience in Python and simple AI applications.
Fast learner with a strong ability to adapt and contribute to innovative tech projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <Button
              size="lg"
              onClick={() => {
                // Open the CV in a new tab; if you prefer automatic download, use an <a download> element instead.
                window.open(cvUrl, "_blank", "noopener,noreferrer");
              }}
              className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl transition-all duration-300 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>

           <Button
  size="lg"
  onClick={() =>
    (window.location.href =
      "mailto:praveenkammala01@gmail.com?subject=Website%20contact")
  }
  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-all duration-300"
>
  <Mail className="mr-2 h-5 w-5" />
  Contact Me
</Button>


          </motion.div>

          {/* Social Links (example) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            <a href="https://github.com/Praveenkammala" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/praveen-kammala" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="tel:+919490152769" aria-label="Phone">
              <Phone className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
