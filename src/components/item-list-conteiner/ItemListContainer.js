import "./items.css";
import ItemCount from "./ItemCount.js";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';



const ItemListContainer = ({ data }) => {
  const {name, type, price, stock, img } = data;

  return (
    <div className="item-list-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
          component="img"
          height={140}
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            { name }
          </Typography>
          <Typography variant="body2" color="text.secondary" className="secudaryText">
              Tipo de Istrumento: {type}
          </Typography>
          <Typography variant="h5" color="black">
            Precio: $ {price}
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
          <ItemCount stock={stock} />
        </CardActions>
        <Typography variant="h7" color="black" className="stockText">
            Stock Disponible: { stock}
          </Typography>
      </Card>
      {/* <img src={img} alt={name } />
      <h1>{name}</h1>
      <p>{type}</p>
      <p> $ {price}</p>
      <p>Stock: {stock}</p>
      <div>
        <ItemCount stock={stock} />
      </div> */}
    </div>
  );
};

export default ItemListContainer;
