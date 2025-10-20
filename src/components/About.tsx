import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Code, label: "Projects Completed", value: "20+" },
  { icon: Users, label: "Happy Clients", value: "10+" },
  { icon: Rocket, label: "Years Experience", value: "3+" },
  { icon: Palette, label: "Technologies", value: "10+" },
];

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.fromTo(
        ".about-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      // Animate stats
      gsap.fromTo(
        ".stat-item",
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
         <p className="text-xl text-text-secondary max-w-3xl mx-auto">
  Passionate Front-End Developer with 3 years of experience building
  high-performance web applications using React.js and Next.js.
  Skilled in writing clean code, designing engaging user interfaces,
  and optimizing website performance and user experience. 
  Graduated with a B.Sc. in Computer Science with Very Good honors, 
  I am innovative and dedicated to delivering efficient, scalable digital solutions following best practices.
</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
  {/* My Journey */}
  <div className="about-card card-glow p-8">
    <h3 className="text-2xl font-bold mb-4 gradient-text">
      My Journey
    </h3>
    <p className="text-text-secondary leading-relaxed mb-6">
      Graduated with a B.Sc. in Computer Science with honors (Very Good). Started my career as a Junior Front-End Developer and have worked in 4 companies, building dynamic web applications using Next.js and React.js, including multilingual and e-commerce projects.
    </p>
    <p className="text-text-secondary leading-relaxed">
      Progressed to more advanced roles, implementing performance optimization techniques, Atomic Design, Microfrontend Architecture, and mentoring junior developers. Known for delivering scalable, maintainable, and user-friendly digital solutions on time.
    </p>
  </div>

  {/* What I Do */}
  <div className="about-card card-glow p-8">
    <h3 className="text-2xl font-bold mb-4 gradient-text">What I Do</h3>
    <ul className="space-y-4 text-text-secondary">
      <li className="flex items-start">
        <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
        <span>
          Front-End Development with React.js, Next.js, React Native, and modern frameworks
        </span>
      </li>
      <li className="flex items-start">
        <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
        <span>
          UI/UX design using Tailwind CSS, ShadCN, MUI-TailwindCSS, with pixel-perfect precision
        </span>
      </li>
      <li className="flex items-start">
        <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
        <span>
          Performance optimization, SEO improvements, responsive and accessible interfaces
        </span>
      </li>
      <li className="flex items-start">
        <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
        <span>
          Experience with Atomic Design, Microfrontend Architecture, and scalable dashboard development
        </span>
      </li>
      <li className="flex items-start">
        <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
        <span>
          E-commerce development with Salla and Zid, including custom themes and advanced product structuring
        </span>
      </li>
    </ul>
  </div>
</div>
        {/* Stats */}
        <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item text-center p-6 card-glow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-background" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
