import React from "react";
import { motion } from "framer-motion";
import "./landingPage.css";
import { SiIfood } from "react-icons/si";
import landing from "../../assets/imgs/landing.png";
import { Link } from "react-router-dom";

const imgContainerVar = {
  hidden: {
    x: "100%",
    y: "100%",
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const imgVar = {
  hidden: {
    rotate: 0,
  },
  show: {
    rotate: 180,
    transition: {
      duration: 1,
    },
  },
};

const stormVariants = {
  hidden: { x: "-100vw" },
  show: {
    x: 0,
    transition: {
      delay: 1,
      type: "spring",
    },
  },
};

const LandingPage = () => {
  return (
    <section className="container landing-container">
      <motion.div
        variants={stormVariants}
        initial="hidden"
        animate="show"
        className="landing-text"
      >
        <h1 className="title-hero">
          <div className="icon-back">
            <SiIfood />
          </div>
          Dream about it <br /> And make it come true
        </h1>
        {/* <a className="btn" href="menu">
          Menu
        </a> */}
        <Link className="btn" to="menu">
          Menu
        </Link>
      </motion.div>
      <motion.div
        className="img-container"
        variants={imgContainerVar}
        initial="hidden"
        animate="show"
      >
        <motion.img
          className="img"
          src={landing}
          alt="food"
          variants={imgVar}
        />
      </motion.div>
    </section>
  );
};

export default LandingPage;
