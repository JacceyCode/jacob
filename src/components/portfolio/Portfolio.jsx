import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import "./portfolio.css";
import RENTALS from "../../assets/rentals.webp";
import NATOURS from "../../assets/natours.webp";
import BLOG from "../../assets/blog.webp";
import DMARKETPLACE from "../../assets/dmarketplace.webp";
import OASISMGT from "../../assets/oasis-mgt.jpeg";
import OASISCLT from "../../assets/oasis-client.jpeg";
import MOVIEBOX from "../../assets/moviebox.webp";
import PIZZA from "../../assets/pizza.webp";
import HELP from "../../assets/helpmeout.webp";
import CREDPAL from "../../assets/credpal.webp";
import SERON from "../../assets/seron.png";
import BANK from "../../assets/bank.png";

const data = [
  {
    image: BANK,
    title: "OneClick Finance",
    desc: "A modern app for managing financial transactions and budgets, providing instant access to multiple accounts from one platform.",
    stack:
      "React, Next.js, TypeScript, Shadcn, Tailwind CSS, Chart.js, Appwrite, Plaid, Dwolla, Sentry",
    github: "https://github.com/JacceyCode/finance",
    demo: "https://bank-on-the-go.vercel.app",
  },
  {
    image: SERON,
    title: "SeronEstate Management App",
    desc: "An estate management app that allows for sale, purchase or rent of apartments with a chat feature for easy communication among users.",
    stack:
      "React, TypeScript, Zustand, SASS, Leaflet, Cloudinary, Node.js, Express.js, MongoDB, Prisma, JWToken, Socket.io",
    github: "https://github.com/JacceyCode/estate-app",
    demo: "https://seron-estate-app.vercel.app",
  },
  {
    image: OASISCLT,
    title: "Oasis",
    desc: "An app developed for tourist's to book cabin accommodation of their choice before a scheduled visit to the tourist centre.",
    stack: "React, Next.js, NextAuth.js, Tailwind CSS, Supabase",
    github: "https://github.com/JacceyCode/the-wild-aosis-client-website",
    demo: "https://the-wild-aosis-client-website.vercel.app",
  },
  {
    image: BLOG,
    title: "E-Blog App",
    desc: "A platform enabling writers to publish creative works for avid readers to engage with and provide valuable feedback.",
    stack: "Node.js, Express.js, MongoDB, React, JWToken",
    github: "https://github.com/JacceyCode/blog-site",
    demo: "https://jacceyblog.netlify.app/",
  },
  {
    image: DMARKETPLACE,
    title: "D-MarketPlace",
    desc: "An online e-commerce store incorporating a seamless payment gateway, user account management, authentication, and an intuitive cart system.",
    stack: "React, Redux, Tailwind CSS, Firebase, Stripe",
    github: "https://github.com/JacceyCode/themarketplace",
    demo: "https://dmarketplace.netlify.app",
  },
  {
    image: NATOURS,
    title: "Natours",
    desc: "A travel application designed and deployed to enthrall travel enthusiasts by showcasing different tourist attractions, facilitating exploration, reservation, and secure payments.",
    stack: "Node.js, Express.js, MongoDB, Pug, JWToken, Stripe",
    github: "https://github.com/JacceyCode/Natours",
    demo: "https://mynatours-3ltq.onrender.com/",
  },
  {
    image: RENTALS,
    title: "Vacation Home Rentals",
    desc: "A rental site that allows for users to put up their property for rent and also rent a property of choice.",
    stack:
      "TypeScript, React, Redux, Node.js, Express.js, MongoDB, Cloudinary, JWToken",
    github: "https://github.com/JacceyCode/home-rentals",
    demo: "https://home-rentals-henna.vercel.app",
  },

  {
    image: OASISMGT,
    title: "Oasis Management App",
    desc: "An app developed for a resort to strategically prioritize customer management and reservations. With a glance on the app's dashboard, every customer's details and preferences can be gotten at the click of a finger.",
    stack: "React, Styled Components, Recharts, Supabase",
    github: "https://github.com/JacceyCode/the-wild-oasis",
    demo: "https://the-wild-oasis-vacation-house.netlify.app",
  },
  {
    image: MOVIEBOX,
    title: "MovieBox",
    desc: "A website built for movie lover's to checkout the latest movie trends, see reviews and have a sneak peek of the trailer before hitting the cinema.",
    stack: "React, Tailwind CSS, TMDB API",
    github: "https://github.com/JacceyCode/HNGxStage2Task",
    demo: "https://mymoviestreambox.netlify.app",
  },
  {
    image: PIZZA,
    title: "Fast Pizza",
    desc: "A website built for pizza lover's, providing a seamless ordering, delivery management and payment experience from the comfort of their homes. This helps to increase the pizza order rate per hour and improve the sales number at least by 40% for the company.",
    stack: "React, Redux, Tailwind CSS",
    github: "https://github.com/JacceyCode/fast-react-pizza",
    demo: "https://orderfastpizza.netlify.app",
  },
  {
    image: HELP,
    title: "HelpMeOut",
    desc: "A landing page developed for an online screen recording chrome extension, which is used to create awareness and educate user's about the extension and also increase the number of users.",
    stack: "React, Tailwind CSS",
    github: "https://github.com/JacceyCode/ChromeExtension_HNGxStage5Task",
    demo: "https://jacceycode-helpmeout.netlify.app",
  },
  {
    image: CREDPAL,
    title: "CREDPAL",
    desc: "A landing page developed for an investment product, which is used to create awareness, educate it user's and also onboard new users.",
    stack: "React, TypeScript, Tailwind CSS",
    github: "https://github.com/JacceyCode/credpaltest",
    demo: "https://credpaltest.netlify.app",
  },
];

const Portfolio = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={pagination}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((project, index) => (
            <SwiperSlide key={index}>
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img
                    src={project.image}
                    alt="portfolio image"
                    className="poster__image"
                  />
                </div>

                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p className="portfolio__item-stack">
                  {" "}
                  <em>Stack used :</em> {project.stack}
                </p>

                <div className="portfolio__item-cta">
                  <a href={project.github} target="_blank" className="btn">
                    Repo
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Demo
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
