import React from "react";
import { SwiperSlider } from "./SwiperSlider";
import "./secondPage.css";
import { useGlobalContext } from "../../context";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stormVariants = {
  hidden: { x: "-100vw" },
  show: {
    x: 0,
    transition: {
      delay: 0.5,
      type: "spring",
    },
  },
};

const SecondPage = () => {
  const { saveIngredients } = useGlobalContext();
  return (
    <section className="container second-page">
      <motion.div
        variants={stormVariants}
        initial="hidden"
        animate="show"
        className="choose"
      >
        <p className="numbers">
          1 2 <span>3</span>
        </p>
        <h1>
          choose your <br /> ingredients please
        </h1>
        {/* <a
          onClick={() => saveIngredients()}
          className="btn btn-primary"
          href="confirme"
        >
          next
        </a> */}
        <Link
          onClick={() => saveIngredients()}
          className="btn btn-primary"
          to="confirme"
        >
          Next
        </Link>
      </motion.div>
      <SwiperSlider />
    </section>
  );
};

export default SecondPage;
