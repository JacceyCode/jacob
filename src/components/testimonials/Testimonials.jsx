import "./testimonials.css";
import AVATAR from "../../assets/face.png";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    avatar: AVATAR,
    name: "Jaccey Code",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam in labore fuga facere perspiciatis quos quod dolores sunt modi magnam inventore, beatae nam quae velit, nulla suscipit vero enim",
  },
  {
    avatar: AVATAR,
    name: "Jaccey Code",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam in labore fuga facere perspiciatis quos quod dolores sunt modi magnam inventore, beatae nam quae velit, nulla suscipit vero enim",
  },
  {
    avatar: AVATAR,
    name: "Jaccey Code",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam in labore fuga facere perspiciatis quos quod dolores sunt modi magnam inventore, beatae nam quae velit, nulla suscipit vero enim",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={avatar} alt="Client avatar" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
