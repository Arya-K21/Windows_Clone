"use client";

import React, { useState } from "react";
import { motion, Reorder } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

import { PROJECTS } from "@/lib/data";
import styles from "./home.module.css";

const INITIAL_PROJECTS = PROJECTS;

export const HomeView = () => {
    const [projects, setProjects] = useState(INITIAL_PROJECTS);

    return (
        <div className={styles.heroContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.heroCard}
                >
                    <h1 className={styles.heroTitle}>
                        Welcome back, User
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Explore my latest projects, skills, and experiments. 
                        Designed with a Windows 11 inspired aesthetic.
                    </p>
                </motion.div>
            </section>

            {/* Desktop / Projects Grid */}
            <section>
                <div className={styles.projectsSectionHeader}>
                    <h2 className={styles.projectsTitle}>
                        Pinned Projects
                    </h2>
                    <span className={styles.dragHint}>Drag to reorder</span>
                </div>

                <Reorder.Group 
                    axis="y" 
                    values={projects} 
                    onReorder={setProjects} 
                    className={styles.projectsGrid}
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
            <Link href={`/project/${project.slug}`} className="block h-full">
                <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${styles.projectCard} group`}
                >
                     <div className={styles.cardImageWrapper}>
                        <div className={cn("absolute inset-0 opacity-20", project.color)} />
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className={styles.cardImage}
                        />
                        <div className={`${styles.cardOverlay} group-hover:opacity-100`}>
                            <span className={styles.cardOverlayText}>
                                View details <ArrowRight size={16} />
                            </span>
                        </div>
                     </div>

                     <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                        <p className={styles.cardDescription}>
                            {project.description}
                        </p>
                        
                        <div className={styles.cardTechStack}>
                            {project.tech.map((t) => (
                                <span key={t} className={styles.cardTechBadge}>
                                    {t}
                                </span>
                            ))}
                        </div>
                     </div>
                </motion.div>
            </Link>
        </Reorder.Item>
    );
}
