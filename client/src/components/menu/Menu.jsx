import React from "react";
import { useGlobalContext } from "../../context";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Menu = () => {
  const { menuItems, order, increase, decrease } = useGlobalContext();
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        const { id, title, category, price, img, desc, ordered, count } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
              {ordered ? (
                <div className="flex">
                  <button className="arrow" onClick={() => decrease(id)}>
                    <IoIosArrowDown />
                  </button>
                  <span className="inline">{count}</span>
                  <button className="arrow" onClick={() => increase(id)}>
                    <IoIosArrowUp />
                  </button>
                </div>
              ) : (
                <button className="order-btn" onClick={() => order(id)}>
                  order
                </button>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

{
  /* <div className="flex">
  <button>add</button>
  <span className="inline">0</span>
  <button>remove</button>
</div>; */
}

// {
//   menuItems.map((item) => {
//     const { ordered } = item;
//     if (ordered) {
//       <div className="flex">
//         <button>add</button>
//         <span className="inline">0</span>
//         <button>remove</button>
//       </div>;
//     }
//     if (ordered === false) {
//       <button
//         onClick={() => {
//           order(id);
//         }}
//       >
//         order
//       </button>;
//     }
//   });
// }
