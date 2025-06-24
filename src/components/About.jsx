import React, { useEffect, useState } from "react";
import "./styles/About.css";
import myImage from "../assets/profile.jpg";
import resume  from "../assets/MyResume.pdf"
import { FaEye, FaDownload } from "react-icons/fa"; 

const texts = ["Jaya Nirenjan A C", "Mendix Developer"];


const LeetCodeCard = ({ username }) => {
  const imageUrl = `https://leetcard.jacoblin.cool/${username}?theme=dark&ext=contest`;

  return (
    <div className="leetcode-section">

      {/* Resume Buttons */}
      <div className="resume-buttons">
        <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-btn">
          <FaEye style={{ marginRight: "8px" }} />
          View Resume
        </a>
        <a href={resume} download="JayaNirenjan_Resume.pdf" className="resume-btn">
          <FaDownload style={{ marginRight: "8px" }} />
          Download Resume
        </a>
      </div>
      <h3>LeetCode Stats</h3>
      <img src={imageUrl} alt="LeetCode Stats" className="leetcode-image" />
    </div>
  );
};



export const About = () => {
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseBeforeDelete = 1500;
  const pauseBeforeType = 500;

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      }
    }

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, pauseBeforeType);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section id="about" className="about-section">
      <div className="about-image-wrapper">
        <div className="ring"></div>
        <img src={myImage} alt="Profile" className="about-image" />
        <h1 className="typewriter-name">{displayText}</h1>
      </div>

      <div className="about-content">
        <div className="about-text-container">
          <h2 className="ab">About Me</h2>
          <p className="about-text">
            <b>
              I'm a passionate developer who builds clean, elegant, and performant websites and apps.
              Whether it's crafting responsive UIs or solving complex problems, I love turning ideas
              into beautiful digital experiences. Let's build something awesome together.
            </b>
          </p>

          <div className="education-section">
            <h3>Education</h3>
            <div className="education-table">
              <div className="edu-row header">
                <div>Qualification</div>
                <div>Institution</div>
                <div>Year</div>
                <div>Percentage</div>
              </div>

              <div className="edu-row">
                <div>B.E. Computer Science</div>
                <div>Kongu Engineering College</div>
                <div>2022 – 2026</div>
                <div>CGPA: 8.5 (5th SEM)</div>
              </div>

              <div className="edu-row">
                <div>HSC</div>
                <div>Velalar Vidyalayaa Sr. Sec. School</div>
                <div>2022</div>
                <div>89.4%</div>
              </div>

              <div className="edu-row">
                <div>SSLC</div>
                <div>Velalar Vidyalayaa Sr. Sec. School</div>
                <div>2020</div>
                <div>85.6%</div>
              </div>
            </div>
          </div>  

          {/* LeetCode Card Section */}
          <LeetCodeCard username="JAYA_NIRENJAN" />

          <a href="#contact" className="contact-button">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};
