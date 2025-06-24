import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // ⬅️ Add this with other imports
import { SiLeetcode } from "react-icons/si";


// Global flag that persists across component mounts
let toastShownOnce = false;

export const Contact = () => {
  const formRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !toastShownOnce) {
          toast.info("Feel free to contact me ✉️", {
            position: "bottom-left",
            autoClose: 4000,
            theme: "colored",
          });
          toastShownOnce = true;
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e6gp6ri",
        "template_cuzs92q",
        formRef.current,
        "I69P82eqMZodJYGTZ"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "bottom-left",
          });
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again.", {
            position: "bottom-left",
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <h2>Contact Me</h2>
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="1" required />
        <button type="submit">Send Message</button>
      </form>
      <div className="social-container">
  <div className="social-links">
    <a
      href="https://www.linkedin.com/in/jayanirenjan"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/JayaNirenjan45"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>
    <a
      href="https://leetcode.com/u/JAYA_NIRENJAN/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      aria-label="Leetcode"
    >
      <SiLeetcode />
    </a>
  </div>
  <div className="footer-credit">
  <p className="footer-text">
          © {new Date().getFullYear()} Jaya Nirenjan. All rights reserved.
        </p>  </div>
</div>


      <ToastContainer />
    </section>
  );
};
