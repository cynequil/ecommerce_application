const cart_viewed = (state = false, action) => {
  switch (action.type) {
    case "CART_VIEWED":
      return !state;
    default:
      return state;
  }
};

export default cart_viewed;
