import React from "react";
import { motion } from "framer-motion";

const backgroundVariants = {
  visible: {
    scale: 1,
  },
  hidden: {
    scale: 0,
  },
};

const BackgroundCircle = () => {
  return (
    <>
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        style={{
          originX: 0,
          originY: "-50%",
        }}
        className="background-circle"
      ></motion.div>
    </>
  );
};

export default BackgroundCircle;
