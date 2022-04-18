//STYLES
import "./items.css";

//LIBRARIES
import { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid } from '@mui/material'
import { Link } from "react-router-dom";

//COMPONENTS
import ItemListContainer from "./ItemListContainer";
import Items from "../Utils/Items";


const ShowList = ({ children }) => {

  const [loading, setLoading] = useState(true)

  const getInstruments = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Items);
      }, 2000);
    });
  };

  const [products, setProducts] = useState([])

  useEffect(() => {
    getInstruments().then((data) => {
      setLoading(false)
      setProducts(data.promos)
    }).finally(() => {})
  })

  const getInstrument = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Items);
      }, 3000);
    }); 
  };

  // const [instrument, setInstrument] = useState([])
// 
    useEffect(() => {
    getInstrument().then((data) => {
      // setInstrument(data.promos[0])
    }).finally(() => {})
  })
  // const time = Object.keys(instrument).length

  return (
    <div className="showItems">
      <h3>{children}</h3>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <Container fixed>
          <Carousel>
            { products.map((instrument, i) => {
              return (
                <Paper>
                  <img src={instrument.img} alt={instrument.name} height={180} width={ 280 }/>
                  <h2>{instrument.name}</h2>
                  <p>{instrument.description}</p>
                  <Link to={`/productos/${instrument.id}`} className="decorations">
                  <Button>
                    Mas Info
                  </Button>
                  </Link>
                </Paper>
              )
            })}
          </Carousel>
          <Stack direction="row" spacing={1} >
            
            {products.map((product) => {
              const { id } = product
              return (
                  <ItemListContainer data={product} key={id}/>
                )
              })}
          </Stack>
          {/* <Stack>
            {time !== 0 ? <ItemDetailContainer data={ instrument } /> : ''}
          </Stack> */}
        </Container>
      )}
    </div>
  );
};

export default ShowList;


// <Stack
//         spacing={2}
//         direction="row"
//         divider={<Divider orientation="vertical" flexItem />}
//       >
//         <ItemListContainer
//           title="Chello"
//           typeInstrument="Cuerdas"
//           price={100}
//           stock={15}
//         />
//         <ItemListContainer
//           title="Saxo"
//           typeInstrument="Viento"
//           price={100}
//           stock={10}
//         />
//         <ItemListContainer
//           title="Timbal"
//           typeInstrument="Percucion"
//           price={100}
//           stock={5}
//         />
//         <ItemListContainer
//           title="Bajo"
//           typeInstrument="Electronico"
//           price={100}
//           stock={30}
//         />
//       </Stack>