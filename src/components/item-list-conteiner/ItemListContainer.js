import "./items.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import ItemCount from "./ItemCount.js";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ItemListContainer = (props) => {
  const { title, typeInstrument, price, stock } = props;
  const [count, setCount] = useState(stock);
  const reduceStock = () => {
    setCount(count - 1);
  };
  const backStock = () => {
    setCount(count + 1);
  };
  return (
    <div className="item-list-container">
      <h1>{title}</h1>
      <p>{typeInstrument}</p>
      <p> $ {price}</p>
      <p>Stock: {count}</p>
      <div>
        <ItemCount
          stock={count}
          reduceStock={reduceStock}
          backStock={backStock}
        ></ItemCount>
      </div>
    </div>
  );
};

export default ItemListContainer;
