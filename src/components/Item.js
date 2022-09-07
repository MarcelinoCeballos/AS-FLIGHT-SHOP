function Item ({title, brand, model, caracteristic, image, price}) {
    return (
        <div>
            <h1 className="nombreProducto">{title}</h1>
            <h2 className="marcaProducto">{brand}</h2>
            <h3 className="modeloProducto">{model}</h3>
            <p className="caracteristicaProducto">{caracteristic}</p>
            <p className="precioProducto">{price}</p>
            <img className="imagenProducto" src={image} alt={title} />
        </div>
    )
};

export default Item; 