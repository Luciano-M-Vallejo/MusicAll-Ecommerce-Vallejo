//STYLES
import "./items.css";

//LIBRARIES
import { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

//COMPONENTS
import dataBaseFire from "../Utils/Firebase";
import ItemListContainer from "./ItemListContainer";
// import Items from "../Utils/Items";


const ShowList = () => {
  
  const imag = require.context('../../assets/img', true)

  const [loading, setLoading] = useState(true)
  const [instruments, setInstruments] = useState([])

  const getInstruments = async () => {
    const itemsCollection = collection(dataBaseFire, 'promos')
    const intrumentsSnapshot = await getDocs(itemsCollection)
    const instrumentsList = intrumentsSnapshot.docs.map((doc) => {
      let instrument = doc.data()
      instrument.id = doc.id
      // console.log(instrument)
      return instrument
    })
    console.log(instrumentsList)
    return instrumentsList
    //PROMESA LOCAL
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(Items);
    //   }, 2000);
    // });
  };


  useEffect(() => {
    getInstruments()
    getInstruments().then((instruments) => {
      setLoading(false)
      setInstruments(instruments)
    })
  },[])

  // const getInstrument = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(Items);
  //     }, 3000);
  //   }); 
  // };

// 
  //   useEffect(() => {
  //   getInstrument().then((data) => {
  //     // setInstrument(data.promos[0])
  //   }).finally(() => {})
  // })
  // const time = Object.keys(instrument).length

  return (
    <div className="showItems">
      {loading ? (
        <div class="loader-wrapper">
          <div class="loader">
            <div class="loader loader-inner"></div>
          </div>
        </div>
      ) : (
        <Container fixed className='container'>
          <Carousel>
            { instruments.map((instrument, i) => {
              return (
                <Paper>
                  {/* <img src={instrument.img} alt={instrument.name} height={180} width={ 280 }/> */}
                  <img src={imag(`./${instrument.type}/${instrument.img}`)} alt={instrument.name} height={180} width={280} />
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
            
            {instruments.map((instrument) => {
              const { id } = instrument
              return (
                  <ItemListContainer data={instrument} key={id}/>
                )
              })}
          </Stack>
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