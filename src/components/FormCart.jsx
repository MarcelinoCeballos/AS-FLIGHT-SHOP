import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";

function FormCart({ getInfoFunction }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <h1>Ingrese datos</h1>
      <TextField
        onChange={updateName}
        id="standard-basic"
        label="Nombre y apellido"
        variant="standard"
      />
      <TextField
        onChange={updatePhone}
        type="number"
        id="standard-basic"
        label="Teléfono"
        variant="standard"
      />
      <TextField
        onChange={updateEmail}
        id="standard-basic"
        label="Correo Electrónico"
        variant="standard"
      />
      <Button
        onClick={() => getInfoFunction(name, email, phone)}
        variant="outlined"
      >
        Finalizar Compra
      </Button>
    </div>
  );
}

export default FormCart;
