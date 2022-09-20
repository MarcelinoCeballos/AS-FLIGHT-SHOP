import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Item({ id, title, price, image }) {
  return (
    <div className="productoBox">
      <h1>{title}</h1>
      <h3>{price}</h3>
      <img className="productoImagen" src={image} alt={title} />
      <Link to={`/item/${id}`}>
        <Button variant="contained">detalle</Button>
      </Link>
    </div>
  );
}

export default Item;
