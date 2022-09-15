import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Item({ id, title, price, image }) {
  return (
    <div className="productoBox">
      <h1>{title}</h1>
      <h3>{price}</h3>
      <img className="productoImagen" src={image} alt={title} />
      <Button variant="contained">
        <Link to={`/item/${id}`}>detalle</Link>
      </Button>
    </div>
  );
}

export default Item;
