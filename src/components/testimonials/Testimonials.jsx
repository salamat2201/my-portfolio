import React from "react";
import "./testimonials.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => (
  <section className="section testimonial container">
    <h2 className="section__title">My clients say</h2>
    <span className="section__subtitle">Testimonial</span>

    <Swiper
      className="testimonial__container"
      grabCursor={true}
      loop={true}
      spaceBetween={24}
      pagination={{
        clickable: true,
        dynamicBullets: true, // добавляем динамические точки если нужно
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
          pagination: true, // Убедимся, что пагинация включена на всех разрешениях
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
          pagination: true, // Убедимся, что пагинация включена на всех разрешениях
        },
      }}
      modules={[Pagination]}
    >
      {Data.map(({ id, image, title, description }) => (
        <SwiperSlide className="testimonial__card" key={id}>
          <img
            style={{ width: 60, height: 60 }}
            src={image}
            alt={`Testimonial from ${title}`}
            className="testimonial__img"
          />
          <h3 className="testimonial__name">{title}</h3>
          <p className="testimonial__description">{description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Testimonials;
