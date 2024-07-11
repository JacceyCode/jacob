import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa6";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiSupabase,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import SQL from "../../assets/sql.png";
import PYTHON from "../../assets/pyt.png";
import DJANGO from "../../assets/dj.png";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>HTML5</h4>
                <FaHtml5 color="#E34C26" size={18} />
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>CSS3</h4>
                <FaCss3Alt color="#264de4" size={18} />
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>JavaScript</h4>
                <IoLogoJavascript color="#f0db4f" size={18} />
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>TypeScript</h4>
                <SiTypescript color="#007acc" size={18} />
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>SCSS</h4>
                <FaSass color="#cc6699" size={18} />
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>TailwindCSS</h4>
                <SiTailwindcss color="#06b6d4" size={18} />
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>React</h4>
                <FaReact color="#61dbfb" size={18} />
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>Next.js</h4>
                <SiNextdotjs color="#000000" size={18} />
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>Redux</h4>
                <SiRedux color="#764abc" size={18} />
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>Zustand</h4>
                <span>🐻</span>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>Node JS</h4>
                <FaNodeJs color="#3c873a" size={18} />
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>Express JS</h4>
                <SiExpress color="#4b4a4a" size={24} />
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>Python</h4>
                <img src={PYTHON} alt="python icon" className="icon-image" />
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>Django</h4>
                <img src={DJANGO} alt="django icon" className="icon-image" />
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>SQL</h4>
                <img src={SQL} alt="sql icon" className="icon-image" />
              </div>
            </article>
          </div>
        </div>

        <div className="experience__mobile">
          <h3>Mobile Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>React Native</h4>
                <TbBrandReactNative color="#61dbfb" size={18} />
              </div>
            </article>
          </div>
        </div>

        <div className="experience__database">
          <h3>Database Management</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>PostgreSQL</h4>
                <BiLogoPostgresql color="#008000" size={18} />
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>MongoDB</h4>
                <SiMongodb color="#4db33d" size={18} />
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-item">
                <h4>Supabase</h4>
                <SiSupabase color="#4db33d" size={18} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
