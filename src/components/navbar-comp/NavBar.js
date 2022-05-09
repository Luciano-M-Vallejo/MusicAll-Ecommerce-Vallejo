//STYLES
import "./NavBar.css";

//LIBRARIES
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

//COMPONENTS
import Button from "@mui/material/Button";
import clavedeDo from "../../assets/img/logo/clavedeDo.png";
import Pages from "../Utils/Pages"

const NavBar = () => {
   const getPages = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Pages);
      }, 100);
    });
  };
  const [pages, setPages] = useState([])

  useEffect(() => {
    getPages().then((data) => {
      setPages(data.pagesViews)
    }).finally(() => {})
  })

  return (
    <header>
      <div className="navbar_body">
        <Stack spacing={6} direction="row" className="navbar">
          <Link to='/' >
          <img
            src={clavedeDo}
            className="img-header"
            alt="none"
            width={60}
            height={60}
          />
          </Link>
          {pages.map((page) => {
            return (
              <Button variant="contained" size="medium" className="button" key={page.id}>
                <Link to={page.url} className="links">{ page.title }</Link>
              </Button>
            )
          })}
          <CartWidget />
        </Stack>
      </div>
    </header>
  );
};

export default NavBar;
