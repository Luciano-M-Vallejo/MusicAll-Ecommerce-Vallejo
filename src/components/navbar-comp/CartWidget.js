//STYLES

//LIBRARIES
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';



//COMPONENTS
import CartContext from "../context/CartContext";
import { useContext } from "react";

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
  
  return (
    <div>
      <IconButton>
        <StyledBadge badgeContent={cartInstruments.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Menu>
        <Divider>
        {cartInstruments.map((cartInstruments) => {
          return (
            <MenuItem key={cartInstruments.id}>
                {/* <div>
                    <img src={`./${cartInstruments.image}`} /> 
                </div> */}
                <div>
                    <p>{cartInstruments.title}</p>
                    <span>$ {cartInstruments.price}</span>
                </div>
                <div>
                    <DeleteIcon />
                </div>
            </MenuItem>
          )
        })}
          </Divider>
        </Menu>
    </div>
  );
};

export default CartWidget;
