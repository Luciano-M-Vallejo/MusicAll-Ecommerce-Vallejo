//STYLES
import "./items.css";

//LIBRARIES
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Stack } from '@mui/material';

//COMPONENTS
import ItemCount from "./ItemCount.js";


const ItemDetailContainer = ({ data }) => {

    const { name, type, price, stock, img } = data;

    return (
        
        <div className="item-list-container">
            <Stack direction="row" spacing={2} className="card-detail">
                <Card sx={{ maxWidth: 500 }} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height={520}
                            image={img}
                            alt={name}
                        /> 
                    </CardActionArea>
                </ Card >
                <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea className="content-instrument">
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div" >
                                { name } <p>Cervini By Cremona Hc-100 Estudio Tamaño 4/4 Funda</p> 
                                </Typography>
                                
                            <Typography variant="body2" color="text.secondary" className="secudaryText">
                                Tipo de Istrumento: {type}
                            </Typography>
                            <Typography variant="h5" color="black">
                                    Precio: $ {price}
                                </Typography>
                                <h3>en 12 cuotas de  ${(price/12).toFixed(2)} </h3>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <ItemCount stock={stock} />
                    </CardActions>
                </Card>
            </Stack>
        </div>
    );
}

export default ItemDetailContainer