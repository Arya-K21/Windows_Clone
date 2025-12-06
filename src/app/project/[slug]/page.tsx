import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Calendar, Layers } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import styles from "./project.module.css";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.pageContainer} data-project={project.slug}>
        <Link 
            href="/" 
            className={styles.backLink}
        >
            <ArrowLeft size={16} />
            Back to Home
        </Link>
        
        <div className={styles.gridContainer}>
            {/* Main Content */}
            <div className={styles.mainContent}>
                <div className={`${styles.heroImageWrapper} group`}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.overviewCard}>
                        <h2 className={styles.sectionTitle}>Project Overview</h2>
                        <p className={styles.descriptionText}>
                            {project.fullDescription || project.description}
                        </p>
                    </div>
                    
                    <div className={styles.subSectionGrid}>
                        <div className={styles.subSectionCard}>
                            <h3 className={styles.subSectionHeader}>
                                <Layers size={18} className="text-blue-500" /> Key Features
                            </h3>
                            {project.features && project.features.length > 0 ? (
                                <ul className={styles.featureList}>
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 text-sm">No specific features listed.</p>
                            )}
                        </div>
                         <div className={styles.subSectionCard}>
                            <h3 className={styles.subSectionHeader}>
                                <Calendar size={18} className="text-blue-500" /> Timeline
                            </h3>
                            <p className={styles.timelineText}>
                                {project.timeline || "Timeline not specified."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Details */}
            <div className={styles.sidebar}>
                <div className={styles.sidebarCard}>
                    <h1 className={styles.projectTitle}>{project.title}</h1>
                    <p className={styles.projectDescription}>{project.description}</p>

                    <div className={styles.sidebarSection}>
                        <div>
                            <h3 className={styles.techLabel}>Technologies</h3>
                            <div className={styles.techTags}>
                                {project.tech.map((t) => (
                                    <span key={t} className={styles.techTag}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.linksContainer}>
                            {project.links?.demo && (
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={styles.primaryLink}>
                                    <ExternalLink size={18} />
                                    Live Demo
                                </a>
                            )}
                            {project.links?.repo && (
                                <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>
                                    <Github size={18} />
                                    View Source
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
