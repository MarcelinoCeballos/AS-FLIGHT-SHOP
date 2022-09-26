import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import { useState } from "react";

function ItemCount({ stock, onAdd }) {
  const [itemNumber, setItemNumber] = useState(1);

  const AddItemHandler = () => {
    itemNumber === stock || setItemNumber(itemNumber + 1);
  };

  const SubtractItemHandler = () => {
    itemNumber === 1 || setItemNumber(itemNumber - 1);
  };

  return (
    <div className="counterButton">
      <Fab color="primary" aria-label="min" onClick={SubtractItemHandler}>
        <RemoveIcon />
      </Fab>
      <div className="counterVisor">
        <p>{itemNumber}</p>
      </div>
      <Fab color="primary" aria-label="add" onClick={AddItemHandler}>
        <AddIcon />
      </Fab>
      <Button variant="contained" onClick={() => onAdd(itemNumber)}>
        Agregar al Carrito
      </Button>
    </div>
  );
}

export default ItemCount;
