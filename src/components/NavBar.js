import Logo from "../assets/img/LogoTienda.png";
import "../App.css";
import CartWidget from './CartWidget';

function NavBar () {
    return (
        <div className="nav">
            <div className="navLogoBox">
                <img className="navLogo" src={Logo} alt="Logo Tienda"></img>
            </div>
            <h1 className="navNombre">AS-FLIGHT SHOP</h1>
            <ul className="navCategorias">
                <li><a href="">Indumentaria</a></li>
                <li><a href="">Equipamiento</a></li>
                <li><a href="">Documentación</a></li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar;