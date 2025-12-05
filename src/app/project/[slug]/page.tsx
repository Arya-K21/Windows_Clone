import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Calendar, Layers } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto pb-10">
        <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-6 transition-colors"
        >
            <ArrowLeft size={16} />
            Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video border border-gray-200 dark:border-white/10 group">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <div className="bg-win-light-card/80 dark:bg-win-dark-card/80 backdrop-blur-md p-8 rounded-xl border border-win-light-border dark:border-win-dark-accent shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            {project.fullDescription || project.description}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-win-light-card/50 dark:bg-win-dark-card/50 p-6 rounded-xl border border-gray-200 dark:border-white/5">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <Layers size={18} className="text-blue-500" /> Key Features
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                <li>Real-time data synchronization</li>
                                <li>Responsive mobile-first design</li>
                                <li>Secure authentication flow</li>
                                <li>Cloud infrastructure setup</li>
                            </ul>
                        </div>
                         <div className="bg-win-light-card/50 dark:bg-win-dark-card/50 p-6 rounded-xl border border-gray-200 dark:border-white/5">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <Calendar size={18} className="text-blue-500" /> Timeline
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This project was completed over the course of 3 months, involving initial research, design prototyping, and iterative development sprints.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-6">
                <div className="bg-win-light-card dark:bg-win-dark-card p-6 rounded-xl border border-win-light-border dark:border-win-dark-accent shadow-lg sticky top-20">
                    <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h1>
                    <p className="text-gray-500 mb-6">{project.description}</p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md text-xs font-medium border border-blue-200 dark:border-blue-800">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <a href="#" className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                            <a href="#" className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-all">
                                <Github size={18} />
                                View Source
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
