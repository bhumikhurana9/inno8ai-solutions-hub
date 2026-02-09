import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, ArrowRight, CheckCircle, Globe } from "lucide-react";
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
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[101] max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative rounded-2xl border border-primary/30 overflow-hidden">
              {/* Gradient border glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-30 blur-sm" />
              
              <div className="relative bg-card rounded-2xl overflow-hidden">
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

                {/* Close button */}
                <button
                  onClick={handleDismiss}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="p-6 sm:p-8">
                  {/* Icon & Badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                      <Shield className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                        New Service
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 leading-tight">
                    Technology Project Manager
                    <span className="gradient-text"> as a Service</span>
                  </h3>

                  <p className="text-sm text-muted-foreground mb-5">
                    Protect your technology investments with independent vendor oversight and project governance — globally.
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2.5 mb-6">
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
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-2.5"
                      >
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Global badge */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 mb-6">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      Available across <strong className="text-foreground">India, USA, UK, Gulf, Europe, Australia & more</strong>
                    </span>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="hero" size="lg" className="flex-1" asChild onClick={handleDismiss}>
                      <Link to="/services/tpmaas" className="inline-flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="glassOutline" size="lg" className="flex-1" onClick={handleDismiss}>
                      <a href="/#contact">Get a Free Review</a>
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
