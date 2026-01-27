import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import dashboardImg from "@/assets/project-dashboard.jpg";
import socialImg from "@/assets/project-social.jpg";
import berylAiImg from "@/assets/berylAiImg.png";
import fourPImg from "@/assets/fourPImg.png";
import raysinCarImg from "@/assets/raysinCarImg.png";
import justiceDashboardImg from "@/assets/justiceDashboardImg.png";
import deltawyImg from "@/assets/deltawyImg.png";
import souqMahalaImg from "@/assets/souqMahalaImg.png";
import babSharqiImg from "@/assets/babSharqiImg.png";
import daffahImg from "@/assets/daffahImg.png";
import alNassrStoreImg from "@/assets/alNassrStoreImg.png";
import nextjsPerformanceBoosterImg from "@/assets/npm.png";
import alJazeaPharmacyImg from "@/assets/alJazeaPharmacyImg.png";
import waslnyDashboardImg from "@/assets/waslnyDashboardImg.png";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  // {
  //   id: 6,
  //   title: "Souq Mahala – Local E-Commerce Marketplace",
  //   description:
  //     "Souq Mahala is a local online marketplace designed for El-Mahalla city. It connects local stores and customers through a unified platform that features categorized shopping, product search, offers, and merchant dashboards. The system provides secure payment, 24/7 support, and a dedicated mobile app for seamless access.",
  //   image: souqMahalaImg,
  //   technologies: [
  //     "Next.js",
  //     "React",
  //     "Tailwind CSS",
  //     "Stripe / Local Payment Gateway",
  //   ],
  //   liveUrl: "https://souq-mahala.com",
  //   githubUrl: "",
  //   featured: true,
  // },
  {
    id: 1,
    title: "Seela AI",
    description:
      "An advanced AI-driven automation platform designed to optimize compliance, streamline document processing, and enhance business efficiency. Built with a modern stack and featuring modular AI services including data extraction, document translation, fraud detection, and AI chatbots.",
    image: berylAiImg,
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Cloud Deployment",
    ],
    liveUrl: "https://www.seelaai.com/en",
    githubUrl: "#",
    featured: true,
    highlights: [
      "AI-powered data extraction from unstructured documents like PDFs and invoices",
      "Automated multilingual document translation with format preservation",
      "Fraud detection for invoices and bank statements using AI models",
      "Smart AI chatbots with real-time multilingual communication and CRM integration",
      "Cloud-native, scalable, and secure architecture with flexible deployment options (Cloud / Hybrid / On-premise)",
    ],
  },
  {
    id: 10,
    title: "Al Nassr Official Store – Saudi Football Club E-Commerce",
    description:
      "Al Nassr Official Store is the e-commerce platform for Al Nassr Football Club, offering official kits, player jerseys, training gear, and accessories for fans worldwide. The store features customizable jerseys, multiple size options, safe payment methods, fast delivery, and seasonal collections for the 2025/26 season.",
    image: alNassrStoreImg,
    technologies: [
      "Next.js",
      "React",
      "Zid Integration",
      "Microfrontend Custom Components",
      "Twig Template Engine",
      "Tailwind CSS",
    ],
    liveUrl: "https://store.alnassr.sa",
    githubUrl: "",
    featured: true,
  },
  {
    id: 7,
    title: "Bab Sharqi – Premium Arabic Sweets Store",
    description:
      "Bab Sharqi is an online store built for authentic Arabic sweets lovers. It offers a rich selection of products such as Baklava, Petit Four, and Eastern delicacies. The platform features a modern shopping experience with categorized listings, product search, secure checkout, and newsletter subscriptions, all developed with performance and UX in mind. Built with full support for Arabic and English languages, optimized for SEO and responsive on all devices.",
    image: babSharqiImg,
    technologies: [
      "React",
      "Tailwind CSS",
      "Zid Integration",
      "Microfrontend Custom Components",
      "Twig Template Engine",
      "Localization (Arabic/English)",
    ],
    liveUrl: "https://babsharqi.zid.store",
    githubUrl: "",
    featured: true,
  },
  {
    id: 11,
    title: "Waslny – Customizable Admin Dashboard",
    description:
      "Waslny is a highly customizable admin dashboard template originally built with Vuexy on multiple frameworks (Next.js, React, HTML). I worked extensively on customizing it for different clients, implementing dashboards, analytics, eCommerce management, logistics tracking, user and role management, charts, reports, and various UI tweaks. Note: I customized and extended the template multiple times but did not build it from scratch.",
    image: waslnyDashboardImg,
    technologies: [
      "Next.js",
      "React",
      "Vuexy Admin Template",
      "TailwindCSS / MUI",
      "Custom Dashboard Customization",
      "Charts.js / ApexCharts",
    ],
    liveUrl: "https://golden-waste.vercel.app/en/dashboards/ecommerce",
    githubUrl: "",
    featured: true,
  },
  {
    id: 8,
    title: "Daffah – Luxury Traditional Clothing Brand",
    description:
      "Daffah is a premium Saudi brand specializing in high-quality traditional clothing. The platform showcases elegant and ready-made thobes crafted with attention to detail and modern fashion trends. It provides customers with a seamless shopping experience that includes product browsing, multiple payment options, return and shipping policies, and branch information. The website reflects the brand’s commitment to quality, elegance, and customer satisfaction.",
    image: daffahImg,
    technologies: [
      "React",
      "Tailwind CSS",
      "Zid Integration",
      "Microfrontend Custom Components",
      "Twig Template Engine",
      "Responsive Design",
    ],
    liveUrl: "https://daffah.sa",
    githubUrl: "",
    featured: true,
  },
  {
    id: 9,
    title: "Al Jazea Pharmacy – Online Healthcare & Pharmacy Services",
    description:
      "Al Jazea Pharmacy, established in 1986, offers comprehensive healthcare and pharmaceutical services online. It provides prescription fulfillment, vitamins and supplements, personal care, baby and mother care, and medical devices, along with easy online consultations. The platform ensures secure orders, reliable delivery, and continuous customer support.",
    image: alJazeaPharmacyImg,
    technologies: [
      "React",
      "Tailwind CSS",
      "Stripe / Local Payment Gateway",
      "Zid Integration",
      "Custom Pharmacy Management System",
    ],
    liveUrl: "https://aljazeaonline.com",
    githubUrl: "",
    featured: true,
  },
  {
    id: 5555,
    title: "Next.js Performance Booster – Optimized Next.js Setup",
    description:
      "Next.js Performance Booster is a developer tool designed to optimize Next.js projects with enhanced performance settings, TailwindCSS integration, and optional UI libraries. It automates installation, configuration, and optimization to ensure fast, modular, and maintainable applications.",
    image: nextjsPerformanceBoosterImg,
    technologies: [
      "Next.js (Latest version)",
      "React & ReactDOM",
      "TailwindCSS (with PurgeCSS)",
      "ShadCN / Flowbite / DaisyUI / Material Tailwind",
      "Inquirer.js",
    ],
    liveUrl: "https://www.npmjs.com/package/nextjs-performance-booster",
    githubUrl:
      "https://github.com/mahmoudElsawah123/nextjs-performance-booster",
    featured: false,
  },
  {
    id: 2,
    title: "4P Marketing Hub – Smart Shopping & Deals Platform",
    description:
      "A comprehensive marketing and deals platform that connects users with top brands, categories, and exclusive discounts through the 4P Card system. The platform offers an engaging experience featuring categorized listings, business pages, news updates, and app integration for seamless shopping and savings.",
    image: fourPImg,
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Payment Gateway (PayMob)",
    ],
    liveUrl: "https://4papp.com/en",
    githubUrl: "#",
    featured: true,
    highlights: [
      "Comprehensive category-based listing covering fashion, fitness, medical, and more",
      "Integrated news and media section for latest updates and events",
      "Exclusive membership system (4P Card) with rewards and premium discounts",
      "Mobile app integration for iOS and Android with real-time offers",
      "Dynamic business profiles and store discovery with trusted partners",
      "Modern, responsive, and SEO-optimized design for better reach",
    ],
  },
  {
    id: 3,
    title: "Raysin Car – Italian Used Cars Marketplace",
    description:
      "A professional automotive marketplace built for Raysin Car Srls, an Italian startup specializing in buying and selling used vehicles. The platform allows users to browse, buy, and sell cars seamlessly, featuring advanced filtering, detailed listings, and contact integration for direct communication with the dealership.",
    image: raysinCarImg,
    technologies: ["React", "Node.js", "Tailwind CSS", "EmailJS"],
    liveUrl: "https://rysincarsrls.vercel.app/",
    githubUrl: "#",
    featured: true,
    highlights: [
      "Built for Raysin Car Srls – a Rome-based used car dealership founded in 2023",
      "Browse multiple car categories: SUV, Sedan, Convertible, Hatchback, and more",
      "Supports buying and selling with detailed vehicle specifications and images",
      "User-friendly interface with direct WhatsApp and phone contact options",
      "Fast, mobile-responsive, and optimized for Italian market SEO",
      "Includes information about warranties, trade-ins, and quick car search by request",
    ],
  },
  {
    id: 4,
    title: "Iraqi Ministry of Justice – Data Management Dashboard",
    description:
      "An advanced administrative dashboard built for the Iraqi Ministry of Justice to manage and organize records efficiently. The system allows users to create, edit, and delete records, each containing multiple books, while providing full control over user roles, permissions, and access levels.",
    image: justiceDashboardImg,
    technologies: ["React", "TypeScript", "Redux Toolkit", "MUI", "scss"],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    isProtected: true,
    highlights: [
      "Centralized dashboard for managing Ministry of Justice data",
      "Supports CRUD operations for records and nested books",
      "Advanced user management with role-based access control (RBAC)",
      "Secure authentication and authorization layers",
      "Modern, responsive UI for smooth user experience",
      "Audit logs and activity tracking for administrative actions",
    ],
  },
  {
    id: 5,
    title: "Deltawy – Local Business & Services Directory",
    description:
      "A comprehensive online directory platform designed to organize and showcase businesses, services, and job listings across El-Mahalla and the Delta region. Deltawy helps users easily search, browse, and discover local businesses through categorized listings, advanced filters, and location-based search.",
    image: deltawyImg,
    technologies: ["Next.js", "React", "Tailwind CSS", "Redux", "react query"],
    liveUrl: "https://deltawy.net",
    githubUrl: "#",
    featured: true,
    highlights: [
      "Comprehensive local directory for El-Mahalla and Delta region",
      "Dynamic business categories with advanced filtering and search",
      "Integrated job listings and advertisement sections",
      "Supports user registration and business submissions",
      "SEO-optimized with responsive design for all devices",
      "Includes statistics dashboard for pages, ads, and visitors count",
    ],
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
        },
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  const handleProjectClick = (url: string | null) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const isPrivate = !project.githubUrl || project.githubUrl === "#";
  const isProtected = project.isProtected;

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`card-glow overflow-hidden group ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={() => handleProjectClick(project.liveUrl)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="outline"
            className="glass"
            onClick={(e) => {
              e.stopPropagation();
              handleProjectClick(project.liveUrl);
            }}
          >
            <Eye className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="glass"
            onClick={(e) => {
              e.stopPropagation();
              if (isPrivate) return;
              handleProjectClick(project.githubUrl);
            }}
            disabled={isPrivate}
          >
            {isPrivate ? (
              <Lock className="w-4 h-4" />
            ) : (
              <Github className="w-4 h-4" />
            )}
          </Button>
          <Button
            size="sm"
            className="btn-glow"
            onClick={(e) => {
              e.stopPropagation();
              handleProjectClick(project.liveUrl);
            }}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="p-6">
        <h3
          className="text-2xl font-bold mb-3 gradient-text cursor-pointer hover:text-primary transition-colors"
          onClick={() => handleProjectClick(project.liveUrl)}
        >
          {project.title}
        </h3>
        <p className="text-text-secondary leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {isProtected ? (
            <div className="flex items-center gap-2 text-text-secondary">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Protected Project</span>
            </div>
          ) : (
            <>
              <Button
                size="sm"
                className="btn-glow"
                onClick={() => handleProjectClick(project.liveUrl)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="glass"
                onClick={() => handleProjectClick(project.githubUrl)}
                disabled={isPrivate}
              >
                {isPrivate ? (
                  <>
                    <Lock className="w-4 h-4 mr-2" />
                    Private
                  </>
                ) : (
                  <>
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </>
                )}
              </Button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Separate featured and non-featured projects
  const featuredProjects = projects.filter((project) => project.featured);
  const nonFeaturedProjects = projects.filter((project) => !project.featured);

  // Create a combined array where non-featured projects are placed next to featured ones
  const renderProjects = () => {
    const result = [];
    let nonFeaturedIndex = 0;

    for (let i = 0; i < featuredProjects.length; i++) {
      const featuredProject = featuredProjects[i];
      result.push(
        <ProjectCard
          key={featuredProject.id}
          project={featuredProject}
          index={i}
        />,
      );

      // Add a non-featured project next to this featured one if available
      if (nonFeaturedIndex < nonFeaturedProjects.length) {
        const nonFeaturedProject = nonFeaturedProjects[nonFeaturedIndex];
        result.push(
          <ProjectCard
            key={nonFeaturedProject.id}
            project={nonFeaturedProject}
            index={i + 0.5}
          />,
        );
        nonFeaturedIndex++;
      }
    }

    return result;
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A showcase of my work across e-commerce platforms, admin dashboards,
            and web applications. Built using **React.js, Next.js, Tailwind CSS,
            Microfrontend Architecture**, and modern UI frameworks. Each project
            demonstrates scalable, maintainable solutions, responsive design,
            and optimized user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderProjects()}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/mahmoudElsawah123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="glass">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
