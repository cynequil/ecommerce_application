import { useSelector, useDispatch } from "react-redux";
import { itemremoved } from "../actions";
const Modal = () => {
  const dispatch = useDispatch();
  const cart_items = useSelector((state) => state.cart_items);

  const handleClick = (e) => {
    dispatch(itemremoved(e.target.value));
  };
  return (
    <div className="cart_modal">
      {cart_items.map((items, index) => {
        return (
          <div className="cart_item" key={index}>
            <img src={items.image} alt="" />
            <div className="mid">
              <p>{items.name}</p>
            </div>
            <button value={items.id} className="remove" onClick={handleClick}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Modal;
