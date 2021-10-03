const prod_category = (state = "All Products", action) => {
  switch (action.type) {
    case "PROD_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

export default prod_category;
