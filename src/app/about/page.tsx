"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, Layout, Globe, Terminal } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-10">
      
      {/* Profile Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-win-light-card/80 dark:bg-win-dark-card/80 backdrop-blur-xl border border-win-light-border dark:border-win-dark-accent rounded-xl overflow-hidden shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
      >
          <div className="relative w-40 h-40 shrink-0">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
             <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                 {/* Placeholder for avatar */}
                 <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-4xl">
                     👨‍💻
                 </div>
             </div>
          </div>
          
          <div className="text-center md:text-left space-y-4 flex-1">
              <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Full Stack Developer
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Hi, I'm a passionate developer crafting intuitive user experiences and robust backend systems. 
                  I specialize in the React ecosystem and modern web technologies. 
                  Inspired by clean design and performant code.
              </p>
              <div className="flex gap-4 justify-center md:justify-start pt-2">
                  <Badge>Open Source Contributor</Badge>
                  <Badge>UI/UX Enthusiast</Badge>
                  <Badge>Tech Writer</Badge>
              </div>
          </div>
      </motion.section>

      {/* Skills Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            icon={Layout} 
            title="Frontend Development" 
            skills={["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux / Zustand"]}
            delay={0.1}
          />
          <SkillCard 
            icon={Database} 
            title="Backend Engineering" 
            skills={["Node.js / Express", "PostgreSQL", "Prisma / TypeORM", "GraphQL", "Redis"]}
            delay={0.2}
          />
           <SkillCard 
            icon={Cpu} 
            title="DevOps & Cloud" 
            skills={["AWS", "Docker / Kubernetes", "CI/CD Pipelines", "Vercel", "Linux Administration"]}
            delay={0.3}
          />
      </section>

      {/* Experience Timeline Window */}
      <motion.section 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="bg-win-light-card/60 dark:bg-win-dark-card/60 backdrop-blur-md rounded-xl border border-win-light-border dark:border-win-dark-accent p-6"
      >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Terminal size={24} className="text-blue-500" />
              <span>Experience Log</span>
          </h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent dark:before:via-gray-700">
             
             <TimelineItem 
               role="Senior Frontend Engineer"
               company="TechCorp Inc."
               period="2022 - Present"
               description="Leading the frontend migration to Next.js 14. Improved Core Web Vitals by 40%."
             />
             <TimelineItem 
               role="Full Stack Developer"
               company="StartUp Studio"
               period="2020 - 2022"
               description="Built MVP for 3 successful SaaS products. Managed cloud infrastructure and deployments."
             />
             <TimelineItem 
               role="Junior Developer"
               company="WebSolutions Ltd."
               period="2018 - 2020"
               description="Developed responsive websites and maintained legacy codebases."
             />

          </div>
      </motion.section>

    </div>
  );
}

const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-200 dark:border-blue-800">
        {children}
    </span>
);

const SkillCard = ({ icon: Icon, title, skills, delay }: { icon: any, title: string, skills: string[], delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.4 }}
        className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-400 transition-colors group cursor-default"
    >
        <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">{title}</h3>
        <ul className="space-y-2">
            {skills.map(skill => (
                <li key={skill} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {skill}
                </li>
            ))}
        </ul>
    </motion.div>
);

const TimelineItem = ({ role, company, period, description }: { role: string, company: string, period: string, description: string }) => (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-xs text-gray-500 font-bold">
            {period.split(' ')[0]}
        </div>
        
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-win-dark-card p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-gray-800 dark:text-white">{role}</h3>
                <time className="font-mono text-xs text-gray-500">{period}</time>
            </div>
            <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">{company}</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
                {description}
            </p>
        </div>
    </div>
);
