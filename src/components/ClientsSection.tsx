import { motion } from "framer-motion";

const clients = [
  "SBI", "IMHA", "Motherson Group", "Anode Governance Lab", "Paani Foundation",
  "Platform Commons", "Rocket Learning", "Urban Mobility Hub", "HelpDrive Foundation",
  "Virtuebizsetup", "Tech4dev", "Trrain", "Villgro", "Railway Academy",
  "Gulf Recliners", "IM Punjab", "Litmus Ink", "Berkeley Bridges", "Merlotvc",
  "SKG Family Office", "Adira Limited", "Spine Infratech", "Vasudha Foundation",
  "Blended Finance", "GXD Hub", "Aviconn", "Study Square"
];

const ClientsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Trusted By</span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mt-2">
            Our <span className="gradient-text">Clients</span>
          </h2>
        </motion.div>

        {/* Scrolling Clients */}
        <div className="relative">
          <div className="flex gap-8 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 glass-card px-6 py-3 rounded-lg"
              >
                <span className="text-muted-foreground font-medium whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
