import { MdOutlineShoppingCart } from "react-icons/md";
import "./cardWidget.css";
export const Cardwidget = () => {
  return (
    <div className="carrito">
      <MdOutlineShoppingCart />
      <span>0</span>
    </div>
  );
};
