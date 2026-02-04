import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Database, BarChart3, FileText, Shield, CheckCircle, TrendingUp, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const USAPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/solutions/ngo" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to NGO Solutions
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-6">
              🇺🇸 Solutions for United States
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Digital Solutions for <span className="text-blue-400">American Non-Profits</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Impact-focused platforms emphasizing measurable outcomes, real-time dashboards, and donor transparency 
              for 501(c)(3) organizations and foundations.
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
              { icon: TrendingUp, title: "Impact Metrics", desc: "Measurable outcomes & KPIs" },
              { icon: BarChart3, title: "Real-Time Dashboards", desc: "Live program monitoring" },
              { icon: FileText, title: "501(c)(3) Compliance", desc: "IRS reporting support" },
              { icon: Users, title: "Donor Management", desc: "CRM & engagement tools" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-gradient-to-b from-card/50 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display font-bold text-3xl text-foreground mb-12 text-center">
            What We Build for US Non-Profits
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Impact Measurement Platforms",
                features: ["Theory of Change mapping", "Outcome tracking", "Logic model integration", "Beneficiary surveys"]
              },
              {
                icon: BarChart3,
                title: "Executive Dashboards",
                features: ["Real-time KPI monitoring", "Board-ready reports", "Trend analysis", "Comparative benchmarks"]
              },
              {
                icon: Database,
                title: "Program Data Management",
                features: ["Multi-program tracking", "Participant management", "Grant deliverables", "Custom data fields"]
              },
              {
                icon: FileText,
                title: "Donor & Grant Reporting",
                features: ["Foundation report templates", "Federal grant compliance", "Impact storytelling", "Automated report generation"]
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
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">{solution.title}</h3>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
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
            <Heart className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Let's Strengthen Your Impact Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a free digital readiness review to identify opportunities for improving your data collection, 
              reporting, and impact measurement capabilities.
            </p>
            <Button variant="hero" size="lg" className="bg-blue-500 hover:bg-blue-600" asChild>
              <a href="/#contact">Request Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default USAPage;
