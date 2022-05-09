//STYLES
import '../../App.css'

//LIBRARIES
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//COMPONENTS
// import Items from "../Utils/Items";
import ItemDetail from '../item-list-conteiner/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import dataBaseFire from "../Utils/Firebase";


const DatailPage = () => {

  const { id } = useParams()
  console.log(id)
  const navigate = useNavigate()
  
  const [instrument, setInstrument] = useState([])
  const getInstrument = async () => {
    const docRef = doc(dataBaseFire, "instrumentos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      let instrument = docSnap.data()
            instrument.id = docSnap.id
            setInstrument(instrument)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      navigate('/error')
    }

    
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(Items);
    //   }, 100);
    // }); 
  };

  console.log(instrument)
  // useEffect(() => {
  //   getInstrument().then((data) => {
  //     setInstrument(data.promos)
  //     filterInstrumentById(instrument, id)
  //   }).finally(() => {})
  // })
  useEffect(() => {
    getInstrument()
    // filterInstrumentById(instrument, id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])
  
  console.log(instrument)
  // const [product, setProduct] = useState({})

  // console.log(product)

  // const filterInstrumentById = (instrument,  id) => {
  //   return instrument.filter((product) => {
  //     if (product.id === parseInt(id) ) {
  //       return setProduct(product)
  //     }
  //   })
  // }
    return (
      <Container fixed className='container'>
        <ItemDetail data={ instrument }/>
      </Container>
    )
}

export default DatailPage;