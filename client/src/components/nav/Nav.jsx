import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import "./nav.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navVariants = {
  visible: {
    y: 0,
    transition: {
      delay: 1,
      type: "spring",
      stifeness: 50,
    },
  },
  hidden: {
    y: -1000,
  },
};

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <motion.nav variants={navVariants} initial="hidden" animate="visible">
      <div className="nav-center container">
        <div className="nav-header">
          {/* <img src={logo} className="logo" alt="logo" /> */}
          <h2 className="logo">logo</h2>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
          ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  {/* <a href={url}>{text}</a> */}
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
