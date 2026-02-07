import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Linkedin, Twitter, Facebook, Mail, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPostBySlug, getRecentPosts, blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="hero">Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const shareUrl = `https://inno8aisolutions.com/blog/${post.slug}`;
  const shareText = encodeURIComponent(post.title);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Convert markdown-like content to JSX
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let inList = false;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('## ')) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="space-y-3 my-6">
              {listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatText(item) }} />
                </li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 pb-3 border-b border-border">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="space-y-3 my-6">
              {listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatText(item) }} />
                </li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <h3 key={index} className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ')) {
        inList = true;
        listItems.push(trimmedLine.replace('- ', ''));
      } else if (trimmedLine.startsWith('> ')) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="space-y-3 my-6">
              {listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatText(item) }} />
                </li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <blockquote key={index} className="my-8 pl-6 border-l-4 border-primary bg-primary/5 py-4 pr-6 rounded-r-lg">
            <p className="text-lg italic text-foreground font-medium" dangerouslySetInnerHTML={{ __html: formatText(trimmedLine.replace('> ', '')) }} />
          </blockquote>
        );
      } else if (trimmedLine === '---') {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="space-y-3 my-6">
              {listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatText(item) }} />
                </li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(<hr key={index} className="my-8 border-border" />);
      } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="space-y-3 my-6">
              {listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatText(item) }} />
                </li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <p key={index} className="text-lg font-semibold text-foreground my-4">
            {trimmedLine.replace(/\*\*/g, '')}
          </p>
        );
      } else if (trimmedLine) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="space-y-3 my-6">
              {listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatText(item) }} />
                </li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <p key={index} className="text-muted-foreground text-lg leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: formatText(trimmedLine) }} />
        );
      }
    });

    // Handle remaining list items
    if (listItems.length > 0) {
      elements.push(
        <ul key="final-list" className="space-y-3 my-6">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatText(item) }} />
            </li>
          ))}
        </ul>
      );
    }

    return elements;
  };

  const formatText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Inno8 AI Solutions Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta name="author" content={post.author} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <link rel="canonical" href={shareUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "datePublished": post.publishedDate,
            "publisher": {
              "@type": "Organization",
              "name": "Inno8 AI Solutions",
              "url": "https://inno8aisolutions.com"
            },
            "mainEntityOfPage": shareUrl
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
              className="max-w-4xl mx-auto"
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">{post.category}</span>
              </div>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Tag className="w-4 h-4" />
                {post.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <User className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{post.author}</p>
                    <p className="text-sm">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share:
                </span>
                <div className="flex gap-2">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#4267B2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:?subject=${shareText}&body=${shareUrl}`}
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 md:p-12">
                    {/* Excerpt */}
                    <p className="text-xl text-foreground leading-relaxed mb-8 pb-8 border-b border-border">
                      {post.excerpt}
                    </p>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                      {renderContent(post.content)}
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-border">
                      <h4 className="text-sm font-semibold text-foreground mb-4">Tags:</h4>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Need Expert Technology Guidance?</h3>
                      <p className="text-muted-foreground mb-6">
                        Our team offers independent technology assessment and advisory support to help you make confident, informed decisions.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="hero" size="lg" asChild>
                          <a href="/#contact">Request a Consultation</a>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                          <a href="mailto:vipin@inno8aisolutions.com">Email Us Directly</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-28 space-y-8">
                  {/* Author Card */}
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">About the Author</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <User className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{post.author}</p>
                          <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Leading technology transformation initiatives for NGOs and businesses across the globe with a focus on governance, security, and sustainable growth.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Recent Posts */}
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">More Insights</h3>
                      <div className="space-y-4">
                        {recentPosts.map((recentPost) => (
                          <Link
                            key={recentPost.id}
                            to={`/blog/${recentPost.slug}`}
                            className="block group"
                          >
                            <h4 className="text-foreground font-medium group-hover:text-primary transition-colors line-clamp-2 mb-1">
                              {recentPost.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{recentPost.readTime}</p>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Card */}
                  <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Let's Connect</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Have questions about technology governance or digital transformation?
                      </p>
                      <Button variant="hero" size="default" className="w-full" asChild>
                        <a href="/#contact">Get In Touch</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* Back to Blog */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
