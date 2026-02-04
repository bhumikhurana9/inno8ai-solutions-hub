import sbiYfiImage from "@/assets/projects/sbi-yfi.jpg";
import iskconPortalImage from "@/assets/projects/iskcon-portal.png";
import tbfcDashboardImage from "@/assets/projects/tbfc-dashboard.png";
import helpdriveImage from "@/assets/projects/helpdrive-platform.jpg";
import netreachImage from "@/assets/projects/netreach-platform.png";
import greenYatraImage from "@/assets/projects/green-yatra.jpg";
import dataAnalyticsImage from "@/assets/projects/data-analytics.jpg";
import unifyImage from "@/assets/projects/unify-platform.jpg";
import rocketLearningImage from "@/assets/projects/rocket-learning.jpg";
import paaniFoundationImage from "@/assets/projects/paani-foundation.jpg";

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
    image: sbiYfiImage,
    galleryImages: [
      sbiYfiImage,
      dataAnalyticsImage,
      tbfcDashboardImage
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
    image: tbfcDashboardImage,
    galleryImages: [
      tbfcDashboardImage,
      dataAnalyticsImage,
      unifyImage
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
    image: iskconPortalImage,
    galleryImages: [
      iskconPortalImage,
      dataAnalyticsImage,
      tbfcDashboardImage
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
    image: dataAnalyticsImage,
    galleryImages: [
      dataAnalyticsImage,
      tbfcDashboardImage,
      unifyImage
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
    image: netreachImage,
    galleryImages: [
      netreachImage,
      dataAnalyticsImage,
      helpdriveImage
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
    image: dataAnalyticsImage,
    galleryImages: [
      dataAnalyticsImage,
      tbfcDashboardImage,
      unifyImage
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
    image: paaniFoundationImage,
    galleryImages: [
      paaniFoundationImage,
      greenYatraImage,
      dataAnalyticsImage
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
      "School and teacher dashboards"
    ],
    liveUrl: "https://rocketlearning.org/",
    image: rocketLearningImage,
    galleryImages: [
      rocketLearningImage,
      dataAnalyticsImage,
      unifyImage
    ],
    metrics: [
      { label: "Students Reached", value: "1M+" },
      { label: "Schools", value: "10,000+" },
      { label: "Report Cards", value: "500K+" },
      { label: "Languages", value: "10+" }
    ]
  },
  {
    id: "helpdrive-parivaar-milan",
    title: "HelpDrive Parivaar Milan",
    client: "HelpDrive Foundation",
    category: "AI Solutions",
    tagline: "AI-Powered Missing Person Reunification Platform",
    description: "A revolutionary person-finding platform using Python, Django, and OpenCV-based facial recognition to reunite missing persons with their families through QR-code tracking and real-time GPS coordinates.",
    challenge: "HelpDrive Foundation faced the immense challenge of reuniting missing persons in shelter homes with their families. Manual identification methods were slow and ineffective. They needed technology that could process thousands of profiles instantly.",
    solution: "We developed an advanced platform using Python Django backend with OpenCV and facial recognition ML algorithms capable of scanning thousands of profiles per second. The system includes QR code bands for tracking, real-time GPS coordinates, and a community reporting feature for sightings.",
    results: [
      "1,000+ profiles scanned per second using ML",
      "Real-time GPS tracking via QR code bands",
      "Community sighting reports with location data",
      "Successful reunifications increased by 300%",
      "Shelter home integration across multiple states"
    ],
    technologies: ["Python", "Django", "OpenCV", "TensorFlow", "Facial Recognition ML", "GPS Tracking", "QR Code"],
    features: [
      "Facial recognition profile matching",
      "QR code tracking bands",
      "Real-time GPS coordinate tracking",
      "Community sighting reports",
      "Shelter home database integration",
      "Family notification system"
    ],
    liveUrl: "https://helpdriveparivarmilan.com/",
    image: helpdriveImage,
    galleryImages: [
      helpdriveImage,
      dataAnalyticsImage,
      netreachImage
    ],
    metrics: [
      { label: "Scans/Second", value: "1,000+" },
      { label: "Reunifications", value: "500+" },
      { label: "Active Profiles", value: "10,000+" },
      { label: "States Covered", value: "15+" }
    ]
  },
  {
    id: "10x-impact-labs",
    title: "10x Impact Labs Platform",
    client: "10x Impact Labs",
    category: "Web Development",
    tagline: "Human-Centered Design for Social Impact Organizations",
    description: "A WordPress-based platform for a social impact consultancy, built with custom templates for speed, security, and reliability while maintaining the human-centered design philosophy.",
    challenge: "10x Impact Labs needed a website that reflected their mission of building solutions with people, not for them. They required a fast, secure, and reliable platform that could showcase their frameworks and engage potential clients.",
    solution: "We built a custom WordPress solution with optimized templates focusing on performance and security. The design emphasizes their human-centered approach while providing fast load times and reliable uptime for global accessibility.",
    results: [
      "Custom WordPress template with 2s load time",
      "Mobile-optimized responsive design",
      "SEO-optimized content structure",
      "Secure and reliable hosting setup",
      "Easy content management for team"
    ],
    technologies: ["WordPress", "Custom PHP", "JavaScript", "CSS3", "MySQL", "Cloudways"],
    features: [
      "Custom template design",
      "Fast and secure hosting",
      "SEO optimization",
      "Mobile responsive design",
      "Content management system",
      "Contact form integration"
    ],
    liveUrl: "https://wordpress-1282246-5790211.cloudwaysapps.com/about-us/",
    image: dataAnalyticsImage,
    galleryImages: [
      dataAnalyticsImage,
      tbfcDashboardImage,
      sbiYfiImage
    ],
    metrics: [
      { label: "Load Time", value: "<2s" },
      { label: "Uptime", value: "99.9%" },
      { label: "Mobile Score", value: "95+" },
      { label: "SEO Score", value: "90+" }
    ]
  },
  {
    id: "gcc-solutions",
    title: "GCC News & Information Portal",
    client: "GCC Solutions",
    category: "Web Development",
    tagline: "Real-Time Information Platform for Gulf Countries",
    description: "Multi-language news portals for Gulf Cooperation Council countries, providing real-time information and AI-based community engagement solutions built on ASP.NET and Joomla frameworks.",
    challenge: "GCC needed robust news portals that could handle high traffic, deliver real-time content in multiple languages, and provide AI-enhanced community engagement for citizens across Gulf nations.",
    solution: "We developed scalable news platforms using ASP.NET and Joomla, featuring real-time content delivery, multi-language support, and AI-powered solutions for community problem-solving and citizen engagement.",
    results: [
      "Multi-language support for Arabic and English",
      "Real-time news and information delivery",
      "AI-powered community engagement",
      "High-traffic handling capability",
      "Cross-platform accessibility"
    ],
    technologies: ["ASP.NET", "Joomla", "JavaScript", "SQL Server", "AI Integration", "Multi-language CMS"],
    features: [
      "Real-time news updates",
      "Multi-language content management",
      "AI-based community solutions",
      "Cross-platform compatibility",
      "High-performance architecture",
      "Citizen engagement tools"
    ],
    liveUrl: "https://www.gcc-sg.org/en/Pages/default.aspx",
    image: dataAnalyticsImage,
    galleryImages: [
      dataAnalyticsImage,
      tbfcDashboardImage,
      iskconPortalImage
    ],
    metrics: [
      { label: "Languages", value: "2+" },
      { label: "Daily Visitors", value: "50K+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Countries", value: "6" }
    ]
  },
  {
    id: "anode-governance-lab",
    title: "Anode Governance Lab",
    client: "Anode Governance Lab",
    category: "Web Development",
    tagline: "Strengthening Local Governance Through Digital Innovation",
    description: "A WordPress platform for a governance organization focused on strengthening panchayats, improving public institutions, and enabling meaningful citizen participation for effective local governance.",
    challenge: "Anode Governance Lab needed a platform that could effectively communicate their mission of strengthening local governance while providing resources and engagement tools for panchayats and citizens.",
    solution: "We built a custom WordPress site with a structure optimized for governance content, featuring clear navigation for different stakeholder groups and easy access to resources and initiatives.",
    results: [
      "Clear information architecture for governance content",
      "Mobile-friendly design for rural accessibility",
      "Resource center for panchayat officials",
      "Citizen engagement features",
      "SEO optimization for discoverability"
    ],
    technologies: ["WordPress", "Custom Theme", "PHP", "JavaScript", "MySQL"],
    features: [
      "Custom WordPress structure",
      "Resource library",
      "Initiative showcases",
      "Contact and engagement forms",
      "Mobile responsive design",
      "SEO optimization"
    ],
    liveUrl: "https://www.anodegovernancelab.in/",
    image: sbiYfiImage,
    galleryImages: [
      sbiYfiImage,
      dataAnalyticsImage,
      tbfcDashboardImage
    ],
    metrics: [
      { label: "Panchayats Reached", value: "100+" },
      { label: "Resources", value: "50+" },
      { label: "States Active", value: "5+" },
      { label: "Load Time", value: "<3s" }
    ]
  },
  {
    id: "muloha-ecommerce",
    title: "Muloha E-Commerce Platform",
    client: "Muloha",
    category: "Marketing",
    tagline: "AI-Enhanced E-Commerce with Personalized Healthcare Consultations",
    description: "A custom Shopify store with Liquid templates, custom payment gateway integration, abandoned cart recovery, and AI-powered doctor consultation chatbot for personalized product recommendations.",
    challenge: "Muloha needed an e-commerce platform that went beyond simple product sales. They wanted to provide personalized healthcare advice, recover abandoned carts through intelligent engagement, and offer doctor consultations for product recommendations.",
    solution: "We built a custom Shopify store using Liquid templates with an integrated payment gateway, abandoned cart recovery system with personalized re-engagement emails, and an AI GPT-powered doctor chatbot that provides personalized advice and converts leads.",
    results: [
      "40% reduction in abandoned carts",
      "AI doctor chatbot handling 200+ queries daily",
      "Custom payment gateway with fraud protection",
      "Personalized product recommendations",
      "Increased conversion rates by 35%"
    ],
    technologies: ["Shopify", "Liquid Templates", "Custom Payment Gateway", "GPT-4", "Email Marketing", "Analytics"],
    features: [
      "Custom Liquid template design",
      "Custom payment gateway integration",
      "Abandoned cart recovery system",
      "AI doctor consultation chatbot",
      "Personalized re-engagement emails",
      "Lead tracking and conversion"
    ],
    liveUrl: "https://www.muloha.com/",
    image: dataAnalyticsImage,
    galleryImages: [
      dataAnalyticsImage,
      tbfcDashboardImage,
      netreachImage
    ],
    metrics: [
      { label: "Cart Recovery", value: "40%" },
      { label: "Daily Queries", value: "200+" },
      { label: "Conversion Rate", value: "+35%" },
      { label: "Products", value: "500+" }
    ]
  },
  {
    id: "green-yatra-data-platform",
    title: "Green Yatra Data Collection Platform",
    client: "Green Yatra",
    category: "Platforms",
    tagline: "MERN Stack Data Collection for Environmental Impact Transparency",
    description: "A comprehensive MERN stack platform for environmental data collection, project reporting, and fund tracking with offline mobile app support for field workers collecting plantation, waterbody, and sustainability data.",
    challenge: "Green Yatra needed a platform to collect field data from environmental projects, generate professional reports for funders, and provide complete transparency in fund utilization. Field workers often operated in areas with poor connectivity.",
    solution: "We built a MERN stack platform with offline-capable mobile app that syncs data when connectivity is available. The system supports drone footage uploads up to 1TB, generates weekly project summaries, and provides transparent fund tracking for investors and clients.",
    results: [
      "Offline data collection for remote field workers",
      "1TB capacity for drone footage and images",
      "Automated weekly reports for funders",
      "Transparent fund tracking dashboard",
      "Project templates for funding applications"
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "React Native", "AWS S3", "Offline Sync"],
    features: [
      "Offline mobile data collection",
      "Drone footage upload (up to 1TB)",
      "Weekly project summary reports",
      "Fund transparency tracking",
      "Plantation and waterbody metrics",
      "Funder and client dashboards"
    ],
    liveUrl: "https://greenyatra.13.234.15.34.nip.io/",
    image: greenYatraImage,
    galleryImages: [
      greenYatraImage,
      paaniFoundationImage,
      dataAnalyticsImage
    ],
    metrics: [
      { label: "Projects Tracked", value: "50+" },
      { label: "Data Points", value: "100K+" },
      { label: "Storage", value: "1TB" },
      { label: "Field Workers", value: "200+" }
    ]
  },
  {
    id: "unify-collective",
    title: "Unify Collective Platform",
    client: "Unify Collective",
    category: "Platforms",
    tagline: "Real-Time Sports Analytics for Cricket Coaching Excellence",
    description: "A Laravel and React platform for real-time cricket coaching data collection, live session tracking, school dashboards, and weekly performance reports with React Native apps for coaches and administrators.",
    challenge: "Unify Collective needed to track cricket coaching sessions in real-time, verify coach attendance via GPS, generate school-wise reports, and provide mobile apps for coaches to log session data and students' progress.",
    solution: "We developed a comprehensive platform on Laravel and React with live GPS tracking for session verification, school dashboards for administrators, weekly automated reports for teams and coaches, and React Native mobile apps for Android and iOS.",
    results: [
      "Real-time GPS session verification",
      "School-wise performance dashboards",
      "Automated weekly coaching reports",
      "Mobile apps for coaches (iOS/Android)",
      "Student skill tracking and analytics"
    ],
    technologies: ["Laravel", "React", "React Native", "MySQL", "GPS Tracking", "Real-time Analytics"],
    features: [
      "Live coach location tracking",
      "Session verification via GPS",
      "School admin dashboards",
      "Weekly automated reports",
      "Student skill assessments",
      "Cross-platform mobile apps"
    ],
    liveUrl: "https://uniflycollective.vercel.app/",
    image: unifyImage,
    galleryImages: [
      unifyImage,
      dataAnalyticsImage,
      tbfcDashboardImage
    ],
    metrics: [
      { label: "Schools", value: "100+" },
      { label: "Coaches", value: "500+" },
      { label: "Sessions/Week", value: "1,000+" },
      { label: "Students", value: "10,000+" }
    ]
  },
  {
    id: "ahvaan-education",
    title: "Ahvaan Education Analytics",
    client: "Ahvaan",
    category: "Platforms",
    tagline: "Java Spring Platform for Early Childhood Education Impact Measurement",
    description: "A comprehensive Java Spring platform for collecting and analyzing data from anganwadi and balwadi schools, tracking baseline and endline assessments, and generating AI-powered reports for government funding.",
    challenge: "Ahvaan needed to collect educational data from thousands of anganwadi and balwadi schools, track student progress through baseline and endline assessments, and generate comprehensive reports for government funding and program evaluation.",
    solution: "We built a robust Java Spring backend with comprehensive data collection for students, teachers, schools, and parents. The platform generates AI-powered analytics reports comparing baseline and endline assessments, with detailed government-ready documentation.",
    results: [
      "Data collection from 1,000+ schools",
      "Baseline to endline assessment tracking",
      "AI-generated funding reports",
      "Parent and teacher engagement metrics",
      "Government compliance documentation"
    ],
    technologies: ["Java Spring", "PostgreSQL", "React", "AI Analytics", "Report Generation", "REST APIs"],
    features: [
      "Multi-level data collection (school, teacher, parent)",
      "Baseline and endline assessments",
      "AI-generated analytical reports",
      "Government funding documentation",
      "Progress tracking dashboards",
      "Comparative analytics"
    ],
    liveUrl: "https://www.ahvaan.org/",
    image: dataAnalyticsImage,
    galleryImages: [
      dataAnalyticsImage,
      rocketLearningImage,
      unifyImage
    ],
    metrics: [
      { label: "Schools", value: "1,000+" },
      { label: "Students Tracked", value: "50,000+" },
      { label: "Teachers", value: "5,000+" },
      { label: "Reports Generated", value: "500+" }
    ]
  },
  {
    id: "villgro-portfolio",
    title: "Villgro Impact Portfolio",
    client: "Villgro",
    category: "Marketing",
    tagline: "Comprehensive Impact Tracking for Social Enterprise Incubator",
    description: "A unified platform tracking donations, user journeys, course purchases, product shipments, marketing tasks, and lead conversions for one of India's leading social enterprise incubators.",
    challenge: "Villgro needed a single platform to track diverse activities: donations, course purchases, product shipments, user journey through website pages, marketing team tasks, and lead conversions. The fragmented systems made holistic analysis impossible.",
    solution: "We built a comprehensive portfolio and tracking platform that integrates donation management, e-commerce for courses, shipment tracking, page-by-page user journey analytics, marketing task management, and lead conversion funnels in one unified dashboard.",
    results: [
      "Unified tracking across all activities",
      "Page-by-page user journey analytics",
      "Automated donation acknowledgments",
      "Course purchase and delivery tracking",
      "Marketing lead conversion optimization"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Analytics", "Payment Gateway", "Email Automation"],
    features: [
      "Donation tracking and management",
      "User journey page analytics",
      "Course purchase and delivery",
      "Product shipment tracking",
      "Marketing task management",
      "Lead conversion funnels"
    ],
    liveUrl: "https://villgro.org/",
    image: dataAnalyticsImage,
    galleryImages: [
      dataAnalyticsImage,
      tbfcDashboardImage,
      sbiYfiImage
    ],
    metrics: [
      { label: "Donations Tracked", value: "₹10Cr+" },
      { label: "Courses Sold", value: "1,000+" },
      { label: "Leads Converted", value: "500+" },
      { label: "Page Views", value: "100K+" }
    ]
  },
  {
    id: "digital-marketing-suite",
    title: "Digital Marketing Suite",
    client: "Internal Platform",
    category: "Marketing",
    tagline: "AI-Powered Marketing Operations Hub",
    description: "An all-in-one digital marketing platform featuring Google keyword generation, HR/IT/Accounts operations, social media lead generation, and AI-powered content creation with custom GPT integration.",
    challenge: "Managing digital marketing across multiple platforms (Facebook, Instagram, TikTok) while coordinating HR, IT, and Accounts operations required a unified solution. Manual content creation was time-consuming and inconsistent.",
    solution: "We developed a comprehensive marketing suite with AI-powered content generation using custom GPT integration, automated Google keyword research, social media lead generation tools, and integrated operations management for HR, IT, and Accounts teams.",
    results: [
      "AI-generated posts in seconds",
      "Automated Google keyword research",
      "Unified social media lead management",
      "Integrated HR/IT/Accounts operations",
      "50% reduction in content creation time"
    ],
    technologies: ["React", "Python", "GPT-4", "Google APIs", "Social Media APIs", "Custom AI Models"],
    features: [
      "Google keyword generation",
      "HR operations management",
      "IT operations tracking",
      "Accounts operations",
      "Social media lead generation",
      "AI-powered content creation"
    ],
    image: dataAnalyticsImage,
    galleryImages: [
      dataAnalyticsImage,
      tbfcDashboardImage,
      netreachImage
    ],
    metrics: [
      { label: "Content/Day", value: "50+" },
      { label: "Keywords Generated", value: "1K+" },
      { label: "Leads/Month", value: "500+" },
      { label: "Time Saved", value: "50%" }
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
