import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Database, BarChart3, FileText, Shield, CheckCircle, Eye, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NewZealandPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/solutions/ngo" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to NGO Solutions
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 font-medium text-sm mb-6">
              🇳🇿 Solutions for Aotearoa New Zealand
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Digital Solutions for <span className="text-sky-400">Kiwi Charities</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Transparency-focused platforms with Charities Services compliance, tikanga-informed design, 
              and strong governance for registered charities and incorporated societies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Focus */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display font-bold text-3xl text-foreground mb-8 text-center">Key Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Transparency", desc: "Clear, open reporting" },
              { icon: Shield, title: "Charities Services", desc: "NZ compliance standards" },
              { icon: Users, title: "Community Focus", desc: "Stakeholder engagement" },
              { icon: FileText, title: "Annual Returns", desc: "Simplified reporting" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-sky-400" />
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
            What We Build for NZ Charities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Charities Services Compliance",
                features: ["Annual return preparation", "Officer details management", "Rules & constitution tracking", "Public register updates"]
              },
              {
                icon: Eye,
                title: "Public Transparency",
                features: ["Open data dashboards", "Community impact reports", "Financial transparency", "Stakeholder communication"]
              },
              {
                icon: BarChart3,
                title: "Impact Measurement",
                features: ["Outcome tracking", "Community benefit metrics", "Programme evaluation", "Funder reporting"]
              },
              {
                icon: Database,
                title: "Data Collection",
                features: ["Community engagement tools", "Beneficiary management", "Volunteer coordination", "Event tracking"]
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
                  <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-sky-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">{solution.title}</h3>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-sky-400" />
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
            <Heart className="w-16 h-16 text-sky-400 mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Let's Strengthen Your Impact Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kia ora! Schedule a free digital readiness review to enhance your transparency, compliance, and community impact.
            </p>
            <Button variant="hero" size="lg" className="bg-sky-500 hover:bg-sky-600" asChild>
              <a href="/#contact">Request Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewZealandPage;
