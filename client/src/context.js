import React, { useContext, useReducer, useEffect, useState } from "react";
import reducer from "./reducer";
import { swipes } from "./components/secondPage/data";
import { items } from "./components/menu/data";

const AppContext = React.createContext();

const initialState = {
  ingredients: [],
  orders: [],
  stateSwipes: swipes,
  menuItems: items,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [localOrders, setLocalOrders] = useState([]);

  // useEffect(() => {
  //   const data = localStorage.getItem("state");
  //   // console.log(data);
  //   if (data) {
  //     dispatch({ type: "SAVE_STATE", payload: data });
  //   }
  // }, [state.orders, state.ingredients]);

  // useEffect(() => {
  //   localStorage.setItem("state", JSON.stringify(state));
  // }, [state.ingredients, state.orders]);

  const addItem = (id, title) => {
    dispatch({ type: "ADD_ITEM", payload: id, title: title });
  };

  const filterItems = (category) => {
    dispatch({
      type: "FILTER_ITEMS",
      payload: items,
      category: category,
    });
  };

  // const setOrders = useEffect(() => {
  //   state.menuItems.filter((item) => {
  //     return item.ordered === true;
  //   });
  //   setLocalOrders(setOrders);
  // }, [state.menuItems]);

  const order = (id) => {
    dispatch({ type: "ORDER", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const saveOrders = () => {
    dispatch({ type: "SAVE_ORDERS" });
  };

  const saveIngredients = () => {
    dispatch({ type: "SAVE_INGREDIENTS" });
  };

  useEffect(() => {
    dispatch({ type: "FILTER" });
    // console.log("hello");
  }, [state.menuItems]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addItem,
        filterItems,
        order,
        increase,
        decrease,
        saveOrders,
        saveIngredients,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
