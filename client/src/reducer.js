const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let tempSwipes = state.stateSwipes.map((swipe) => {
      if (swipe.id === action.payload) {
        if (!swipe.added) {
          // return { ...swipe, added: true };
          return {
            ...swipe,
            added: true,
          };
        }

        return { ...swipe, added: false };
      }

      return swipe;
    });

    if (!state.ingredients.includes(action.title)) {
      return {
        ...state,
        stateSwipes: tempSwipes,
        ingredients: [...state.ingredients, action.title],
      };
    }

    let tempingredients = state.ingredients.filter((item) => {
      return action.title !== item;
    });
    if (state.ingredients.includes(action.title)) {
      return {
        ...state,
        stateSwipes: tempSwipes,
        ingredients: tempingredients,
      };
    }
    return {
      ...state,
      stateSwipes: tempSwipes,
    };
  }

  if (action.type === "FILTER_ITEMS") {
    const newItems = action.payload.filter(
      (item) => item.category === action.category
    );
    if (action.category === "all") {
      return { ...state, menuItems: action.payload };
    }
    return { ...state, menuItems: newItems };
  }

  if (action.type === "ORDER") {
    let tempMenuItems = state.menuItems.map((item) => {
      if (action.payload === item.id) {
        return { ...item, ordered: true, count: 1 };
      }
      return { ...item };
    });

    return {
      ...state,
      menuItems: tempMenuItems,
    };
  }

  if (action.type === "INCREASE") {
    let tempMenuItems = state.menuItems.map((item) => {
      if (action.payload === item.id) {
        return { ...item, count: item.count + 1 };
      }
      return { ...item };
    });
    return {
      ...state,
      menuItems: tempMenuItems,
    };
  }

  if (action.type === "DECREASE") {
    let tempMenuItems = state.menuItems.map((item) => {
      if (action.payload === item.id && item.count >= 2) {
        return { ...item, count: item.count - 1 };
      } else if (action.payload === item.id && item.count < 2) {
        return { ...item, ordered: false };
      }
      return { ...item };
    });
    return {
      ...state,
      menuItems: tempMenuItems,
    };
  }

  if (action.type === "FILTER") {
    let tempOrders = state.menuItems.filter((item) => {
      return item.ordered === true;
    });
    return { ...state, orders: tempOrders };
  }

  if (action.type === "SAVE_ORDERS") {
    localStorage.setItem("orders", JSON.stringify(state.orders));
  }

  if (action.type === "SAVE_INGREDIENTS") {
    localStorage.setItem("ingredients", JSON.stringify(state.ingredients));
  }

  return state;
};

export default reducer;
