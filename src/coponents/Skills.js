import React from "react";
import { motion } from "framer-motion";
import { IoCodeSlash, IoSettingsOutline } from "react-icons/io5";
import { AiFillDatabase } from "react-icons/ai";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { IoLogoFirebase, IoLogoFigma } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FcLinux } from "react-icons/fc";

const frontendSkills = [
  { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: 88, icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React.js", level: 90, icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", level: 92, icon: <RiTailwindCssFill className="text-sky-400" /> },
  { name: "Next.js", level: 82, icon: <RiNextjsFill className="text-slate-100" /> },
];

const backendSkills = [
  { name: "Node.js", level: 85, icon: <FaNodeJs className="text-emerald-500" /> },
  { name: "Express.js", level: 85, icon: <SiExpress className="text-slate-200" /> },
  { name: "MongoDB", level: 88, icon: <SiMongodb className="text-emerald-400" /> },
  { name: "Firebase", level: 78, icon: <IoLogoFirebase className="text-amber-500" /> },
  { name: "REST APIs", level: 90, icon: <TbApi className="text-blue-400" /> },
];

const toolsSkills = [
  { name: "Git", level: 90, icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", level: 92, icon: <FaGithub className="text-slate-100" /> },
  { name: "VS Code", level: 95, icon: <VscVscode className="text-blue-500" /> },
  { name: "Figma", level: 80, icon: <IoLogoFigma className="text-pink-500" /> },
  { name: "Postman", level: 85, icon: <SiPostman className="text-orange-500" /> },
  { name: "Linux / CLI", level: 75, icon: <FcLinux /> },
];

function SkillCategory({ title, icon, skills }) {
  return (
    <div className="w-full mb-12">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 text-2xl shadow-md">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100">{title}</h3>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-500/40 via-blue-500/10 to-transparent ml-2"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card p-5 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 flex flex-col justify-between gap-3 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="text-3xl p-2 rounded-xl bg-slate-900/80 border border-slate-800 group-hover:scale-110 transition duration-300">
                  {skill.icon}
                </div>
                <span className="font-bold text-slate-100 text-base">{skill.name}</span>
              </div>
              <span className="text-sm font-bold text-blue-400 font-mono">{skill.level}%</span>
            </div>

            {/* Glowing Progress Bar */}
            <div className="w-full bg-slate-900/80 h-2 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 rounded-full relative"
              >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full blur-[1px]"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 text-white relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-11/12 max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Technical <span className="text-gradient">Skillset</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Technologies, frameworks, and developer tools I leverage to build enterprise-ready web platforms.
          </p>
        </div>

        {/* Skill Categories */}
        <SkillCategory title="Frontend Development" icon={<IoCodeSlash />} skills={frontendSkills} />
        <SkillCategory title="Backend Development" icon={<AiFillDatabase />} skills={backendSkills} />
        <SkillCategory title="Tools & Infrastructure" icon={<IoSettingsOutline />} skills={toolsSkills} />
      </div>
    </section>
  );
}

export default Skills;