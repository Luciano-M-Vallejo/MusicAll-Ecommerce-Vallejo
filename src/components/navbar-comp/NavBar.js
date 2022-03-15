import Button from "@mui/material/Button";
import clavedeDo from "../../assets/img/clavedeDo.png";
import Stack from "@mui/material/Stack";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <div>
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
        </Stack>
        {/* <div>
          <ul>
            <li>
              <Button variant="home">Home</Button>
            </li>
            <li>
              <Button variant="productos">Productos</Button>
            </li>
            <li>
              <Button variant="nosotros">Nosotros</Button>
            </li>
            <li>
              <Button variant="contactos">Contactos</Button>
            </li>
          </ul>
        </div> */}
      </div>
    </header>
  );
};

export default NavBar;
