import React, {  useEffect } from "react";
import {  Routes, Route, useNavigate   } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./App.css";
import Header from "./components/header/Header";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.hash !== '') {
      navigate('/');
    }
  }, [navigate]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <div className="progress-bg">
        <motion.div className="progress-bar" style={{ scaleX: scaleX }} />
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Skills />} />
        <Route path="/" element={<Services />} />
        <Route path="/" element={<Qualification />} />
        <Route path="/" element={<Testimonials />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
