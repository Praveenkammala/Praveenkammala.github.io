import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9490152769",
    href: "tel:+919490152769",
    color: "from-primary to-primary-dark"
  },
  {
    icon: Mail,
    label: "Email",
    value: "praveenkammala01@gmail.com",
    href: "mailto:praveenkammala01@gmail.com",
    color: "from-secondary to-secondary-light"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Madanapalli, Andhra Pradesh",
    href: "#",
    color: "from-accent to-purple-600"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Praveenkammala",
    color: "hover:bg-primary hover:text-primary-foreground"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/praveen-kammala",
    color: "hover:bg-secondary hover:text-secondary-foreground"
  }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Send className="h-5 w-5" />
            <span className="text-sm font-semibold">Get In Touch</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or AI/ML projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-card border-2 border-border rounded-3xl p-6 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-md`}
                >
                  <info.icon className="h-7 w-7 text-white" />
                </motion.div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {info.label}
                </h3>
                <p className="text-sm text-muted-foreground break-all">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="font-display text-2xl font-bold mb-6">
              Find Me Online
            </h3>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group w-16 h-16 rounded-2xl bg-card border-2 border-border flex flex-col items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg ${social.color}`}
                >
                  <social.icon className="h-7 w-7 mb-1" />
                  <span className="text-xs font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 border-2 border-primary/20 rounded-3xl p-8"
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss AI/ML opportunities, or just want to connect, I'd love to hear from you!
            </p>
            <Button
  size="lg"
  className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:opacity-90 transition-all duration-300"
  onClick={() => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=praveenkammala01@gmail.com&su=Collaboration%20Request",
      "_blank"
    );
  }}
>
  <Mail className="mr-2 h-5 w-5" />
  Send an Email
</Button>

          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Contact;
