import { motion } from "framer-motion";
import { Award, Users, Target, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "8+ Years Experience",
    description: "Proven expertise in delivering enterprise-level solutions across CRM, web, and AI domains.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Cross-functional team of developers, designers, and strategists working seamlessly together.",
  },
  {
    icon: Target,
    title: "Client-Focused",
    description: "We prioritize understanding your business needs to deliver solutions that drive real results.",
  },
  {
    icon: Zap,
    title: "Innovation-Driven",
    description: "Leveraging cutting-edge AI and technology to keep you ahead of the competition.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              Building the Future with <span className="gradient-text">Intelligent Technology</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Inno8AI Solutions Pvt Ltd is a technology-driven company specializing in web development, 
              AI implementation, data analytics, and digital marketing solutions. With over 8 years of 
              experience, we've helped businesses transform their digital presence and streamline operations.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              From SBI to Motherson Group, from startups to enterprises, our solutions have delivered 
              measurable impact. We combine technical expertise with strategic thinking to create 
              solutions that not only work but excel.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-8">
              {/* Stats Card */}
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card rounded-2xl p-6 text-center">
                  <div className="font-display font-bold text-4xl gradient-text mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="glass-card rounded-2xl p-6 text-center">
                  <div className="font-display font-bold text-4xl gradient-text mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="glass-card rounded-2xl p-6 text-center">
                  <div className="font-display font-bold text-4xl gradient-text mb-2">14+</div>
                  <div className="text-sm text-muted-foreground">Service Categories</div>
                </div>
                <div className="glass-card rounded-2xl p-6 text-center">
                  <div className="font-display font-bold text-4xl gradient-text mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
