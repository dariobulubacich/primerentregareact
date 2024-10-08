import { Cardwidget } from "../../common/cardWidget/Cardwidget";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <div className="container-h1">
        <img
          className="imagen-logo"
          src="https://res.cloudinary.com/di378vek5/image/upload/v1728056110/WhatsApp_Image_2024-09-27_at_20.27.09_vrgph6.jpg"
          alt=""
        />
        <h1>Cotillon Amelia</h1>
        <Cardwidget />
      </div>
      <div className="container-navbar">
        <li>Juguetes</li>
        <li>Cotillon</li>
        <li>Reposteria</li>
      </div>
    </div>
  );
};
