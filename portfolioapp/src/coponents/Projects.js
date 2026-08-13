import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiFolder, FiStar } from "react-icons/fi";
import { IoSparkles } from "react-icons/io5";

import projectEcommerce from "./project_ecommerce.png";
import projectSaas from "./project_saas.png";
import projectSocial from "./project_social.png";

const projectsData = [
  {
    id: 1,
    title: "NexusShop - Full Stack E-Commerce Platform",
    category: "Full Stack",
    description:
      "A feature-rich digital marketplace featuring real-time inventory tracking, Stripe payments, JWT auth, admin analytics, and dark mode interface.",
    image: projectEcommerce,
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Stripe"],
    liveUrl: "https://github.com/pandeyravi2891",
    githubUrl: "https://github.com/pandeyravi2891",
    featured: true,
  },
  {
    id: 2,
    title: "PulseAI - Analytics & Automation Dashboard",
    category: "Next.js / Node",
    description:
      "AI-driven metrics dashboard with real-time data visualizer, custom report generator, automated AI prompts, and glassmorphic telemetry UI.",
    image: projectSaas,
    tags: ["Next.js", "React", "Tailwind CSS", "Node.js", "OpenAI API", "Recharts"],
    liveUrl: "https://github.com/pandeyravi2891",
    githubUrl: "https://github.com/pandeyravi2891",
    featured: true,
  },
  {
    id: 3,
    title: "TaskSync - Real-Time Collaboration Workspace",
    category: "React",
    description:
      "Real-time kanban & team messaging platform with live drag-and-drop boards, WebSockets notification system, and role-based access control.",
    image: projectSocial,
    tags: ["React", "Socket.io", "Express", "Node.js", "MongoDB", "Framer Motion"],
    liveUrl: "https://github.com/pandeyravi2891",
    githubUrl: "https://github.com/pandeyravi2891",
    featured: true,
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = ["All", "Full Stack", "React", "Next.js / Node"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden text-white">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-11/12 max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
            <IoSparkles className="text-blue-400 animate-spin" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Recent <span className="text-gradient">Projects</span> & Applications
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Here are some of the full-stack web applications, tools, and user interfaces I've built with modern technologies.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mt-8 p-1.5 rounded-2xl glass-card border border-blue-500/20">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl overflow-hidden border border-blue-500/20 flex flex-col justify-between group hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-900/30"
            >
              <div>
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/40 backdrop-blur-md flex items-center gap-1 shadow-md">
                      <FiStar className="fill-white text-xs" /> Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase">
                    <FiFolder className="text-sm" />
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-t border-slate-800/60 mt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white font-semibold py-2.5 px-4 rounded-xl border border-blue-500/30 text-xs transition-all duration-300 shadow-md group/btn"
                >
                  <span>Live Preview</span>
                  <FiExternalLink className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 hover:border-blue-500/40 text-sm transition-all duration-300"
                  title="Source Code"
                >
                  <FiGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
