import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Database, BarChart3, FileText, Shield, CheckCircle, Building2, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const IndiaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/solutions/ngo" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to NGO Solutions
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 font-medium text-sm mb-6">
              🇮🇳 भारत के लिए समाधान | Solutions for India
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              भारतीय NGOs के लिए <span className="text-orange-400">डिजिटल समाधान</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              CSR अनुपालन, FCRA रिपोर्टिंग, और Digital India पहल के लिए विशेष रूप से डिज़ाइन किए गए प्लेटफॉर्म।
            </p>
            <p className="text-foreground text-lg mt-4">
              Digital solutions specifically designed for CSR compliance, FCRA reporting, and Digital India initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display font-bold text-3xl text-foreground mb-8 text-center">
            मुख्य फोकस क्षेत्र | Key Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "CSR Compliance", titleHi: "CSR अनुपालन", desc: "Companies Act 2013 compliant reporting" },
              { icon: FileText, title: "FCRA Reporting", titleHi: "FCRA रिपोर्टिंग", desc: "Foreign contribution management & reporting" },
              { icon: Building2, title: "12A/80G Support", titleHi: "12A/80G सहायता", desc: "Tax exemption documentation" },
              { icon: Users, title: "Digital India", titleHi: "डिजिटल इंडिया", desc: "Government scheme integration" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-orange-400 text-sm mb-2">{item.titleHi}</p>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions for Indian NGOs */}
      <section className="py-16 bg-gradient-to-b from-card/50 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display font-bold text-3xl text-foreground mb-12 text-center">
            हम क्या बनाते हैं | What We Build
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Database,
                title: "फील्ड डेटा कलेक्शन",
                titleEn: "Field Data Collection",
                features: ["ऑफलाइन मोबाइल ऐप", "GPS-tagged entries", "Multi-language support", "Aadhaar integration"]
              },
              {
                icon: FileText,
                title: "CSR रिपोर्टिंग",
                titleEn: "CSR Reporting",
                features: ["Companies Act compliant", "Automated annual reports", "Impact measurement", "Donor dashboards"]
              },
              {
                icon: BarChart3,
                title: "प्रभाव विश्लेषण",
                titleEn: "Impact Analytics",
                features: ["Real-time dashboards", "District-wise reports", "Beneficiary tracking", "Government format exports"]
              },
              {
                icon: Shield,
                title: "अनुपालन प्रबंधन",
                titleEn: "Compliance Management",
                features: ["FCRA filing support", "12A/80G documentation", "Audit trail", "Regulatory updates"]
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
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">{solution.titleEn}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-orange-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display font-bold text-3xl text-foreground mb-8 text-center">
            भारतीय ग्राहक | Indian Clients We've Served
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Paani Foundation", sector: "Water Conservation", impact: "1,000+ villages" },
              { name: "Rocket Learning", sector: "Education", impact: "1M+ students" },
              { name: "Green Yatra", sector: "Environment", impact: "50+ projects" }
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{client.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{client.sector}</p>
                <p className="text-orange-400 font-medium">{client.impact}</p>
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
            <Heart className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              आइए मिलकर प्रभाव बढ़ाएं
            </h2>
            <p className="text-foreground text-xl mb-2">Let's Strengthen Your Impact Together</p>
            <p className="text-muted-foreground mb-8">
              निःशुल्क डिजिटल रेडीनेस रिव्यू के लिए संपर्क करें | Contact us for a free digital readiness review
            </p>
            <Button variant="hero" size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
              <a href="/#contact">परामर्श के लिए अनुरोध करें | Request Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndiaPage;
