import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer (props) {
    return (
        <div>          
            <ItemList itemNumber={props.itemNumber} />
            <ItemCount inicial={1} stock={5}/>
        </div>       
    )}

export default ItemListContainer;