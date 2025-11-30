import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border bg-card relative overflow-hidden py-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-secondary/6 opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          <h3 className="font-display text-2xl font-bold mb-1 neon-text">Kammala Praveen</h3>
          <p className="text-sm text-muted-foreground"> • AI & ML enthusiast</p>
        </div>

        <div className="flex items-center justify-center gap-6 mb-6">
          <a href="https://github.com/Praveenkammala" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/praveenkammala" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:praveenkammala01@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href="tel:+919490152769" aria-label="Phone">
            <Phone size={20} />
          </a>
        </div>
        {/* Copyright */}
        <div className="pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Kammala Praveen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
