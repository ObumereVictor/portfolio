import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ id, title, projectLang, about, gitHub, link }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{about}</p>
      <ul className="project-lang">
        {projectLang.map((lang, index) => {
          return (
            <div key={index}>
              <li className="project-lang-item">{lang}</li>
            </div>
          );
        })}
      </ul>
      <div className="project-links">
        <a href={gitHub} rel="noreferrer" target="_blank">
          <FaGithub />
        </a>
        <a href={link} rel="noreferrer" target="_blank">
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default Project;
