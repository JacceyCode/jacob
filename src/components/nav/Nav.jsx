import { useState } from "react";
import "./nav.css";
import { BiSolidMessageRoundedAdd } from "react-icons/bi";
import { FaBookReader, FaHome } from "react-icons/fa";
import { FaFolderOpen, FaUser } from "react-icons/fa6";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <FaUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <FaBookReader />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}
      >
        <FaFolderOpen />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiSolidMessageRoundedAdd />
      </a>
    </nav>
  );
};

export default Nav;
