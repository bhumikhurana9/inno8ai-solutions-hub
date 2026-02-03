export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  features: string[];
  liveUrl?: string;
  image: string;
  galleryImages: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "sbi-youth-for-india",
    title: "SBI Youth for India",
    client: "State Bank of India",
    category: "Web Development",
    tagline: "Empowering Youth Volunteerism Through Scalable Digital Infrastructure",
    description: "A comprehensive platform redesign for SBI's flagship youth volunteer internship program, enabling thousands of young Indians to contribute to rural development initiatives.",
    challenge: "The existing WordPress platform faced critical scalability issues during peak registration periods, with slow load times and security vulnerabilities. The system couldn't handle concurrent user registrations during application windows, leading to poor user experience and lost applications.",
    solution: "We architected a complete platform migration from WordPress to a modern React + Laravel stack. The new system leverages Laravel's robust security protocols and implements a microservices architecture for the dashboard, ensuring seamless handling of high-traffic scenarios. AI-driven SEO tools were integrated to improve organic discovery.",
    results: [
      "300% improvement in page load speed",
      "Zero downtime during peak registration (10,000+ concurrent users)",
      "Enhanced security with Laravel's built-in protection against SQL injection and XSS",
      "Robust admin dashboard for managing fellows, projects, and content",
      "Mobile-responsive design increasing mobile applications by 150%"
    ],
    technologies: ["React", "Laravel", "MySQL", "Redis", "AWS", "AI SEO Tools"],
    features: [
      "Fellow profile management system",
      "Project tracking and reporting",
      "Blog and press release CMS",
      "Batch-wise application management",
      "Real-time analytics dashboard",
      "Automated email notifications"
    ],
    liveUrl: "https://youthforindia.org/",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1529390079861-591f6af8a6a4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Active Fellows", value: "5,000+" },
      { label: "Villages Impacted", value: "2,500+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Load Speed", value: "<2s" }
    ]
  },
  {
    id: "tbfc-blended-finance",
    title: "The Blended Finance Company",
    client: "TBFC",
    category: "Platforms",
    tagline: "Revolutionizing Impact Finance Through Intelligent Data Analytics",
    description: "A comprehensive fintech platform for NBFCs and TP founders to distribute student loans, track analytics, and generate automated weekly reports with complete transparency.",
    challenge: "The client needed a unified platform to manage complex financial workflows involving multiple NBFCs, training partners, and founders. Manual reporting processes were time-consuming and error-prone, with no real-time visibility into disbursals, NPAs, or gender inclusion metrics.",
    solution: "We built a sophisticated dashboard platform that integrates with multiple stakeholders' systems. The platform automates weekly report generation, tracks loan disbursals in real-time, and provides comprehensive analytics on access increase, NPAs, and gender inclusion metrics.",
    results: [
      "Automated weekly reports saving 20+ hours of manual work",
      "Real-time tracking of INR 90+ Crores in disbursals",
      "26% improvement in access increase metrics",
      "45% gender inclusion tracking accuracy",
      "Single dashboard for all stakeholders"
    ],
    technologies: ["Laravel", "React", "MySQL", "Chart.js", "Automated Reporting", "REST APIs"],
    features: [
      "Multi-stakeholder dashboard (NBFC, TP, Founders)",
      "Real-time disbursal tracking",
      "Automated weekly report generation",
      "NPA monitoring and alerts",
      "Gender inclusion analytics",
      "Access increase metrics tracking"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Disbursals", value: "₹90Cr+" },
      { label: "Access Increase", value: "26%" },
      { label: "NPA Tracking", value: "89%" },
      { label: "Gender Inclusion", value: "45%" }
    ]
  },
  {
    id: "iskcon-bureau-portal",
    title: "ISKCON Bureau Management Portal",
    client: "ISKCON",
    category: "Platforms",
    tagline: "Unified Microsoft Integration for Spiritual Organization Management",
    description: "A comprehensive organizational portal integrating Microsoft 365 services including SharePoint, OneDrive, and Teams, enhanced with AI-powered meeting summaries and democratic voting systems.",
    challenge: "ISKCON's global bureau needed a unified platform to manage documents, conduct meetings, track attendance, and facilitate democratic decision-making. The existing fragmented systems made collaboration difficult across temples worldwide.",
    solution: "We developed a custom portal with complete Microsoft Graph API integration. The platform features document management via SharePoint, personal repositories through OneDrive, Teams meeting scheduling with AI-generated summaries, and a transparent voting system for organizational decisions.",
    results: [
      "100% Microsoft 365 integration",
      "AI-generated meeting summaries reducing documentation time by 80%",
      "Transparent voting system for fair decision-making",
      "Centralized document management for global temples",
      "Real-time collaboration across time zones"
    ],
    technologies: ["React", "Node.js", "Microsoft Graph API", "SharePoint", "OneDrive", "Teams", "OpenAI GPT"],
    features: [
      "SharePoint document management with GraphQL API",
      "Personal OneDrive repositories for each user",
      "Teams meeting scheduling and management",
      "AI-generated meeting summary reports",
      "Anonymous voting system with fair tracking",
      "Meeting attendance tracking",
      "Mail integration"
    ],
    liveUrl: "https://iskcon.litmusink.com/login",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Users", value: "500+" },
      { label: "Documents", value: "10K+" },
      { label: "Meetings/Month", value: "200+" },
      { label: "Votes Tracked", value: "1,500+" }
    ]
  },
  {
    id: "motherson-botwrks",
    title: "Motherson BotWrks Solutions",
    client: "Motherson Group",
    category: "AI Solutions",
    tagline: "AI-Powered Digital Transformation for Global Manufacturing Leader",
    description: "A comprehensive digital solution for Motherson Group featuring three vertical platforms: BotWrks AI solutions, supply chain management, and internal resource portal with SEO analytics.",
    challenge: "Motherson Group, a global leader in manufacturing and assembly, needed to modernize their digital presence across multiple business verticals while ensuring secure access for internal stakeholders and implementing AI solutions for customer engagement.",
    solution: "We developed three interconnected platforms built on Laravel: BotWrks for AI chatbot solutions, a supply chain analytics portal, and an internal resource management system. Each platform features role-based access control ensuring company members can only access their designated resources.",
    results: [
      "Unified digital presence across 3 business verticals",
      "AI chatbot handling 500+ customer queries daily",
      "Secure role-based access for 1,000+ internal users",
      "Improved SEO rankings across all platforms",
      "Streamlined supply chain visibility"
    ],
    technologies: ["Laravel", "PHP", "JavaScript", "Figma", "AI Chatbot", "SEO Analytics"],
    features: [
      "BotWrks AI chatbot integration",
      "Supply chain analytics dashboard",
      "Role-based resource access control",
      "SEO performance tracking",
      "Custom UI/UX design",
      "Server deployment and optimization"
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Daily Queries", value: "500+" },
      { label: "Internal Users", value: "1,000+" },
      { label: "Verticals", value: "3" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    id: "netreach-healthcare",
    title: "NetReach Healthcare Platform",
    client: "NetReach",
    category: "AI Solutions",
    tagline: "AI-Driven Healthcare Access for HIV Prevention and STI Services",
    description: "A comprehensive healthcare platform offering risk assessment, appointment booking, and multilingual AI chatbot support for HIV testing, STI services, and PrEP consultation.",
    challenge: "NetReach needed a sensitive yet accessible platform for users seeking HIV and STI services. The challenge was to provide confidential risk assessments, easy appointment booking, and personalized care while breaking language barriers across diverse user demographics.",
    solution: "We built a HIPAA-compliant platform with an AI-powered multilingual chatbot that guides users through risk assessments, automatically books appointments with preferred service providers, and generates AI-powered prescription summaries. The lead management platform helps VN teams track and manage user journeys.",
    results: [
      "Multilingual chatbot supporting 8+ languages",
      "50% increase in appointment completion rates",
      "AI-generated prescription summaries for user clarity",
      "Streamlined lead management for service providers",
      "Reduced stigma through confidential digital access"
    ],
    technologies: ["React", "Python", "FastAPI", "GPT-4", "Twilio", "MongoDB"],
    features: [
      "Confidential risk assessment tools",
      "AI chatbot with multilingual support",
      "Automated appointment booking",
      "AI-generated prescription summaries",
      "VN lead management platform",
      "Service provider dashboard"
    ],
    liveUrl: "https://netreach.co.in/",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Languages", value: "8+" },
      { label: "Appointments/Month", value: "1,000+" },
      { label: "User Satisfaction", value: "94%" },
      { label: "Response Time", value: "<3s" }
    ]
  },
  {
    id: "imha-mental-health",
    title: "India Mental Health Alliance",
    client: "IMHA",
    category: "AI Solutions",
    tagline: "AI-Enhanced Mental Health Alliance Management Platform",
    description: "A comprehensive platform for mental health professionals featuring AI-integrated video content, course management, Twilio dashboard integration, and automated alliance reporting.",
    challenge: "IMHA needed a unified platform to manage their growing alliance network, deliver video courses to users, track sales, and generate actionable insights. Manual processes for weekly reporting and alliance task management were unsustainable.",
    solution: "We built a custom platform with AI-integrated video content generation, course purchase and delivery system, single-click Twilio dashboard views, and automated AI-generated weekly reports for each alliance. The data analytics dashboard provides comprehensive sales and engagement metrics.",
    results: [
      "AI-generated video content increasing engagement by 200%",
      "Automated weekly reports for 50+ alliances",
      "Single-click Twilio dashboard summary",
      "Real-time sales analytics per alliance",
      "Streamlined course delivery system"
    ],
    technologies: ["React", "Node.js", "Twilio", "OpenAI", "PostgreSQL", "AWS S3"],
    features: [
      "AI-integrated video content creation",
      "Course purchase and delivery platform",
      "Twilio dashboard integration",
      "AI-generated weekly alliance reports",
      "Alliance task management",
      "Sales analytics per alliance"
    ],
    liveUrl: "https://imha.indiamentalhealthalliance.org/alliance-directory",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Alliances", value: "50+" },
      { label: "Video Views", value: "10K+" },
      { label: "Courses Sold", value: "500+" },
      { label: "Reports/Week", value: "50+" }
    ]
  },
  {
    id: "paani-foundation",
    title: "Paani Foundation Water Surveillance",
    client: "Paani Foundation",
    category: "AI Solutions",
    tagline: "GPS-Powered Water Surveillance for Maharashtra's Farmers",
    description: "A data surveillance and collection platform using GPS technology and generative AI to track water shortage patterns and farmer prosperity across Maharashtra's diverse agricultural regions.",
    challenge: "Paani Foundation needed real-time visibility into water availability across thousands of villages in Maharashtra. Manual data collection was slow and prone to errors, making it difficult to allocate resources effectively during water crises.",
    solution: "We developed a comprehensive data surveillance system leveraging GPS tracking for field data collection, generative AI for pattern analysis across regions, and real-time dashboards for decision-making. The platform enables proactive water management and resource allocation.",
    results: [
      "Real-time water surveillance across 1,000+ villages",
      "GPS-tracked data collection improving accuracy by 95%",
      "AI-generated regional analysis reports",
      "30% faster response to water shortage alerts",
      "Improved farmer prosperity tracking"
    ],
    technologies: ["Python", "TensorFlow", "GPS Tracking", "Generative AI", "GIS Mapping", "React"],
    features: [
      "GPS-based field data collection",
      "Real-time water shortage tracking",
      "Generative AI regional analysis",
      "Farmer prosperity metrics",
      "Resource allocation dashboard",
      "Automated alert system"
    ],
    liveUrl: "https://www.paanifoundation.in/",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1500534623283-b7e16c97b756?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Villages Covered", value: "1,000+" },
      { label: "Data Accuracy", value: "95%" },
      { label: "Response Time", value: "-30%" },
      { label: "Farmers Impacted", value: "50K+" }
    ]
  },
  {
    id: "rocket-learning",
    title: "Rocket Learning EdTech Platform",
    client: "Rocket Learning",
    category: "AI Solutions",
    tagline: "WhatsApp-Powered Learning Revolution for Early Childhood Education",
    description: "An integrated education platform combining Wix-based web presence with Python-powered WhatsApp chatbot delivering AI-generated study materials, assessments, and personalized report cards.",
    challenge: "Rocket Learning needed to reach millions of students through accessible channels. Traditional app-based learning wasn't suitable for their demographic. They needed assessment tracking from baseline to endline with parent-friendly report cards.",
    solution: "We built a custom WhatsApp chatbot using Python, AI, and ML-GPT that delivers quality study materials, AI-generated educational videos, and conducts assessments. The system tracks student progress from baseline to endline, generating automated report cards for parents and teachers.",
    results: [
      "WhatsApp-based delivery reaching 1M+ students",
      "AI-generated study materials and videos",
      "Baseline to endline assessment tracking",
      "Automated report cards for parents and teachers",
      "Engagement across 10,000+ schools"
    ],
    technologies: ["Python", "WhatsApp API", "GPT-4", "Machine Learning", "Wix", "PostgreSQL"],
    features: [
      "WhatsApp chatbot for content delivery",
      "AI-generated study materials",
      "AI-powered educational videos",
      "Baseline and endline assessments",
      "Automated parent report cards",
      "Teacher and school dashboards"
    ],
    liveUrl: "https://rocketlearning.org/",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Students", value: "1M+" },
      { label: "Schools", value: "10K+" },
      { label: "Assessments", value: "5M+" },
      { label: "Teachers", value: "50K+" }
    ]
  },
  {
    id: "helpdrive-parivar-milan",
    title: "HelpDrive Parivar Milan",
    client: "HelpDrive Foundation",
    category: "AI Solutions",
    tagline: "AI-Powered Missing Person Identification for Family Reunification",
    description: "A revolutionary platform using Python, Django, OpenCV, and ML-based facial recognition to scan thousands of profiles instantly, matching missing persons with shelter home residents through QR-based tracking.",
    challenge: "India has millions of missing persons, many of whom end up in shelter homes without identification. Manual matching is nearly impossible at scale, and tracking found individuals requires constant monitoring to prevent them from going missing again.",
    solution: "We built an AI-powered platform using OpenCV and custom ML models that can scan thousands of facial profiles in seconds. Each found person receives a QR-coded wristband for real-time GPS tracking. Community members can report sightings with location data, creating a collaborative finding network.",
    results: [
      "1,000+ profiles scanned per second",
      "500+ successful family reunifications",
      "QR-based real-time person tracking",
      "Community sighting reports with GPS",
      "AI-generated matching probability scores"
    ],
    technologies: ["Python", "Django", "OpenCV", "TensorFlow", "Machine Learning", "GPS Tracking", "QR Technology"],
    features: [
      "AI facial recognition matching",
      "Bulk profile scanning (1000+/second)",
      "QR-coded tracking wristbands",
      "Real-time GPS location tracking",
      "Community sighting reports",
      "AI-generated process documentation"
    ],
    liveUrl: "https://helpdriveparivarmilan.com/",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Profiles Scanned", value: "1K/sec" },
      { label: "Reunifications", value: "500+" },
      { label: "Active Trackers", value: "2,000+" },
      { label: "Community Reports", value: "10K+" }
    ]
  },
  {
    id: "10x-impact-labs",
    title: "10x Impact Labs",
    client: "10x Impact Labs",
    category: "Web Development",
    tagline: "Human-Centered Design for Social Impact Organizations",
    description: "A fast, secure, and reliable WordPress website built with custom templates, reflecting 10x Impact Labs' philosophy of building solutions with people, not just for them.",
    challenge: "10x Impact Labs needed a website that embodied their collaborative approach to social impact while being fast, secure, and easy to update. They required a platform that could showcase their frameworks and methodologies effectively.",
    solution: "We built a custom WordPress site using optimized templates for maximum performance. The design emphasizes their human-centered approach with clear navigation through their services, case studies, and team. Built-in security measures and CDN integration ensure reliability.",
    results: [
      "Page load time under 2 seconds",
      "100% mobile responsiveness",
      "Easy-to-update CMS for non-technical team",
      "Enhanced security with SSL and firewall",
      "Improved organic search rankings"
    ],
    technologies: ["WordPress", "Custom Theme", "PHP", "MySQL", "Cloudflare CDN", "SSL"],
    features: [
      "Custom WordPress theme",
      "Service showcase pages",
      "Team and about sections",
      "Case study portfolio",
      "Blog integration",
      "Contact form with CRM integration"
    ],
    liveUrl: "https://wordpress-1282246-5790211.cloudwaysapps.com/about-us/",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Load Time", value: "<2s" },
      { label: "Mobile Score", value: "95+" },
      { label: "Security", value: "A+" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    id: "gcc-solutions",
    title: "GCC News & Information Portal",
    client: "Gulf Cooperation Council",
    category: "Web Development",
    tagline: "Real-Time Information Platform for Gulf Countries",
    description: "News portals and real-time information platforms for Gulf countries built on ASP.NET and Joomla, featuring AI-based human solutions for community engagement and problem resolution.",
    challenge: "The GCC needed modern, multi-lingual news portals capable of serving millions of users across Gulf countries with real-time information, community engagement features, and AI-powered problem resolution for citizen concerns.",
    solution: "We developed robust portals using ASP.NET and Joomla, optimized for high traffic and multi-language support. AI-based solutions help categorize and route citizen concerns to appropriate departments, while real-time feeds ensure timely information delivery.",
    results: [
      "Multi-lingual support (Arabic, English)",
      "AI-powered citizen query routing",
      "Real-time news and updates",
      "High availability for millions of users",
      "Community problem resolution platform"
    ],
    technologies: ["ASP.NET", "Joomla", "SQL Server", "Arabic NLP", "AI Classification", "CDN"],
    features: [
      "Real-time news feeds",
      "Multi-lingual content management",
      "AI-based query classification",
      "Community engagement portal",
      "Government service integration",
      "Mobile-responsive design"
    ],
    liveUrl: "https://www.gcc-sg.org/en/Pages/default.aspx",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Daily Users", value: "100K+" },
      { label: "Languages", value: "2+" },
      { label: "Articles", value: "50K+" },
      { label: "Response Time", value: "<1s" }
    ]
  },
  {
    id: "anode-governance-lab",
    title: "Anode Governance Lab",
    client: "Anode Governance Lab",
    category: "Web Development",
    tagline: "Strengthening Panchayats for Effective Local Governance",
    description: "A custom WordPress platform designed to support Anode's mission of strengthening panchayats, improving public institutions, and enabling meaningful citizen participation in local governance.",
    challenge: "Anode needed a website that could effectively communicate their complex governance work while being accessible to diverse stakeholders including government officials, citizens, and development partners.",
    solution: "We designed a custom WordPress structure that clearly presents their mission, programs, and impact. The site features intuitive navigation, accessibility compliance, and integration with their content management workflows for regular updates.",
    results: [
      "Clear communication of governance initiatives",
      "Improved stakeholder engagement",
      "Accessibility compliance (WCAG 2.1)",
      "Easy content management for team",
      "Enhanced credibility with professional design"
    ],
    technologies: ["WordPress", "Custom Theme", "PHP", "Accessibility Tools", "SEO Optimization"],
    features: [
      "Mission and vision showcase",
      "Program portfolio pages",
      "Impact stories and case studies",
      "Resource library",
      "Team directory",
      "Contact and inquiry forms"
    ],
    liveUrl: "https://www.anodegovernancelab.in/",
    image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Panchayats", value: "500+" },
      { label: "States", value: "5+" },
      { label: "Visitors/Month", value: "10K+" },
      { label: "Resources", value: "100+" }
    ]
  },
  {
    id: "muloha-ecommerce",
    title: "Muloha E-Commerce Platform",
    client: "Muloha",
    category: "Platforms",
    tagline: "AI-Powered E-Commerce with Doctor Consultation Integration",
    description: "A custom Shopify e-commerce store with Liquid templates, custom payment gateway, AI-powered abandoned cart recovery, and integrated GPT-based doctor consultation for health product recommendations.",
    challenge: "Muloha needed more than a typical e-commerce store. They required custom payment tracking, sophisticated abandoned cart recovery, and the unique ability to connect customers with AI-powered doctor consultations for personalized product recommendations.",
    solution: "We built a custom Shopify store using Liquid templates with integrated payment gateway tracking. Abandoned cart recovery uses AI to send personalized re-engagement emails. The standout feature is the GPT-powered doctor consultation that guides users through health concerns to successful purchases.",
    results: [
      "35% reduction in cart abandonment",
      "AI doctor converting 40% of consultations to sales",
      "Custom payment tracking and recovery",
      "Personalized health product recommendations",
      "Increased average order value by 25%"
    ],
    technologies: ["Shopify", "Liquid Templates", "Custom Payment Gateway", "GPT-4", "Email Automation"],
    features: [
      "Custom Shopify Liquid theme",
      "Integrated payment gateway",
      "AI-powered abandoned cart recovery",
      "GPT doctor consultation bot",
      "Personalized email re-engagement",
      "Lead-to-sale tracking"
    ],
    liveUrl: "https://www.muloha.com/",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Cart Recovery", value: "+35%" },
      { label: "Conversion", value: "40%" },
      { label: "AOV Increase", value: "+25%" },
      { label: "Consultations", value: "500+/mo" }
    ]
  },
  {
    id: "green-yatra",
    title: "Green Yatra Data Platform",
    client: "Green Yatra",
    category: "Platforms",
    tagline: "MERN Stack Solution for Environmental Project Management",
    description: "A comprehensive data collection and reporting platform built on MERN stack for environmental projects, featuring offline sync mobile app, drone shot management, and transparent fund tracking.",
    challenge: "Green Yatra needed a platform to collect field data for plantation, water body restoration, and sustainability projects. Field workers often lack internet connectivity, and funders require detailed weekly reports with complete transparency on fund utilization.",
    solution: "We built a MERN stack platform with a React Native mobile app supporting offline data sync. Field workers can upload site information, drone shots, and videos (up to 1TB). The system generates automated weekly project summaries and transparent fund tracking reports for funders.",
    results: [
      "Offline-first mobile app for field data collection",
      "1TB+ media storage for drone footage",
      "Automated weekly project reports",
      "Transparent fund tracking for funders",
      "Real-time project template generation"
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "React Native", "AWS S3", "Offline Sync"],
    features: [
      "Offline data collection app",
      "Drone shot and video management",
      "Project template reports",
      "Weekly summary generation",
      "Fund tracking dashboard",
      "Plantation and water body metrics"
    ],
    liveUrl: "https://greenyatra.13.234.15.34.nip.io/",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Projects", value: "100+" },
      { label: "Trees Planted", value: "1M+" },
      { label: "Data Storage", value: "1TB+" },
      { label: "Field Workers", value: "500+" }
    ]
  },
  {
    id: "unifly-collective",
    title: "Unifly Collective Sports Platform",
    client: "Unifly Collective",
    category: "Platforms",
    tagline: "Real-Time Sports Coaching Analytics with GPS Tracking",
    description: "A comprehensive data collection and analytics platform for cricket coaching, featuring real-time coach GPS tracking, school dashboards, and React Native apps for Android and iOS.",
    challenge: "Unifly needed to verify coaching sessions were actually happening, track coach effectiveness, and provide schools with detailed analytics on their sports programs. Manual verification and reporting was inefficient and unreliable.",
    solution: "We built a Laravel + React platform with React Native mobile apps that track coach locations in real-time during sessions. Schools get dedicated dashboards with weekly reports on team performance and coach assignments. Real-time data collection ensures session verification and quality analytics.",
    results: [
      "Real-time GPS verification of coaching sessions",
      "School-specific dashboards and weekly reports",
      "React Native apps for Android and iOS",
      "Automated coach assignment tracking",
      "Student skill development analytics"
    ],
    technologies: ["Laravel", "React", "React Native", "GPS Tracking", "PostgreSQL", "Push Notifications"],
    features: [
      "Real-time coach GPS tracking",
      "School dashboard with analytics",
      "Weekly automated reports",
      "Coach assignment management",
      "Student skill tracking",
      "Android and iOS mobile apps"
    ],
    liveUrl: "https://uniflycollective.vercel.app/",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Schools", value: "200+" },
      { label: "Coaches", value: "500+" },
      { label: "Sessions/Week", value: "2,000+" },
      { label: "Students", value: "10K+" }
    ]
  },
  {
    id: "ahvaan-education",
    title: "Ahvaan Education Analytics",
    client: "Ahvaan",
    category: "Platforms",
    tagline: "AI-Powered Analytics for Anganwadi and Balwadi Schools",
    description: "A Java Spring-based data collection and analytics platform for early childhood education, tracking student assessments from baseline to endline with AI-generated reports for government funding.",
    challenge: "Ahvaan needed to collect data from thousands of anganwadi and balwadi schools, track teacher and student progress, and generate comprehensive reports for government funding. Manual data compilation was time-consuming and error-prone.",
    solution: "We built a robust Java Spring platform for large-scale data collection from anganwadi and balwadi schools. The system tracks students from baseline to endline assessments, and uses AI to generate detailed analytics reports suitable for government funding applications.",
    results: [
      "Data collection from 5,000+ schools",
      "AI-generated funding reports",
      "Baseline to endline tracking",
      "Teacher and parent data management",
      "Government compliance reporting"
    ],
    technologies: ["Java Spring", "PostgreSQL", "AI Analytics", "Chart.js", "PDF Generation"],
    features: [
      "Multi-school data collection",
      "Teacher and student tracking",
      "Parent engagement metrics",
      "Baseline/endline assessments",
      "AI-generated funding reports",
      "Government compliance exports"
    ],
    liveUrl: "https://www.ahvaan.org/",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Schools", value: "5,000+" },
      { label: "Students", value: "100K+" },
      { label: "Teachers", value: "10K+" },
      { label: "Reports", value: "500+/mo" }
    ]
  },
  {
    id: "villgro-portfolio",
    title: "Villgro Impact Platform",
    client: "Villgro",
    category: "Platforms",
    tagline: "Unified Platform for Impact Investment and Donation Tracking",
    description: "A comprehensive platform tracking donations, user journeys, course purchases, product shipments, marketing team tasks, and lead conversions - all unified in one powerful dashboard.",
    challenge: "Villgro's multiple initiatives needed unified tracking across donations, course sales, product shipments, and marketing activities. Disparate systems made it impossible to get a holistic view of user journeys and conversion metrics.",
    solution: "We built a unified platform that tracks every touchpoint of user interaction - from initial visit to donation/purchase, through course enrollment, and product shipment. Marketing teams can manage tasks and track lead conversions with complete journey visibility.",
    results: [
      "Unified view of all user journeys",
      "Complete donation and purchase tracking",
      "Marketing task management integration",
      "Lead conversion analytics",
      "Product shipment tracking"
    ],
    technologies: ["WordPress", "Custom CMS", "Analytics Integration", "CRM", "Payment Gateway"],
    features: [
      "Donation tracking dashboard",
      "User journey mapping",
      "Course purchase tracking",
      "Product shipment management",
      "Marketing task board",
      "Lead conversion analytics"
    ],
    liveUrl: "https://villgro.org/",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Donations", value: "₹10Cr+" },
      { label: "Users Tracked", value: "50K+" },
      { label: "Conversions", value: "15%" },
      { label: "Initiatives", value: "3" }
    ]
  },
  {
    id: "digital-marketing-suite",
    title: "Digital Marketing Suite",
    client: "Multiple Clients",
    category: "Marketing",
    tagline: "AI-Powered Marketing Operations Platform",
    description: "A comprehensive digital marketing platform integrating Google keyword generation, HR/IT/Accounts operations, social media lead generation, and AI-powered content creation in one unified solution.",
    challenge: "Marketing teams struggle with fragmented tools for keyword research, content creation, social media management, and lead tracking. They needed a unified platform that could handle all operations with AI-powered automation.",
    solution: "We built an all-in-one marketing operations platform with Google keyword generation, integrated HR/IT/Accounts modules, social media lead generation across Facebook, Instagram, and TikTok, and AI-powered content generation using custom GPT integration.",
    results: [
      "AI content generation in seconds",
      "Unified operations across departments",
      "Multi-platform lead generation",
      "Automated keyword research",
      "50% reduction in content creation time"
    ],
    technologies: ["React", "Node.js", "GPT-4", "Google APIs", "Social Media APIs", "Analytics"],
    features: [
      "Google keyword generation",
      "HR/IT/Accounts operations modules",
      "Facebook/Instagram/TikTok integration",
      "AI-powered post generation",
      "Lead tracking and management",
      "Custom GPT content creation"
    ],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ],
    metrics: [
      { label: "Content Speed", value: "-50%" },
      { label: "Platforms", value: "5+" },
      { label: "Keywords/Day", value: "1,000+" },
      { label: "Leads/Month", value: "10K+" }
    ]
  }
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};

export const getCaseStudiesByCategory = (category: string): CaseStudy[] => {
  if (category === "All") return caseStudies;
  return caseStudies.filter(study => study.category === category);
};
