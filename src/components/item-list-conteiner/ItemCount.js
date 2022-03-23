import { useState } from "react";
import { TextField, Button, ButtonGroup } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Counter = (props) => {
  const { stock, reduceStock, backStock } = props;
  const [count, setCount] = useState(0);

  const addCart = () => {
    setCount(count + 1);
    reduceStock();
  };
  const removeCart = () => {
    setCount(count - 1);
    backStock();
  };

  return (
    <div>
      <div>
        <ButtonGroup className="grupo">
          <Button
            aria-label="reduce"
            variant="contained"
            onClick={removeCart}
            disabled={count === 0}
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
            disabled={stock === 0}
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
          disabled={count === 0}
        >
          Agregar al Carrito <ShoppingCartIcon className="carrito" />
        </Button>
      </div>
    </div>
  );
};

export default Counter;
