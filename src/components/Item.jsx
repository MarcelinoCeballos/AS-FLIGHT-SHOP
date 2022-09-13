function Item({ title, brand, model, description, image, price }) {
  return (
    <div className="productoBox">
      <img className="productoImagen" src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{brand}</h2>
      <h3>{model}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default Item;
