import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Database, BarChart3, FileText, Shield, CheckCircle, Lock, ClipboardCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const UKPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/solutions/ngo" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to NGO Solutions
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 font-medium text-sm mb-6">
              🇬🇧 Solutions for United Kingdom
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Digital Solutions for <span className="text-red-400">UK Charities</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              GDPR-compliant platforms with audit readiness, Charity Commission reporting, and transparent governance 
              for registered charities and CICs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display font-bold text-3xl text-foreground mb-8 text-center">
            Key Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lock, title: "GDPR Compliance", desc: "Data protection by design" },
              { icon: ClipboardCheck, title: "Audit Readiness", desc: "Full audit trails & documentation" },
              { icon: FileText, title: "Charity Commission", desc: "Annual return support" },
              { icon: Shield, title: "Governance", desc: "Trustee & board management" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Feature */}
      <section className="py-16 bg-gradient-to-b from-card/50 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <Lock className="w-12 h-12 text-red-400" />
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground">GDPR-Ready By Design</h2>
                <p className="text-muted-foreground">All our platforms are built with data protection at the core</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Data Minimisation", features: ["Collect only necessary data", "Purpose limitation", "Storage limitation"] },
                { title: "Security Measures", features: ["Encryption at rest & transit", "Access controls", "Regular security audits"] },
                { title: "Subject Rights", features: ["Data access requests", "Right to erasure", "Data portability"] }
              ].map((section, index) => (
                <div key={index} className="p-6 rounded-xl bg-background/50 border border-red-500/10">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <CheckCircle className="w-4 h-4 text-red-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display font-bold text-3xl text-foreground mb-12 text-center">
            What We Build for UK Charities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Database,
                title: "Beneficiary Management",
                features: ["GDPR-compliant data collection", "Consent management", "Case management", "Outcome tracking"]
              },
              {
                icon: ClipboardCheck,
                title: "Audit-Ready Systems",
                features: ["Complete audit trails", "Document version control", "Approval workflows", "Compliance dashboards"]
              },
              {
                icon: BarChart3,
                title: "Impact Reporting",
                features: ["Charity Commission format", "Trustee annual reports", "Funder dashboards", "Outcome frameworks"]
              },
              {
                icon: Shield,
                title: "Governance Platforms",
                features: ["Board management tools", "Policy document library", "Meeting minutes", "Decision tracking"]
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-red-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">{solution.title}</h3>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-red-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center"
          >
            <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Let's Strengthen Your Impact Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a free digital readiness review to identify opportunities for GDPR compliance, 
              audit preparation, and governance improvements.
            </p>
            <Button variant="hero" size="lg" className="bg-red-500 hover:bg-red-600" asChild>
              <a href="/#contact">Request Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UKPage;
