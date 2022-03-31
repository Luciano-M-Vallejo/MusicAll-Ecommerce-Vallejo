//STYLES
import "./items.css";

//LIBRARIES
import { useState } from "react";
import { TextField, Button, ButtonGroup } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

//COMPONENTS

const Counter = (props) => {
  const { stock } = props;
  const [count, setCount] = useState(1);

  const addCart = () => {
    setCount(count + 1);
  };
  const removeCart = () => {
    setCount(count - 1);
  };
  const onAdd = () => {
    window.alert("Usted agrego al Carrito " + count + " items");
  };
  return (
    <div>
      <div>
        <ButtonGroup className="grupo">
          <Button
            aria-label="reduce"
            variant="contained"
            onClick={removeCart}
            disabled={count === 1}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <TextField
            id="outlined-read-only-input"
            value={count}
            InputProps={{
              readOnly: true,
            }}
          />
          <Button
            aria-label="increase"
            variant="contained"
            onClick={addCart}
            disabled={count === stock}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Button
          variant="contained"
          size="small"
          className="itemButton"
          onClick={onAdd}
        >
          Agregar al Carrito{" "}
          <ShoppingCartIcon className="carrito" color="secundary" />
        </Button>
      </div>
    </div>
  );
};

export default Counter;
