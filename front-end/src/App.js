import React, { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { FaBars, FaLinkedin, FaGithub } from "react-icons/fa";
import { projectData, skills } from "./utils/data.js";
import Project from "./component/project.js";
import SideBar from "./component/SideBar.js";
import { Buffer } from "buffer";

const url = "http://localhost:3001";

const Home = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  // HANDLE DOWNLOAD RESUME
  const downloadResume = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        url,

        {
          responseType: "arraybuffer",
          headers: {
            Accept: "application/pdf",
          },
        }
      );
      // alert(response);
      let buffer = Buffer.from(response.data);
      let arrayBuffer = Uint8Array.from(buffer).buffer;
      saveAs(
        new Blob([arrayBuffer], { type: "application/pdf" }),
        "VICTORScv.pdf"
      );
      console.log(response);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  // HANDLE SHOW SIDEBAR
  const handleShowSideBar = (event) => {
    event.preventDefault();
    setShowSideBar(true);
  };

  // HANDLE HIDE SIDEBAR
  const handleHideSideBar = (event) => {
    event.preventDefault();
    setShowSideBar(false);
  };

  return (
    <main>
      {/* HEADER */}
      <header className="header">
        <h2>VO.</h2>
        <div className="links">
          <ul>
            <li>
              <a href="#projects" rel="noreferrer">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#skills" rel="noreferrer">
                SKILLS
              </a>
            </li>
            <li>
              <a href="#contact" rel="noreferrer">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div
          onClick={handleShowSideBar}
          className={showSideBar ? "toogle active" : "toggle"}
        >
          <FaBars className="show" />
        </div>
      </header>

      {/* ABOUT */}
      <section className="about" id="about">
        <h2>
          Hi, I am <h2 className="name">Victor Obumere(ALTCODE)</h2>
        </h2>
        <h2>A Full Stack Developer</h2>
        <p>
          I am responsible for the design and construction of websites to meet
          user expectations{" "}
        </p>

        <article>
          <a
            className="resume"
            href="https://api-victor-obumere-jg5b.onrender.com"
            download={"Victor-Obumere-CV.pdf"}
          >
            Resume
          </a>

          <div>
            <a
              href="https://github.com/ObumereVictor"
              target="_blank"
              rel="noreferrer"
              className="my-links"
            >
              <FaGithub />
            </a>

            {/* <a
              href={"https://api-victor-obumere-jg5b.onrender.com"}
              download={"VICTORScv.pdf"}
              title="VICTOR CV "
            >
              Mobile
            </a> */}

            <a
              href="https://www.linkedin.com/in/victor-obumere-84b140122/"
              target="_blank"
              rel="noreferrer"
              className="my-links"
            >
              <FaLinkedin />
            </a>
          </div>
        </article>
      </section>

      {/* PROJECTS */}
      <section className="section projects " id="projects">
        <h1>PROJECTS</h1>
        <div className="projects-div">
          {projectData.map((project) => {
            const { id, title, about, lang, link, gitHub } = project;
            return (
              <Project
                key={id}
                title={title}
                about={about}
                projectLang={lang}
                link={link}
                gitHub={gitHub}
              />
            );
          })}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills" id="skills">
        <h1>SKILLS</h1>
        <ul className="skills-list">
          {skills.map((skills) => {
            const { id, skill } = skills;
            return (
              <li
                className="skill-list-item skills-btn skills-btn-plain"
                key={id}
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h1>CONTACT</h1>
        <a href="mailto:alternatecode@hotmail.com">Email Me</a>
      </section>

      {/* FOOTER */}
      <footer>
        <h3>Created by ALTCODE</h3>
      </footer>
      {showSideBar && <SideBar handleHideSideBar={handleHideSideBar} />}
    </main>
  );
};
// put job decription as cv

export default Home;
