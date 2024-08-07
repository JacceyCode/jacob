import { useEffect, useRef } from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/developer2.jpg";
import HeaderSocials from "./HeaderSocials";
import Typed from "typed.js";

const Header = () => {
  const type = useRef();

  useEffect(() => {
    var typed = new Typed(type.current, {
      strings: [
        "Software Developer...",
        "FullStack Developer...",
        "Frontend Developer...",
        "Backend Developer...",
        "Mobile Developer...",
      ],
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 300,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello 👋, I&apos;m</h5>
        <h1 style={{ fontSize: "35px" }}>Jacob Oluwasesan Adebayo</h1>
        <div className="typed__js">
          <span ref={type}></span>
        </div>
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
