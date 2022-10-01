import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { x: -500 },
  show: {
    x: 0,
    transition: {
      type: "spring",
    },
  },
};

export function SwiperSlider() {
  const { stateSwipes, addItem } = useGlobalContext();
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      <Swiper
        slidesPerView={size < 500 ? 2 : 3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {stateSwipes.map((swipe) => {
          const { id, src, title, text, added, btn } = swipe;
          return (
            <>
              <SwiperSlide key={id}>
                <motion.article
                  // style={{ backgroundColor: `${background}` }}
                  key={id}
                  variants={item}
                  className={`${added ? "article added" : "article"}`}
                >
                  <div className="img-container">
                    <img src={`${src}`} alt="" />
                  </div>
                  <h4 className="article-title">{title}</h4>
                  <p>{text}</p>
                  <button className="btn" onClick={() => addItem(id, title)}>
                    {`${added ? "remove me" : "add me"}`}
                  </button>
                </motion.article>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
