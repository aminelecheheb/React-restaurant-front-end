import React, { useState } from "react";
import "./menu.css";
import Categories from "./Categories";
import { useGlobalContext } from "../../context";
import { items } from "./data";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";

const AppMenu = () => {
  const { menuItems, filterItems, saveOrders } = useGlobalContext();
  const newCategories = ["all", ...new Set(items.map((item) => item.category))];
  // const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(newCategories);

  const navigate = useNavigate();

  // const filterItems = (category) => {
  //   const newItems = items.filter((item) => item.category === category);
  //   if (category === "all") {
  //     setMenuItems(items);
  //   } else setMenuItems(newItems);
  // };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu menuItems={menuItems} />

        <Link
          onClick={() => saveOrders()}
          className="btn btn-primary btn-block"
          to="secondpage"
        >
          next
        </Link>
      </section>
    </main>
  );
};

export default AppMenu;
