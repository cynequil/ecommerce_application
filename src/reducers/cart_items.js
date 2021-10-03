const cart_items = (state = [], action) => {
  switch (action.type) {
    case "ITEM_TO_CART":
      let arr = action.payload[1].filter(
        (ele) => ele.id === parseInt(action.payload[0], 10)
      );
      return [...state, ...arr];
    case "ITEM_REMOVED":
      return state.filter((ele) => ele.id !== parseInt(action.payload, 10));
    default:
      return state;
  }
};

export default cart_items;
