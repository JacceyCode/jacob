import resume from "../../assets/Jacob Adebayo Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&apos;s talk!
      </a>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
