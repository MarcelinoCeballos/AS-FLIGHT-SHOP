import { Start } from "@mui/icons-material";
import { useEffect, useState } from "react";

function Item ({title, brand, model, caracteristic, image, price}) {

    return (
        <div className="productoBox">
                <img  src={image} alt={title} />
                <h1 className="nombreProducto">{title}</h1>
                <h2 className="marcaProducto">{brand}</h2>
                <h3 className="modeloProducto">{model}</h3>
                <p className="caracteristicaProducto">{caracteristic}</p>
                <p className="precioProducto">{price}</p>          
        </div>
    )
};

export default Item; 