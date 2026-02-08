import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRecentPosts } from "@/data/blogPosts";

const BlogSection = () => {
  const recentPosts = getRecentPosts(3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getLanguageFlag = (lang?: string) => {
    const flags: Record<string, string> = {
      hi: "🇮🇳",
      ar: "🇸🇦",
      de: "🇨🇭",
      ru: "🇷🇺",
      pl: "🇵🇱",
      fa: "🇮🇷"
    };
    return lang ? flags[lang] || null : null;
  };

  return (
    <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden bg-muted/30" id="insights">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-40 -left-20 w-48 md:w-80 h-48 md:h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-20 w-64 md:w-96 h-64 md:h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
            Technology Insights
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-foreground">Expert </span>
            <span className="gradient-text">Knowledge Hub</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Stay informed with our latest insights on technology governance, vendor management, 
            AI implementation, and digital transformation best practices.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-16 mb-10 md:mb-16"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1">15+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Expert Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1">10+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Countries Covered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1">5</div>
            <div className="text-xs md:text-sm text-muted-foreground">Languages</div>
          </div>
        </motion.div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`}>
                <Card className="h-full group border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
                  {/* Hero Image */}
                  {post.heroImage && (
                    <div className="relative h-32 md:h-40 overflow-hidden">
                      <img 
                        src={post.heroImage} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      {post.language && getLanguageFlag(post.language) && (
                        <span className="absolute top-2 right-2 text-lg md:text-xl">
                          {getLanguageFlag(post.language)}
                        </span>
                      )}
                    </div>
                  )}
                  {!post.heroImage && (
                    <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] group-hover:animate-gradient" />
                  )}
                  
                  <CardContent className="p-4 md:p-6">
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <span className="px-2 md:px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm md:text-base lg:text-lg font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-1.5 md:px-2 py-0.5 rounded bg-muted text-muted-foreground text-xs">
                          #{tag}
                        </span>
                      ))}
                      {post.region && (
                        <span className="px-1.5 md:px-2 py-0.5 rounded bg-secondary/10 text-secondary text-xs flex items-center gap-0.5">
                          <Globe className="w-2.5 h-2.5" />
                          {post.region}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-border">
                      <div className="flex items-center gap-1 md:gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.publishedDate)}
                      </div>
                      <span className="text-primary text-xs md:text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" className="text-sm md:text-base" asChild>
            <Link to="/blog" className="inline-flex items-center gap-2">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
              Explore All Insights
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Topics Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 md:mt-16 pt-8 md:pt-12 border-t border-border"
        >
          <h3 className="text-center text-xs md:text-sm font-medium text-muted-foreground mb-4 md:mb-6">
            EXPLORE BY TOPIC
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {['Technology Governance', 'Vendor Management', 'AI & Technology', 'Digital Transformation', 'Regional Solutions'].map((topic) => (
              <Link
                key={topic}
                to="/blog"
                className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-primary/5 text-xs md:text-sm text-muted-foreground hover:text-primary transition-all duration-300"
              >
                {topic}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
