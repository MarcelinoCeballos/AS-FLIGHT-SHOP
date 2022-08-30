import Logo from "../imagenes/LogoTienda.png";
import "../App.css"

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
        </div>
    )
}

export default NavBar;