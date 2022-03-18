const ItemListContainer = (props) => {
  const { title, typeInstrument, price } = props;
  return (
    <div className="item-list-container">
      <h1>{title}</h1>
      <p>{typeInstrument}</p>
      <p> $ {price}</p>
    </div>
  );
};

export default ItemListContainer;
