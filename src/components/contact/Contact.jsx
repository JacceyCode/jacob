import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoWhatsapp } from "react-icons/bi";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          e.target.reset();
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.error("Failed 💥💥💥. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jacobadebayo.ja@gmail.com</h5>
            <a href="mailto:jacobadebayo.ja@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BiLogoWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a href="https://wa.me/2348134557536" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaXTwitter className="contact__option-icon" />
            <h4>Jacob</h4>
            <a href="https://twitter.com/code_sesan" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
