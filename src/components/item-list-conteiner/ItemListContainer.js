import "./items.css";
import ItemCount from "./ItemCount.js";

const ItemListContainer = (props) => {
  const { title, typeInstrument, price, stock } = props;
  return (
    <div className="item-list-container">
      <h1>{title}</h1>
      <p>{typeInstrument}</p>
      <p> $ {price}</p>
      <p>Stock: {stock}</p>
      <div>
        <ItemCount stock={stock} />
      </div>
    </div>
  );
};

export default ItemListContainer;
