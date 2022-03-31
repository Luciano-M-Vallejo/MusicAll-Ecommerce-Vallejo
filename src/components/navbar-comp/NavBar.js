//STYLES
import "./NavBar.css";

//LIBRARIES
import Stack from "@mui/material/Stack";
import CartWidget from "./CartWidget";

//COMPONENTS
import Button from "@mui/material/Button";
import clavedeDo from "../../assets/img/logo/clavedeDo.png";

const NavBar = () => {
  return (
    <header>
      <div className="navbar_body">
        <Stack spacing={6} direction="row" className="navbar">
          <img
            src={clavedeDo}
            className="img-header"
            alt="none"
            width={60}
            height={60}
          />
          <Button variant="contained" size="small" className="button">
            Home
          </Button>
          <Button variant="contained" size="small" className="button">
            Productos
          </Button>
          <Button variant="contained" size="small" className="button">
            Nosotros
          </Button>
          <Button variant="contained" size="small" className="button">
            Contactos
          </Button>
          <CartWidget />
        </Stack>
      </div>
    </header>
  );
};

export default NavBar;
