import Item from "./Item";

function ItemList({ datosProductos }) {
  return (
    <div>
      {datosProductos.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          start={0}
          title={item.title}
          stock={item.stock}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ItemList;
