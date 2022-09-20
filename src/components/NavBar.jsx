import Logo from "../assets/img/LogoTienda.png";
import "../css/App.css";
import CartWidget from "./CartWidget";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <div className="navLogoBox">
        <Link to="/">
          <img className="navLogo" src={Logo} alt="Logo Tienda"></img>
        </Link>
      </div>
      <div>
        <h1 className="navNombre">AS-FLIGHT SHOP</h1>
      </div>
      <div className="navCategorias">
        <Link to="/category/1">Indumentaria </Link>
        <Link to="/category/2">Equipamiento </Link>
        <Link to="/category/3">Documentación</Link>
      </div>
      <div>
        <Button variant="contained">Login</Button>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
