import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Heart, Database, BarChart3, FileText, Bot, Shield, 
  Users, Globe, CheckCircle, ArrowRight, Lightbulb, 
  ClipboardCheck, Settings, MessageSquare 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const challenges = [
  { icon: ClipboardCheck, text: "Manual data collection from field teams" },
  { icon: FileText, text: "Time-consuming donor & grant reporting" },
  { icon: Shield, text: "Audit and compliance stress" },
  { icon: Settings, text: "Disconnected systems (Excel, WhatsApp, emails)" },
  { icon: BarChart3, text: "Lack of real-time visibility into programs" },
  { icon: Lightbulb, text: "Difficulty measuring and demonstrating impact" }
];

const solutions = [
  {
    icon: Database,
    title: "Custom Data Collection Platforms",
    description: "Replace paper forms and spreadsheets with secure digital systems.",
    features: [
      "Mobile & web-based data collection",
      "Offline data capture for field teams",
      "Role-based access",
      "Validation & audit trails"
    ],
    benefits: ["Accurate field data", "Faster reporting", "Reduced manual errors"]
  },
  {
    icon: BarChart3,
    title: "Program Monitoring & Impact Dashboards",
    description: "Turn raw data into clear insights.",
    features: [
      "Real-time dashboards",
      "KPI & outcome tracking",
      "Location-wise and program-wise reports",
      "Exportable donor reports"
    ],
    benefits: ["Decision-makers see impact clearly and instantly"]
  },
  {
    icon: FileText,
    title: "Donor & Grant Reporting Automation",
    description: "Meet donor expectations without last-minute stress.",
    features: [
      "Automated donor reports",
      "Grant utilization tracking",
      "Compliance-ready documentation",
      "Periodic reporting workflows"
    ],
    benefits: ["Save 20+ hours weekly on reporting"]
  },
  {
    icon: Settings,
    title: "NGO Management & ERM Systems",
    description: "A centralized platform for operations and governance.",
    features: [
      "Program management",
      "Finance & expense tracking",
      "Volunteer & staff records",
      "Asset & inventory tracking"
    ],
    benefits: ["Built as custom ERM systems, not rigid off-the-shelf software"]
  },
  {
    icon: Bot,
    title: "Automation & Workflow Solutions",
    description: "Reduce administrative burden.",
    features: [
      "Approval workflows",
      "Automated notifications",
      "Data synchronization",
      "Report generation"
    ],
    benefits: ["Teams spend more time on impact, less on paperwork"]
  },
  {
    icon: Shield,
    title: "Audit-Ready & Compliance Support",
    description: "Designed for transparency and accountability.",
    features: [
      "Internal audits",
      "Donor audits",
      "CSR & foundation reviews",
      "Governance documentation"
    ],
    benefits: ["Systems are secure, traceable, and review-ready"]
  }
];

const whyChooseUs = [
  "NGO-friendly engagement model",
  "Phase-wise implementation (no big upfront risk)",
  "Secure, scalable platforms",
  "Clear documentation & training",
  "Long-term support mindset",
  "Experience with compliance-driven environments"
];

const engagementSteps = [
  "Understand your mission & challenges",
  "Review current data & reporting processes",
  "Identify quick-impact improvements",
  "Start with a small pilot",
  "Scale gradually with full transparency"
];

const regions = [
  { flag: "🇮🇳", name: "India", path: "/solutions/ngo/india" },
  { flag: "🇦🇪", name: "Gulf / UAE", path: "/solutions/ngo/gulf" },
  { flag: "🇺🇸", name: "United States", path: "/solutions/ngo/usa" },
  { flag: "🇬🇧", name: "United Kingdom", path: "/solutions/ngo/uk" },
  { flag: "🇨🇭", name: "Switzerland", path: "/solutions/ngo/switzerland" },
  { flag: "🇦🇺", name: "Australia", path: "/solutions/ngo/australia" },
  { flag: "🇳🇿", name: "New Zealand", path: "/solutions/ngo/new-zealand" },
  { flag: "🇵🇱", name: "Poland", path: "/solutions/ngo/poland" },
  { flag: "🇷🇺", name: "Russia", path: "/solutions/ngo/russia" },
  { flag: "🇮🇷", name: "Iran", path: "/solutions/ngo/iran" }
];

const NGOSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 font-medium text-sm mb-6">
              <Heart className="w-4 h-4" /> Solutions for NGOs & Non-Profits
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              Technology That Strengthens <span className="text-green-400">Impact, Transparency & Trust</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Non-profit organizations today are expected to deliver measurable impact, maintain complete transparency, 
              and comply with strict donor and audit requirements—often with limited resources and manual systems.
            </p>
            <p className="text-foreground text-lg mt-4 font-medium">
              At Inno8 AI Solutions, we partner with NGOs to simplify operations, improve reporting, and strengthen governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-green-400" />
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">Who We Work With</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "NGOs & Trusts",
                "Foundations & CSR-funded organizations",
                "Education, Health, Climate & Social Impact NGOs",
                "National & International NGOs"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 text-center">
              Whether you operate at a community level or across multiple regions, our solutions adapt to your structure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="py-16 bg-gradient-to-b from-card/50 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Key Challenges NGOs Face <span className="text-green-400">(We Solve These)</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 glass-card rounded-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <challenge.icon className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-foreground">{challenge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 font-medium text-sm uppercase tracking-wider">Our NGO-Focused Solutions</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3">
              What We Build for Non-Profits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 hover-lift"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">What we build:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-green-400">
                          <CheckCircle className="w-3 h-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-16 bg-gradient-to-b from-card/50 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-emerald-500/5" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Bot className="w-8 h-8 text-green-400" />
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">AI-Enabled Insights (Where Useful)</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                We apply AI practically, not as hype. AI is used only where it adds real value.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Data pattern analysis",
                  "Outcome prediction",
                  "Program optimization",
                  "Intelligent reporting summaries"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border">
                    <Lightbulb className="w-5 h-5 text-green-400" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us & Engagement */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                Why NGOs Choose Inno8 AI Solutions
              </h2>
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
              <p className="text-green-400 font-medium mt-6 text-lg">
                We don't just build systems — we build confidence.
              </p>
            </motion.div>

            {/* Engagement Approach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                Our Engagement Approach
              </h2>
              <div className="space-y-4">
                {engagementSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 font-bold">
                      {index + 1}
                    </div>
                    <span className="text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Solutions */}
      <section className="py-16 bg-gradient-to-b from-card/50 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Serving NGOs Globally
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our systems are designed to meet international compliance expectations. Click your region for localized solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={region.path}
                  className="glass-card rounded-xl p-6 text-center hover-lift block group"
                >
                  <span className="text-4xl mb-3 block">{region.flag}</span>
                  <h3 className="font-medium text-foreground group-hover:text-green-400 transition-colors">{region.name}</h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground mx-auto mt-2 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Review CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10" />
            <div className="relative z-10">
              <MessageSquare className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Free Digital Readiness Review for NGOs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                We offer a no-obligation digital readiness review to help NGOs understand:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                {[
                  "Gaps in data collection",
                  "Reporting inefficiencies",
                  "Automation opportunities",
                  "Compliance risks"
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-xl bg-background/50 border border-green-500/20">
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-green-400 font-medium mb-8">
                👉 This helps you decide what to digitize and what not to.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="bg-green-500 hover:bg-green-600" asChild>
                  <a href="/#contact">Request a Consultation</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/#contact">Request a Free Digital Review</a>
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

export default NGOSolutions;
