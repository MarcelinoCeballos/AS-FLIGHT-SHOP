import Item from "./Item";

function ItemList({ datosProductos }) {
  return (
    <div>
      {datosProductos.map((item) => (
        <Item
          key={item.id}
          start={0}
          title={item.title}
          brand={item.brand}
          model={item.model}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ItemList;
