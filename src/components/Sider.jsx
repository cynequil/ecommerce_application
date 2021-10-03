import { useDispatch, useSelector } from "react-redux";
import { categoryitems, prodcategory, reset } from "../actions";
const Sider = () => {
  const dispatch = useDispatch();
  const initial_list = useSelector((state) => state.initial_list);
  const handleClick = (e) => {
    if (e.target.value === "all products") {
      dispatch(reset(initial_list));
      dispatch(prodcategory(e.target.value));
    } else {
      dispatch(reset(initial_list));
      dispatch(prodcategory(e.target.value));
      dispatch(categoryitems(e.target.value));
    }
  };
  return (
    <div className="sider">
      <button value="category_1" onClick={handleClick}>
        Catergory 1
      </button>
      <button value="category_2" onClick={handleClick}>
        Catergory 2
      </button>
      <button value="category_3" onClick={handleClick}>
        Catergory 3
      </button>
      <button value="all products" onClick={handleClick}>
        All Products
      </button>
    </div>
  );
};

export default Sider;
