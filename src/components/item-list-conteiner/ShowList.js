//STYLES

//LIBRARIES
import { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

//COMPONENTS
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Items from "../Utils/Items";


const ShowList = ({ children }) => {


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
      setProducts(data.promos)
    }).finally(() => {
      console.log("Termino la llamada")
    })
  })

  const getInstrument = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Items);
      }, 3000);
    }); 
  };

  const [instrument, setInstrument] = useState([])

    useEffect(() => {
    getInstrument().then((data) => {
      setInstrument(data.promos[0])
    }).finally(() => {
      console.log("Termino la llamada 2")
    })
  })
  const time = Object.keys(instrument).length

  return (
    <div className="showItems">
      <h3>{children}</h3>
      <Container fixed>
        <Stack direction="row" spacing={2}>
          {products.map((product) => {
            const { id } = product
            return (
              <ItemListContainer data={product} key={id}/>
              )
            })}
        </Stack>
        <Stack>
          {time !== 0 ? <ItemDetailContainer data={ instrument } /> : ''}
        </Stack>
      </Container>
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