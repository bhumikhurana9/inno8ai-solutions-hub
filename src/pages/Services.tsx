import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, ShoppingCart, Heart, Globe, BarChart3, FileText, Bot, Database, LineChart, Settings, Cpu, Megaphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    id: "corporate",
    title: "Corporate Solutions",
    icon: Building2,
    description: "Enterprise-grade technology solutions for large organizations with complex requirements.",
    features: [
      "Custom ERP & CRM Systems",
      "Microsoft 365 Integration",
      "Business Intelligence Dashboards",
      "Workflow Automation",
      "AI-Powered Analytics"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    icon: ShoppingCart,
    description: "Complete e-commerce platforms with AI-powered customer engagement and conversion optimization.",
    features: [
      "Custom Shopify Development",
      "Payment Gateway Integration",
      "Abandoned Cart Recovery",
      "AI Product Recommendations",
      "Multi-Channel Marketing"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "ngo",
    title: "NGO & Non-Profit Solutions",
    icon: Heart,
    description: "Technology solutions designed for impact measurement, donor transparency, and compliance.",
    features: [
      "Impact Measurement Platforms",
      "Donor Management Systems",
      "Compliance Reporting",
      "Field Data Collection",
      "Grant Management"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

const detailedServices = [
  {
    icon: Database,
    title: "Custom Data Collection Platform",
    description: "Replace paper forms and spreadsheets with secure, real-time digital data collection systems.",
    features: [
      "Mobile & web-based data collection",
      "Offline data capture for field teams",
      "Role-based access control",
      "Data validation & audit trails",
      "GPS-tagged data entries",
      "Photo & document uploads"
    ]
  },
  {
    icon: FileText,
    title: "Automated Report Generation",
    description: "Weekly automated reports for investors, clients, and founders with AI-generated insights.",
    features: [
      "Scheduled report generation",
      "Custom report templates",
      "AI-powered insights",
      "Multi-stakeholder distribution",
      "Interactive dashboards",
      "Export to PDF/Excel"
    ]
  },
  {
    icon: LineChart,
    title: "Data Analytics Platform",
    description: "Real-time data analytics with comprehensive visualization and audit capabilities.",
    features: [
      "Real-time dashboards",
      "Pie charts, graphs, heatmaps",
      "KPI tracking",
      "Comparative analytics",
      "Trend analysis",
      "Custom report builders"
    ]
  },
  {
    icon: Settings,
    title: "Compliance & Audit Reports",
    description: "Country-specific compliance reporting for CSR, GDPR, and regulatory requirements.",
    features: [
      "CSR compliance reports",
      "GDPR audit readiness",
      "Financial audit trails",
      "Governance documentation",
      "Impact verification",
      "Regulatory submissions"
    ]
  },
  {
    icon: Bot,
    title: "AI Implementation",
    description: "Integrate AI features like chatbots, analytics, and automation into any platform.",
    features: [
      "Custom AI chatbots",
      "Predictive analytics",
      "Document processing",
      "Image recognition",
      "Natural language processing",
      "Automated workflows"
    ]
  },
  {
    icon: Cpu,
    title: "Automation Scripts",
    description: "Custom automation solutions to streamline workflows and reduce manual tasks.",
    features: [
      "Workflow automation",
      "Data synchronization",
      "Scheduled tasks",
      "API integrations",
      "Email automation",
      "Report scheduling"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              Technology Solutions for <span className="gradient-text">Every Industry</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              From enterprise software to NGO impact platforms, we deliver custom solutions that drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 hover-lift group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4">{category.title}</h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={category.id === "ngo" ? "/solutions/ngo" : `#${category.id}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gradient-to-b from-card/50 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Core Capabilities</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">
              What We <span className="gradient-text">Build</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Global Reach</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">
              Serving <span className="gradient-text">Worldwide</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide localized solutions meeting regional compliance requirements across the globe.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "India", flag: "🇮🇳", focus: "CSR & Digital India" },
              { name: "Gulf/UAE", flag: "🇦🇪", focus: "CSR & Foundations" },
              { name: "USA", flag: "🇺🇸", focus: "Impact Metrics" },
              { name: "UK", flag: "🇬🇧", focus: "GDPR & Audits" },
              { name: "Switzerland", flag: "🇨🇭", focus: "Governance" },
              { name: "Australia", flag: "🇦🇺", focus: "Compliance" },
              { name: "Poland", flag: "🇵🇱", focus: "EU Standards" },
              { name: "New Zealand", flag: "🇳🇿", focus: "Transparency" },
              { name: "Russia", flag: "🇷🇺", focus: "Data Security" },
              { name: "Iran", flag: "🇮🇷", focus: "Local Compliance" },
              { name: "Europe", flag: "🇪🇺", focus: "GDPR Ready" },
              { name: "Global", flag: "🌍", focus: "UN Standards" }
            ].map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card rounded-xl p-4 text-center hover-lift"
              >
                <span className="text-3xl mb-2 block">{country.flag}</span>
                <h4 className="font-medium text-foreground text-sm">{country.name}</h4>
                <p className="text-xs text-muted-foreground">{country.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
            <div className="relative z-10">
              <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Ready to Transform Your Organization?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how our solutions can help you achieve your goals with transparency, efficiency, and impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="/#contact">Request a Consultation</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/solutions/ngo">Explore NGO Solutions</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
