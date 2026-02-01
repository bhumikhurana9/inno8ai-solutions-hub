import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const categories = ["All", "Web Development", "AI Solutions", "Marketing", "Platforms"];

const projects = [
  {
    id: 1,
    title: "SBI Youth for India",
    category: "Web Development",
    description: "Complete website revamp with server optimization, SEO enhancement using AI-driven keyword tools, and performance tracking for high-volume concurrent users.",
    tech: ["WordPress", "AI SEO", "Analytics"],
    client: "State Bank of India",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "BotWrks.AI",
    category: "AI Solutions",
    description: "Full-stack development for Motherson Group with UI/UX design, custom WordPress site, server deployment, and chatbot integration capabilities.",
    tech: ["PHP", "JavaScript", "Figma", "AI Chatbot"],
    client: "Motherson Group",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "HelpDrive Parivar Milan",
    category: "AI Solutions",
    description: "AI-based missing person identification platform using facial recognition technology to reunite families. Real-time face matching with dynamic case tracking.",
    tech: ["Python", "React", "FastAPI", "AI Facial Recognition"],
    client: "HelpDrive Foundation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Anode Governance Lab",
    category: "Web Development",
    description: "Website redesign focusing on accessibility, mobile responsiveness, enhanced CMS flexibility, and analytics integration.",
    tech: ["WordPress", "UI/UX", "Analytics"],
    client: "Anode Governance Lab",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Blended Finance Platform",
    category: "Platforms",
    description: "Custom dashboard solutions for improved data management and insights with real-time data integration.",
    tech: ["Custom Development", "Dashboard", "Analytics"],
    client: "Blended Finance for India",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Vasudha Foundation",
    category: "Web Development",
    description: "Modern web presence with enhanced user experience, responsive design, and seamless navigation.",
    tech: ["WordPress", "Responsive Design", "SEO"],
    client: "Vasudha Foundation",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Villgro Portfolio",
    category: "Platforms",
    description: "Custom web solutions for Villgro, Enroute Villgro, and Climate Villgro with unified branding and portfolio management.",
    tech: ["WordPress", "Multi-site", "Custom CMS"],
    client: "Villgro",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Digital Marketing Suite",
    category: "Marketing",
    description: "Comprehensive SEO and digital marketing solutions with global keyword optimization and Google Analytics integration.",
    tech: ["SEO", "Google Analytics", "Marketing Tools"],
    client: "Multiple Clients",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful projects across various industries and technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/30"
                  : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden group hover-lift"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-primary font-medium mb-2">{project.client}</p>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="glassOutline" size="lg" asChild>
            <a href="#contact" className="group">
              Discuss Your Project
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
