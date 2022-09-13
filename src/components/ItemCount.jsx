import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";

function ItemCount({ stock, initial }) {
  const [itemNumber, setItemNumber] = useState(1);

  const AddItemHandler = () => {
    itemNumber === stock || setItemNumber(itemNumber + 1);
  };

  const SubtractItemHandler = () => {
    itemNumber === 1 || setItemNumber(itemNumber - 1);
  };

  function onAddHandler() {
    alert("Usted agregó " + itemNumber + " unidades al carrito");
  }

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
      <Button onClick={onAddHandler} variant="outlined">
        Agregar al Carrito
      </Button>
    </div>
  );
}

export default ItemCount;
