import { combineReducers } from "redux";
import cart_items from "./cart_items";
import cart_viewed from "./cart_viewed";
import items from "./items";
import initial_list from "./initial_list";
import prod_category from "./prod_category";

const allReducers = combineReducers({
  cart_items: cart_items,
  cart_viewed: cart_viewed,
  products: items,
  initial_list: initial_list,
  prod_category: prod_category,
});

export default allReducers;
