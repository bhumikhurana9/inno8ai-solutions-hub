import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Database, BarChart3, FileText, Shield, CheckCircle, Scale, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SwitzerlandPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/solutions/ngo" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to NGO Solutions
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 text-red-500 font-medium text-sm mb-6">
              🇨🇭 Lösungen für die Schweiz | Solutions pour la Suisse
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Digitale Lösungen für <span className="text-red-500">Schweizer NGOs</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-4">
              Governance-fokussierte Plattformen mit höchster Transparenz und Compliance für Stiftungen und Vereine.
            </p>
            <p className="text-foreground text-lg">
              Governance-focused platforms with maximum transparency and compliance for Swiss foundations and associations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display font-bold text-3xl text-foreground mb-8 text-center">
            Schwerpunktbereiche | Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Scale, title: "Governance", titleDe: "Führungsstruktur", desc: "Board & foundation management" },
              { icon: Eye, title: "Transparency", titleDe: "Transparenz", desc: "Complete financial visibility" },
              { icon: Shield, title: "Compliance", titleDe: "Konformität", desc: "ZEWO & regulatory standards" },
              { icon: FileText, title: "Reporting", titleDe: "Berichterstattung", desc: "Multi-language documentation" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-red-500 text-sm mb-2">{item.titleDe}</p>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Swiss Compliance */}
      <section className="py-16 bg-gradient-to-b from-card/50 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-red-500" />
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground">Swiss Compliance Standards</h2>
                <p className="text-muted-foreground">Built for Switzerland's rigorous non-profit requirements</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "ZEWO Certification", features: ["Financial transparency", "Administrative efficiency", "Impact documentation"] },
                { title: "Foundation Oversight", features: ["ESA/BVG compliance", "Cantonal requirements", "Audit preparation"] },
                { title: "Multi-Language", features: ["German interface", "French interface", "Italian support"] }
              ].map((section, index) => (
                <div key={index} className="p-6 rounded-xl bg-background/50 border border-red-600/10">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <CheckCircle className="w-4 h-4 text-red-500" />
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
            Was wir bauen | What We Build
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Scale,
                title: "Stiftungsmanagement",
                titleEn: "Foundation Management",
                features: ["Board portal", "Decision documentation", "Asset oversight", "Beneficiary tracking"]
              },
              {
                icon: Eye,
                title: "Transparenz-Dashboards",
                titleEn: "Transparency Dashboards",
                features: ["Financial visibility", "Project tracking", "Donor reporting", "Public accountability"]
              },
              {
                icon: Database,
                title: "Datenerfassung",
                titleEn: "Data Collection",
                features: ["Multi-language forms", "Offline capability", "Secure storage", "GDPR compliance"]
              },
              {
                icon: FileText,
                title: "Berichterstellung",
                titleEn: "Report Generation",
                features: ["Annual reports", "ZEWO documentation", "Impact metrics", "Cantonal filings"]
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
                  <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">{solution.titleEn}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-red-500" />
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
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Stärken wir gemeinsam Ihre Wirkung
            </h2>
            <p className="text-foreground text-xl mb-2">Let's Strengthen Your Impact Together</p>
            <p className="text-muted-foreground mb-8">
              Kontaktieren Sie uns für eine kostenlose digitale Bereitschaftsprüfung
            </p>
            <Button variant="hero" size="lg" className="bg-red-600 hover:bg-red-700" asChild>
              <a href="/#contact">Beratung anfordern | Request Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SwitzerlandPage;
