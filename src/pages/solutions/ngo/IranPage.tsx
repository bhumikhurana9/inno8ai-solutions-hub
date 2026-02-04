import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Database, BarChart3, FileText, Shield, CheckCircle, Lock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const IranPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-600/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/solutions/ngo" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to NGO Solutions
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 text-green-400 font-medium text-sm mb-6">
              🇮🇷 راه‌حل‌های ایران | Solutions for Iran
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              راه‌حل‌های دیجیتال برای <span className="text-green-400">سازمان‌های مردم‌نهاد ایرانی</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-4 text-right" dir="rtl">
              پلتفرم‌های امن با رعایت قوانین محلی و زیرساخت‌های داده‌ای امن برای موسسات خیریه و سازمان‌های غیردولتی.
            </p>
            <p className="text-foreground text-lg">
              Secure platforms with local compliance and secure data infrastructure for charities and NGOs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Focus */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display font-bold text-3xl text-foreground mb-8 text-center">
            حوزه‌های کلیدی | Key Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lock, title: "Local Compliance", titleFa: "انطباق محلی", desc: "Iranian regulatory standards" },
              { icon: Shield, title: "Data Security", titleFa: "امنیت داده", desc: "Secure local infrastructure" },
              { icon: FileText, title: "Reporting", titleFa: "گزارش‌دهی", desc: "Government submissions" },
              { icon: Users, title: "Community", titleFa: "جامعه", desc: "Beneficiary engagement" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-green-600/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-green-400 text-sm mb-2">{item.titleFa}</p>
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
            آنچه می‌سازیم | What We Build
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Lock,
                title: "پلتفرم امنیت داده",
                titleEn: "Data Security Platform",
                features: ["Local data storage", "Persian interface", "Secure access controls", "Audit logging"]
              },
              {
                icon: FileText,
                title: "سیستم گزارش‌دهی",
                titleEn: "Reporting System",
                features: ["Government format reports", "Financial statements", "Activity documentation", "Compliance tracking"]
              },
              {
                icon: BarChart3,
                title: "داشبورد تحلیلی",
                titleEn: "Analytics Dashboard",
                features: ["Impact measurement", "Beneficiary tracking", "Resource management", "Performance metrics"]
              },
              {
                icon: Database,
                title: "جمع‌آوری داده",
                titleEn: "Data Collection",
                features: ["Persian/Farsi interface", "Offline capability", "Field data capture", "Multi-region support"]
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
                  <div className="w-14 h-14 rounded-xl bg-green-600/10 flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">{solution.titleEn}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-400" />
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
            <Heart className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              بیایید با هم تأثیرتان را تقویت کنیم
            </h2>
            <p className="text-foreground text-xl mb-2">Let's Strengthen Your Impact Together</p>
            <p className="text-muted-foreground mb-8">
              برای بررسی رایگان آمادگی دیجیتال با ما تماس بگیرید
            </p>
            <Button variant="hero" size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <a href="/#contact">درخواست مشاوره | Request Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IranPage;
