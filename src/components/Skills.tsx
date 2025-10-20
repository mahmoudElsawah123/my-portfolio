import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "React.js",
    level: 95,
    icon: "⚛️",
    description:
      "Advanced expertise in React ecosystem including hooks, context, performance optimization, and scalable component architecture",
  },
  {
    name: "Next.js",
    level: 90,
    icon: "▲",
    description:
      "Full-stack React framework experience for building production-ready, high-performance applications",
  },
  {
    name: "TypeScript",
    level: 90,
    icon: "📘",
    description:
      "Strong typing skills for building scalable and maintainable applications",
  },
  {
    name: "Tailwind CSS",
    level: 92,
    icon: "🎨",
    description:
      "Utility-first CSS framework for responsive and pixel-perfect UI design",
  },
  {
    name: "ShadCN / MUI-TailwindCSS",
    level: 88,
    icon: "🖌️",
    description:
      "UI frameworks for fast and maintainable styling of modern web applications",
  },
  {
    name: "Atomic Design",
    level: 85,
    icon: "⚡",
    description:
      "Design methodology for building scalable, reusable, and modular components",
  },
  {
    name: "Microfrontend Architecture",
    level: 80,
    icon: "🧩",
    description:
      "Experience in modularizing large applications for flexibility and maintainability",
  },
  {
    name: "GSAP",
    level: 80,
    icon: "✨",
    description:
      "Professional-grade JavaScript animation library for modern interactive web experiences",
  },
  {
    name: "Three.js",
    level: 75,
    icon: "🎯",
    description: "3D graphics and WebGL for immersive web experiences",
  },
   {
    name: "Python",
    level: 65,
    icon: "🐍",
    description:
      "Basic knowledge in Python programming for scripting and automation",
  },
  {
    name: "Node.js",
    level: 85,
    icon: "🟢",
    description: "Server-side JavaScript for full-stack development",
  },
  {
    name: "GraphQL",
    level: 80,
    icon: "📊",
    description: "Query language for APIs and runtime for executing queries",
  },
  {
    name: "SEO & Performance",
    level: 90,
    icon: "🚀",
    description:
      "Optimizing websites for speed, search engines, and overall user experience",
  },
  {
    name: "E-commerce Platforms",
    level: 85,
    icon: "🛒",
    description:
      "Developing custom themes and advanced product structuring on Salla and Zid",
  },
  {
    name: "React Native",
    level: 70,
    icon: "📱",
    description:
      "Basic experience in building mobile applications using React Native",
  },
  {
    name: "Blockchain (Basics)",
    level: 60,
    icon: "⛓️",
    description:
      "Foundational knowledge in blockchain and smart contract development",
  },
  {
    name: "AI (Basics)",
    level: 60,
    icon: "🤖",
    description:
      "Basic understanding of AI concepts and applying simple solutions",
  },
];



const SkillCard = ({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate progress bar
      gsap.fromTo(
        progressRef.current,
        { width: "0%" },
        {
          width: `${skill.level}%`,
          duration: 1.5,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [skill.level, index]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      className="card-glow p-6 group"
    >
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">{skill.name}</h3>
          <span className="text-primary font-semibold">{skill.level}%</span>
        </div>
      </div>

      <p className="text-text-secondary text-sm mb-4 leading-relaxed">
        {skill.description}
      </p>

      <div className="relative">
        <div className="w-full h-2 bg-background-secondary rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gradient-primary rounded-full relative"
            style={{ width: "0%" }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating animation for skill icons
      gsap.to(".skill-icon", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Proficient in Front-End Development with React.js, Next.js, and
            React Native. Skilled in UI/UX design using Tailwind CSS,
            ShadCN, and MUI-TailwindCSS, creating pixel-perfect and responsive
            interfaces. Experienced in performance optimization, SEO
            enhancements, Atomic Design, Microfrontend Architecture, and
            building scalable, maintainable web applications. Familiar with
            e-commerce platforms like Salla and Zid, including custom themes
            and advanced product structuring.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="skill-icon absolute top-20 left-10 text-6xl opacity-10">
            ⚛️
          </div>
          <div className="skill-icon absolute top-40 right-20 text-5xl opacity-10">
            📘
          </div>
          <div className="skill-icon absolute bottom-40 left-20 text-7xl opacity-10">
            🎨
          </div>
          <div className="skill-icon absolute bottom-20 right-10 text-5xl opacity-10">
            ✨
          </div>
        </div>
      </div>
    </section>
  );
};
