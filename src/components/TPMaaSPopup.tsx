import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, ArrowRight, CheckCircle, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const TPMaaSPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("tpmaas-popup-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => setIsVisible(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("tpmaas-popup-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9998]"
          />

          {/* Centered Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed z-[9999] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-md"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              {/* Animated gradient border */}
              <div className="absolute -inset-[2px] bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-60 animate-pulse-glow" />

              <div className="relative bg-card rounded-2xl overflow-hidden">
                {/* Top accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />

                {/* Close button */}
                <button
                  onClick={handleDismiss}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-muted/80 hover:bg-destructive/20 hover:text-destructive flex items-center justify-center text-muted-foreground transition-all z-10"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="p-5 sm:p-6">
                  {/* Icon & Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30"
                    >
                      <Shield className="w-5 h-5 text-primary-foreground" />
                    </motion.div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      New Service
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5 leading-tight">
                    Technology Project Manager
                    <span className="gradient-text"> as a Service</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                    Protect your technology investments with independent vendor oversight and project governance — globally.
                  </p>

                  {/* Benefits - compact */}
                  <div className="grid grid-cols-1 gap-1.5 mb-4">
                    {[
                      "Independent vendor-neutral governance",
                      "Architecture & security validation",
                      "Cost & scope protection",
                      "Serving NGOs & enterprises worldwide",
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.08 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Global badge */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/40 border border-border/50 mb-4">
                    <Globe className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-[11px] text-muted-foreground">
                      Available across <strong className="text-foreground">India, USA, UK, Gulf, Europe & more</strong>
                    </span>
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-2.5">
                    <Button variant="hero" size="sm" className="flex-1 text-xs" asChild onClick={handleDismiss}>
                      <Link to="/services/tpmaas" className="inline-flex items-center gap-1.5">
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                    <Button variant="glassOutline" size="sm" className="flex-1 text-xs" onClick={handleDismiss}>
                      <a href="/#contact">Free Review</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TPMaaSPopup;
