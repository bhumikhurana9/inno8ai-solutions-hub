import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-secondary/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Digital Solutions
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground leading-tight mb-4 sm:mb-6 px-2"
          >
            Transforming Ideas Into
            <br />
            <span className="gradient-text">Intelligent Solutions</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-10 text-balance px-2"
          >
            From custom web development to AI implementation, data analytics to digital marketing — 
            we deliver end-to-end technology solutions that drive business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-10" asChild>
              <a href="#portfolio" className="group">
                View Our Work
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="glassOutline" size="lg" className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-10" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>

          {/* TPMaaS CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4"
          >
            <Button variant="glow" size="default" className="text-xs sm:text-sm" asChild>
              <Link to="/services/tpmaas" className="group inline-flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Technology Project Manager as a Service
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-border/50"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "8+", label: "Years Experience" },
              { value: "30+", label: "Happy Clients" },
              { value: "14+", label: "Services Offered" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display font-bold text-3xl md:text-4xl gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
