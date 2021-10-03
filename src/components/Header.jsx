import { useDispatch, useSelector } from "react-redux";
import { cartviewed } from "../actions";
const Header = () => {
  const dispatch = useDispatch();
  const cart_items = useSelector((state) => state.cart_items);

  return (
    <div className="header">
      <div className="logo">Blablacart</div>
      <div className="controls">
        <div className="cart_cntl">
          <button onClick={() => dispatch(cartviewed())}>Cart</button>
          <div className="items_cnt">{cart_items.length}</div>
        </div>
        <div className="user_info">
          <img src="http://cdn.onlinewebfonts.com/svg/img_299586.png" alt="" />
          <p>Username</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
