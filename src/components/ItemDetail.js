import "../components/ItemDetail.css";

function ItemDetail({ item }) {
  return (
    <div className="productDetailBox">
      <div>
        <img className="productDetailImage" src={item.image} alt={item.title} />
      </div>
      <div className="productDetailText">
        <h1>{item.title} </h1>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
