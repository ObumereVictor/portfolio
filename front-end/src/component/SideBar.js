import { FaTimes } from "react-icons/fa";

const SideBar = ({ handleHideSideBar }) => {
  return (
    <section className="sideBar">
      <FaTimes onClick={handleHideSideBar} className="hide" />

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
    </section>
  );
};

export default SideBar;
