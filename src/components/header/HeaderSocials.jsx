import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
