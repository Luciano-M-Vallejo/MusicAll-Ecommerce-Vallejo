//STYLES
import "../item-list-conteiner/items.css";

//LIBRARIES
import { useContext, useState } from "react";
import Badge from "@mui/material/Badge";
import { styled, IconButton, Menu, MenuItem, Stack, Button, CardActions, CardContent, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";




//COMPONENTS
import CartContext from "../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartWidget = () => {

  const { cartInstruments } = useContext(CartContext)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <IconButton>
        <StyledBadge badgeContent={cartInstruments.length} color="primary" className="cartWidget">
          <ShoppingCartIcon
            onClick={handleClick}
            size="big"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          />
        </StyledBadge>
      </IconButton>
      {cartInstruments.length > 0 ? (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Usted tiene Instrumentos en su carrito
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="medium"  onClick={handleClose}><Link to="/carrito" className="buttonBuy" >Ver Carrito</Link></Button>
           </CardActions>
        </Menu>
      ) : ( '' )
      }
    </div>
  );
};

export default CartWidget;
