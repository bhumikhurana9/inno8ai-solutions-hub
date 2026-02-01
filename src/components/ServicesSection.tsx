import { motion } from "framer-motion";
import { 
  Code, Database, LineChart, Bot, Megaphone, 
  BarChart3, Globe, MessageSquare, Settings, FileText, Search, Cpu
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack development using MERN, Laravel, and Python frameworks for scalable applications.",
    tags: ["React", "Node.js", "Laravel", "Python"],
  },
  {
    icon: Database,
    title: "Data Collection Platform",
    description: "Custom platforms for automated data gathering, processing, and storage solutions.",
    tags: ["ETL", "APIs", "Automation"],
  },
  {
    icon: LineChart,
    title: "Data Analysis Platform",
    description: "Advanced analytics dashboards with real-time insights and visualization tools.",
    tags: ["Analytics", "Visualization", "BI"],
  },
  {
    icon: Settings,
    title: "Microsoft Tool Integration",
    description: "Unified platforms combining Microsoft tools for enhanced productivity.",
    tags: ["SharePoint", "Power BI", "Azure"],
  },
  {
    icon: Cpu,
    title: "Automation Scripts",
    description: "Custom automation solutions to streamline workflows and reduce manual tasks.",
    tags: ["Python", "RPA", "Workflows"],
  },
  {
    icon: Bot,
    title: "AI Implementation",
    description: "Integrate AI features like facial recognition, chatbots, and ML models into any tool.",
    tags: ["ML", "NLP", "Computer Vision"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, paid media, and strategic marketing campaigns for maximum visibility.",
    tags: ["SEO", "PPC", "Social Media"],
  },
  {
    icon: BarChart3,
    title: "Google Analytics",
    description: "Setup, configuration, and insights extraction from Google Analytics.",
    tags: ["GA4", "Tracking", "Reports"],
  },
  {
    icon: Search,
    title: "Global Keywords",
    description: "Keyword research and optimization aligned with Google indexing standards.",
    tags: ["SEO", "Research", "Indexing"],
  },
  {
    icon: Globe,
    title: "AI Platform Registration",
    description: "Register your business on ChatGPT, Google Gemini, and other AI platforms.",
    tags: ["ChatGPT", "Gemini", "Visibility"],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Marketing Bot",
    description: "Custom WhatsApp automation bots for marketing and customer engagement.",
    tags: ["WhatsApp API", "Chatbot", "Marketing"],
  },
  {
    icon: FileText,
    title: "ERM & Audit Reports",
    description: "Enterprise Resource Management software and comprehensive audit reporting.",
    tags: ["ERM", "Compliance", "Reports"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions tailored to transform your business and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card rounded-2xl p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
