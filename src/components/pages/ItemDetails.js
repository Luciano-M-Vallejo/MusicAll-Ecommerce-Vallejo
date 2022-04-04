//STYLES

//LIBRARIES
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//COMPONENTS
import Items from "../Utils/Items";
import ItemDetailContainer from '../item-list-conteiner/ItemDetailContainer';


const DatailPage = () => {

  const { id } = useParams()
  
  const getInstrument = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Items);
      }, 100);
    }); 
  };

  const [instrument, setInstrument] = useState([])

  useEffect(() => {
    getInstrument().then((data) => {
      setInstrument(data.promos)
      filterInstrumentById(instrument, id)
    }).finally(() => {})
  })
  // useEffect(() => {
  //   filterInstrumentById(instrument, id)
  // },[id])
  
  const [product, setProduct] = useState({})

  const filterInstrumentById = (instrument,  id) => {
    return instrument.filter((product) => {
      if (product.id === parseInt(id) ) {
        return setProduct(product)
      }
    })
  }
    return (
      <Container>
        <ItemDetailContainer data={ product }/>
      </Container>
    )
}

export default DatailPage;