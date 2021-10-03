export const addtocart = (payload) => {
  return {
    type: "ITEM_TO_CART",
    payload,
  };
};
export const cartviewed = () => {
  return {
    type: "CART_VIEWED",
  };
};
export const itemremoved = (payload) => {
  return {
    type: "ITEM_REMOVED",
    payload,
  };
};
export const categoryitems = (payload) => {
  return {
    type: "CATEGORY_ITEMS",
    payload,
  };
};
export const reset = (payload) => {
  return {
    type: "RESET",
    payload,
  };
};

export const prodcategory = (payload) => {
  return {
    type: "PROD_CATEGORY",
    payload,
  };
};
