import "./about.css";
import ME from "../../assets/developer.jpg";
import { FaAward, FaFolderClosed } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <FaFolderClosed className="about__icon" />
              <h5>Projects</h5>
              <small>50+ completed</small>
            </article>
          </div>

          <p>
            A full stack developer with experience in developing both web and
            mobile applications, skilled at transforming innovative concepts
            into valuable products. <br /> I excel at improving products digital
            footprint and optimizing products for superior performance and user
            experiences.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
