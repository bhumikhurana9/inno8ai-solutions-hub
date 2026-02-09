import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Shield, CheckCircle, ArrowRight, Users, Eye, FileText, TrendingUp, DollarSign, Lock, Globe, ChevronRight, Briefcase, Target, BarChart3, ClipboardCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: ClipboardCheck,
    title: "Vendor Proposal Evaluation",
    description: "We review vendor proposals, cost structures, timelines, and technical approaches to help you make informed decisions before project initiation."
  },
  {
    icon: Target,
    title: "Architecture & Solution Validation",
    description: "We evaluate system architecture to ensure scalability, performance, and security standards are properly designed."
  },
  {
    icon: BarChart3,
    title: "Milestone Monitoring & Reporting",
    description: "We track project progress against defined milestones and provide clear, executive-level status reports."
  },
  {
    icon: Eye,
    title: "Development Quality Oversight",
    description: "We monitor development processes, testing procedures, and delivery quality to reduce long-term risks."
  },
  {
    icon: DollarSign,
    title: "Cost & Scope Governance",
    description: "We help prevent unexpected cost escalations by maintaining clear scope governance and change-management processes."
  },
  {
    icon: FileText,
    title: "Documentation & Ownership Assurance",
    description: "We ensure that system documentation, deployment ownership, and long-term maintenance clarity are maintained."
  }
];

const idealFor = [
  { icon: Globe, text: "NGOs implementing data platforms or reporting systems" },
  { icon: Briefcase, text: "Enterprises managing outsourced development projects" },
  { icon: TrendingUp, text: "Startups building custom platforms with external vendors" },
  { icon: Shield, text: "Organizations deploying AI or automation initiatives" },
  { icon: Users, text: "Multi-vendor digital transformation programs" },
  { icon: Lock, text: "CSR and foundation-funded technology initiatives" },
];

const engagementModels = [
  "Project-based oversight",
  "Monthly advisory engagement",
  "Vendor evaluation and onboarding support",
  "Full lifecycle technology project governance"
];

const whyChoose = [
  "Independent vendor-neutral governance",
  "Architecture-driven technical expertise",
  "AI, platform, and enterprise systems experience",
  "Transparent reporting and accountability",
  "NGO and compliance-focused governance support",
  "Global project advisory experience"
];

const TPMaaS = () => {
  return (
    <>
      <Helmet>
        <title>Technology Project Manager as a Service (TPMaaS) | Inno8 AI Solutions</title>
        <meta name="description" content="Protect your technology investments with independent technical oversight. TPMaaS ensures vendor accountability, transparent governance, and secure project delivery for NGOs and enterprises." />
        <meta name="keywords" content="technology project manager, vendor oversight, project governance, TPMaaS, technology consulting, vendor accountability, AI project management, custom dashboard development, data analytics platform, LMS development" />
        <meta property="og:title" content="Technology Project Manager as a Service | Inno8 AI Solutions" />
        <meta property="og:description" content="Independent expert-level technical governance to ensure your technology projects are executed transparently, efficiently, and securely." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://inno8aisolutions.com/services/tpmaas" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Technology Project Manager as a Service (TPMaaS)",
            "description": "Independent technical governance and vendor oversight for technology projects.",
            "provider": {
              "@type": "Organization",
              "name": "Inno8 AI Solutions",
              "url": "https://inno8aisolutions.com"
            },
            "serviceType": "Technology Project Management",
            "areaServed": ["IN", "US", "GB", "CH", "AU", "NZ", "AE"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="absolute top-20 left-10 w-48 md:w-80 h-48 md:h-80 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-10 right-10 w-48 md:w-72 h-48 md:h-72 bg-secondary/10 rounded-full blur-[80px]" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                TPMaaS — New Service
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Technology Project Manager</span>
                <br />
                <span className="gradient-text">as a Service</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Protect Your Technology Investments. Ensure Vendor Accountability.
              </p>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-8">
                Independent, expert-level technical governance to ensure your technology projects are executed transparently, efficiently, and securely.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="/#contact" className="inline-flex items-center gap-2">
                    Start a Project Risk Review
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="glassOutline" size="lg" asChild>
                  <a href="mailto:vipin@inno8aisolutions.com">Contact Our Team</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Organizations Need TPM */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Why Organizations Need <span className="gradient-text">Technical Oversight</span>
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                When technology projects are managed only by vendors, organizations often experience:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Limited transparency in development progress",
                  "Unclear architecture decisions",
                  "Budget overruns and scope expansion",
                  "Poorly documented systems",
                  "Security and scalability risks",
                  "Lack of milestone accountability",
                  "Vendor lock-in situations"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                What <span className="gradient-text">We Do</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our role is to represent your organization's technical interests — not the vendor's.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-border/50 bg-card/80 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Use */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Who Should <span className="gradient-text">Use This Service</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {idealFor.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-5 rounded-xl glass-card hover:border-primary/30 transition-all"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models + Why Choose */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Engagement Models */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/50 bg-card/80">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                      Engagement <span className="gradient-text">Models</span>
                    </h3>
                    <div className="space-y-4">
                      {engagementModels.map((model, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm md:text-base text-muted-foreground">{model}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Why Choose */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                      Why Choose <span className="gradient-text">Inno8 AI Solutions</span>
                    </h3>
                    <div className="space-y-4">
                      {whyChoose.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Reduce Risk. Increase <span className="gradient-text">Project Confidence.</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Technology initiatives represent significant strategic investments. With TPMaaS, organizations gain expert oversight that ensures vendors remain accountable and systems are built correctly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="/#contact" className="inline-flex items-center gap-2">
                    Request a Consultation
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="glassOutline" size="lg" asChild>
                  <a href="mailto:vipin@inno8aisolutions.com">
                    vipin@inno8aisolutions.com
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-8">
                🌐 <a href="https://inno8aisolutions.com" className="text-primary hover:underline">inno8aisolutions.com</a> &nbsp;|&nbsp; 📧 <a href="mailto:vipin@inno8aisolutions.com" className="text-primary hover:underline">vipin@inno8aisolutions.com</a>
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TPMaaS;
