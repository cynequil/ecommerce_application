import "./App.css";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Content from "./components/Content";
import Modal from "./components/Modal";

import { useSelector } from "react-redux";

function App() {
  const cart_viewed = useSelector((state) => state.cart_viewed);
  const cart_items = useSelector((state) => state.cart_items);
  return (
    <div className="App">
      <div className="firstview">
        <Header />
      </div>
      <div className="secondview">
        <Sider />
        <Content cart_viewed={cart_viewed} />
      </div>
      {cart_viewed && cart_items.length > 0 && <Modal />}
    </div>
  );
}

export default App;
