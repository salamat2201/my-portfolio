import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./testimonials.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Testimonials() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const location = useLocation({
    pathname: "/testimonials",
    hash: "#testimonials",
  });
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <motion.section
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="section testimonial container"
      id="testimonials"
    >
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonial__container"
        grabCursor={true}
        loop={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
          dynamicBullets: true,
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
    </motion.section>
  );
}
