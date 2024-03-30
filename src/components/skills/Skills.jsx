import React, { useRef, useEffect } from "react";
import "./skills.css";
import { useLocation } from "react-router-dom";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const location = useLocation({
    pathname: "/skills",
    hash: "#skills",
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
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="skills section"
      id="skills"
    >
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Frontend />

        <Backend />
      </div>
    </motion.section>
  );
}
