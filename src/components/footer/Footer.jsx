import "./footer.css";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        JOA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/jacob-oluwasesan-adebayo/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/JacceyCode" target="_blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com/code_sesan" target="_blank">
          <FaXTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Jacob, {new Date().getFullYear()}. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
