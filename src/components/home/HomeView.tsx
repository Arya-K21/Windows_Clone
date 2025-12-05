"use client";

import React, { useState } from "react";
import { motion, Reorder } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

import { PROJECTS } from "@/lib/data";

const INITIAL_PROJECTS = PROJECTS;

export const HomeView = () => {
    const [projects, setProjects] = useState(INITIAL_PROJECTS);

    return (
        <div className="space-y-8 pb-10">
            {/* Hero Section */}
            <section className="flex flex-col items-start justify-center min-h-[40vh] py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 max-w-2xl bg-white/30 dark:bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg"
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                        Welcome back, User
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
                        Explore my latest projects, skills, and experiments. 
                        Designed with a Windows 11 inspired aesthetic.
                    </p>
                </motion.div>
            </section>

            {/* Desktop / Projects Grid */}
            <section>
                <div className="flex items-center justify-between mb-6 px-2">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                        Pinned Projects
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Drag to reorder</span>
                </div>

                <Reorder.Group 
                    axis="y" 
                    values={projects} 
                    onReorder={setProjects} 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </Reorder.Group>
            </section>
        </div>
    );
};

const ProjectCard = ({ project }: { project: typeof INITIAL_PROJECTS[0] }) => {
    return (
        <Reorder.Item value={project} id={project.id} className="h-full">
            <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-win-light-card/60 dark:bg-win-dark-card/60 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer"
            >
                 <div className="relative h-48 w-full overflow-hidden">
                    <div className={cn("absolute inset-0 opacity-20", project.color)} />
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                        <span className="text-white font-medium flex items-center gap-2">
                            View details <ArrowRight size={16} />
                        </span>
                    </div>
                 </div>

                 <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-1">
                        {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t) => (
                            <span key={t} className="text-xs px-2 py-1 bg-white/50 dark:bg-white/10 rounded-md border border-white/20 text-gray-700 dark:text-gray-300">
                                {t}
                            </span>
                        ))}
                    </div>
                 </div>
            </motion.div>
        </Reorder.Item>
    );
}
