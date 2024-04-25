import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/developer2.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I&apos;m</h5>
        <h1>Jacob Adebayo</h1>
        <h5 className="text-light">Full-Stack Developer | Mobile Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
