import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Database, BarChart3, FileText, Shield, CheckCircle, Building2, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const GulfPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/solutions/ngo" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to NGO Solutions
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 font-medium text-sm mb-6">
              🇦🇪 حلول للخليج | Solutions for Gulf & UAE
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              حلول رقمية للمنظمات <span className="text-amber-400">غير الربحية الخليجية</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-4">
              منصات متخصصة للامتثال للمسؤولية الاجتماعية للشركات، وإدارة المؤسسات، وإعداد التقارير التنظيمية.
            </p>
            <p className="text-foreground text-lg">
              Specialized platforms for CSR compliance, foundation management, and regulatory reporting across GCC nations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display font-bold text-3xl text-foreground mb-8 text-center">
            مجالات التركيز الرئيسية | Key Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "CSR Foundations", titleAr: "مؤسسات المسؤولية الاجتماعية", desc: "Corporate social responsibility management" },
              { icon: FileText, title: "Compliance Reporting", titleAr: "تقارير الامتثال", desc: "Regulatory documentation for GCC" },
              { icon: Shield, title: "Transparency", titleAr: "الشفافية", desc: "Clear donor & stakeholder reporting" },
              { icon: BarChart3, title: "Impact Metrics", titleAr: "مقاييس التأثير", desc: "Measurable social impact tracking" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-amber-400 text-sm mb-2">{item.titleAr}</p>
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
            ما نبنيه | What We Build
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Database,
                title: "جمع بيانات المشاريع",
                titleEn: "Project Data Collection",
                features: ["Mobile-first Arabic interface", "GPS-tagged field data", "Multimedia uploads", "Real-time sync"]
              },
              {
                icon: FileText,
                title: "تقارير المسؤولية الاجتماعية",
                titleEn: "CSR Reporting",
                features: ["GCC regulatory compliance", "Foundation board reports", "Donor transparency", "Annual impact reports"]
              },
              {
                icon: BarChart3,
                title: "لوحات معلومات التأثير",
                titleEn: "Impact Dashboards",
                features: ["Bilingual (Arabic/English)", "Real-time KPIs", "Visual analytics", "Exportable reports"]
              },
              {
                icon: Shield,
                title: "إدارة الحوكمة",
                titleEn: "Governance Management",
                features: ["Board meeting tools", "Decision tracking", "Audit trail", "Document management"]
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
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">{solution.titleEn}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-amber-400" />
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
            <Heart className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              دعونا نعزز تأثيركم معاً
            </h2>
            <p className="text-foreground text-xl mb-2">Let's Strengthen Your Impact Together</p>
            <p className="text-muted-foreground mb-8">
              تواصل معنا للحصول على مراجعة مجانية للجاهزية الرقمية
            </p>
            <Button variant="hero" size="lg" className="bg-amber-500 hover:bg-amber-600" asChild>
              <a href="/#contact">طلب استشارة | Request Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GulfPage;
