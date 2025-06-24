import React from "react";
import myCer from "../assets/mongo_cer.jpg";
import exptr from "../assets/exp.jpg";
import laundry from "../assets/laund.jpg";
import dis from "../assets/disaster.jpg";
import instagram from "../assets/insta.jpg";
import mendixIcon from "../assets/mendix.png";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiFigma } from "react-icons/si";
import { SiC, SiCplusplus, SiPython } from "react-icons/si";
import { DiJava } from "react-icons/di";

import "./styles/Projects.css";

const projectData = [
  {
    title: "Expense Tracker",
    description: "An Expense Tracking App built with React and TailwindCSS.",
    link: "https://expense-tracker-wallet-guard-3bdi.vercel.app/",
    image: exptr,
    techStack: ["React.js", "Node.js", "Firebase"],
  },
  {
    title: "Smart Laundry Rack Off Mode System",
    description:
      "An IoT-based automated laundry rack system that intelligently retracts or extends based on weather conditions.",
    link: "https://github.com/JayaNirenjan45/Smart-Laundry-Rack-System.git",
    image: laundry,
    techStack: ["IoT", "Sensors (DHT11, Rain)", "C(Arduino)"],
  },
  {
    title: "Disaster Management System",
    description: "Real-time web system for disaster alerts, response coordination, and recovery tracking.",
    link: "https://github.com/JayaNirenjan45/Disaster_Management_System.git",
    image: dis,
    techStack: ["React.js", "Node.js", "PostgerSQL"],
  },
  {
    title: "Instagram UI",
    description: "A User Inteface clone of instagram.",
    link: "https://www.figma.com/proto/GHLjowiYh2U0tnJLotxb4S/Instagram?page-id=15%3A4&node-id=228-232&viewport=1223%2C1163%2C0.27&t=z274jto6Bon0pDb5-1&scaling=scale-down&content-scaling=fixed",
    image: instagram,
    techStack: ["Figma"],
  },
];

const techSkills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#2965f1" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#f7df1e", textColor: "#000" },
  { name: "React", icon: <FaReact />, color: "#61dafb", textColor: "#000" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
  { name: "Git", icon: <FaGitAlt />, color: "#f1502f" },
  { name: "C", icon: <SiC />, color: "#555555" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
  { name: "Java", icon: <DiJava />, color: "#007396" },
  { name: "Python", icon: <SiPython />, color: "#306998" },
  { name: "Figma", icon: <SiFigma />, color: "#7c3aed", textColor: "#fff" },
{
  name: "Mendix",
  icon: <img src={mendixIcon} alt="Mendix" style={{ width: "1rem", height: "1rem" }} />,
  color: "#113984",
}
];

const certifications = [
  {
    title: "MongoDB Associated Developer",
    issuedBy: "MongoDB",
    year: 2025,
    image: myCer,
  },
];

export const Projects = () => {
  return (
    <div>
      {/* Tech Skills */}
      <section id="skills" className="skills-section">
        <h2>Tech Skills</h2>
        <div className="skills-list">
          {techSkills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-item"
              style={{
                backgroundColor: skill.color,
                color: skill.textColor || "#fff",
              }}
            >
              <span className="tech-icon">{skill.icon}</span>
              <span className="tech-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectData.map((project, idx) => (
            <div className="project-card" key={idx}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 id="titlecol">{project.title}</h3>
              <div className="project-description">{project.description}</div>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="certifications-section">
        <h2>Certifications</h2>
        <ul className="certifications-list">
          {certifications.map((cert, idx) => (
            <li key={idx} className="certification-item">
              <div className="certification-header">
                {cert.title.includes("MongoDB") && (
                  <SiMongodb
                    style={{ color: "#47A248", marginRight: "8px" }}
                  />
                )}
                <strong>{cert.title}</strong> - {cert.issuedBy} ({cert.year})
              </div>
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="cert-image-large"
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
