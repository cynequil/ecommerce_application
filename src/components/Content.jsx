import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../actions";
const Content = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const prod_category = useSelector((state) => state.prod_category);
  const initial_list = useSelector((state) => state.initial_list);

  // const handleClick = (e) => {
  //   const item_id = e.target.value;
  //   const arr = [item_id];
  //   console.log(intial_list);
  //   arr.push(intial_list);
  //   console.log(arr);
  // };
  return (
    <div className="content">
      <div className="banner">
        Products Under: {prod_category.toUpperCase()}
      </div>
      <div className="products">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} alt="" className="product_image" />
              <p>{product.name}</p>
              <button
                value={product.id}
                onClick={(e) =>
                  dispatch(addtocart([e.target.value, initial_list]))
                }
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
