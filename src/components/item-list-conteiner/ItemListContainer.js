//STYLES
import "./items.css";

//LYBRARIES
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material'
import { Link } from "react-router-dom";

//COMPONENTS
import ItemCount from "./ItemCount.js";

const ItemListContainer = ({ data }) => {
  const { name, type, price, stock, img, id } = data;
  

  return (
    <div className="item-list-container">
      <Card sx={{ maxWidth: 345 }} >
        <Link to={`/productos/${id}`} className="decorations">
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
        </Link>
        <CardActions>
          <ItemCount stock={stock} />
        </CardActions>
        <Typography variant="h7" color="black" className="stockText">
            Stock Disponible: { stock}
          </Typography>
      </Card>
    </div>
  );
};

export default ItemListContainer;
