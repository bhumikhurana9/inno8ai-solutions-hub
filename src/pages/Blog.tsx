import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, Search, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { blogPosts, getAllCategories, getFeaturedPosts } from "@/data/blogPosts";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Technology Insights & Best Practices | Inno8 AI Solutions Blog</title>
        <meta name="description" content="Expert insights on technology governance, AI implementation, digital transformation, and vendor management for NGOs and businesses. Protect your technology investments with proven strategies." />
        <meta name="keywords" content="technology governance, AI implementation, digital transformation, NGO technology, vendor management, technology scams, custom platforms" />
        <meta property="og:title" content="Technology Insights & Best Practices | Inno8 AI Solutions Blog" />
        <meta property="og:description" content="Expert insights on technology governance, AI implementation, and digital transformation for NGOs and businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inno8aisolutions.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://inno8aisolutions.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Inno8 AI Solutions Blog",
            "description": "Expert insights on technology governance, AI implementation, and digital transformation",
            "url": "https://inno8aisolutions.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Inno8 AI Solutions",
              "url": "https://inno8aisolutions.com"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.publishedDate,
              "author": {
                "@type": "Person",
                "name": post.author
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Tag className="w-4 h-4" />
                Technology Insights & Best Practices
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Protect Your </span>
                <span className="gradient-text">Technology Investments</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Expert guidance on technology governance, vendor selection, AI implementation, 
                and digital transformation — written for decision-makers who want to avoid costly mistakes.
              </p>

              {/* Search & Filter */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 bg-card border-border"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant={selectedCategory === null ? "hero" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Topics
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "hero" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {!selectedCategory && !searchQuery && featuredPosts.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  Featured Articles
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link to={`/blog/${post.slug}`}>
                        <Card className="h-full group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden">
                          <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                {post.category}
                              </span>
                              <span className="text-xs text-muted-foreground">{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                {formatDate(post.publishedDate)}
                              </div>
                              <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read More <ArrowRight className="w-4 h-4" />
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                {selectedCategory ? `${selectedCategory} Articles` : searchQuery ? 'Search Results' : 'All Articles'}
                <span className="text-muted-foreground font-normal text-lg">({filteredPosts.length})</span>
              </h2>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg mb-4">No articles found matching your criteria.</p>
                  <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory(null); }}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link to={`/blog/${post.slug}`}>
                        <Card className="h-full group border-border/50 bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                          <CardContent className="p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                {post.category}
                              </span>
                              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </span>
                              {post.featured && (
                                <span className="px-2 py-0.5 rounded bg-secondary/20 text-secondary text-xs font-medium">
                                  Featured
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-border">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs font-bold">
                                  {post.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-foreground">{post.author}</p>
                                  <p className="text-xs text-muted-foreground">{formatDate(post.publishedDate)}</p>
                                </div>
                              </div>
                              <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read <ArrowRight className="w-4 h-4" />
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Stay Informed, Stay Protected
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                    Get expert technology governance insights delivered to your inbox. 
                    No spam, just actionable advice for making smarter technology decisions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" asChild>
                      <a href="/#contact">Subscribe to Updates</a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="mailto:vipin@inno8aisolutions.com">Contact Our Team</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
