import React from "react";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen">
      {/* Navbar - always on top */}
      <Navbar />

      {/* About Section */}
      <section id="about" className="pt-20 px-6 md:px-20 py-16">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-20 py-16 bg-[#1c1c2e] rounded-t-3xl">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-20 py-16">
        <Contact />
      </section>
    </div>
  );
}

export default App;
