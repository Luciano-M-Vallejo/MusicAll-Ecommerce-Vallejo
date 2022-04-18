//STYLES

//LIBRARIES
import { useContext, useState } from "react";
import Badge from "@mui/material/Badge";
import { styled, IconButton, Menu, MenuItem, Stack, Button } from "@mui/material";
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
        <StyledBadge badgeContent={cartInstruments.length} color="primary">
          <ShoppingCartIcon
            onClick={handleClick}
            size="medium"
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
          <h6>Usted tiene Instrumentos en su carrito</h6>
          <Button><Link to="/carrito" >Ver Carrito</Link></Button>
        </Menu>
      ) : ( '' )
      }
    </div>
  );
};

export default CartWidget;
