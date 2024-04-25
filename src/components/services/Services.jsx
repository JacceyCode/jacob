import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface development</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server Routing and API development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server Routing and API development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server Routing and API development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server Routing and API development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server Routing and API development</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Database</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User data management and security.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User data management and security.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User data management and security.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User data management and security.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User data management and security.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
