//STYLES
import "../../App.css"

//LIBRARIES
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material'
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom'



//COMPONENTS
import dataBaseFire from "../Utils/Firebase";
import ItemListContainer from "../item-list-conteiner/ItemListContainer";


const InstrumentsCategory = () => {

    const imagCategory = require.context('../../assets/img/categorias/', true)
    const [categoryInstruments, setCategoryInstruments] = useState([])
    const [loading, setLoading] = useState(false)

    
    // let categoryInstrumentsList = '';
    // const {algo} = useParams()
    const [categoryInstrumentsList, setCategoryInstrumentsList] = useState()
    const prueba = (param) => {
        setCategoryInstruments([])
        setCategoryInstrumentsList(param)
        setLoading(true)
        console.log(categoryInstrumentsList)
    }

    const getCategoryInstruments = async () => {
    const itemsCollection = collection(dataBaseFire, 'instrumentos')
    const intrumentsSnapshot = await getDocs(itemsCollection)
    const instrumentsList = intrumentsSnapshot.docs.map((doc) => {
        let instrument = doc.data()
        instrument.id = doc.id
        return instrument
    })
    console.log(instrumentsList)
    return instrumentsList
    };
    
    
    useEffect(() => {
        getCategoryInstruments()
        getCategoryInstruments().then((instruments) => {
            categoryInstrumentsList !== '' ? filterProductByCategory(instruments, categoryInstrumentsList) : setCategoryInstruments(instruments)
            setLoading(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryInstrumentsList])
    
    console.log(categoryInstruments)

    const filterProductByCategory = (array , category) => {
        return array.map( (product, i) => {
            if(product.type === category) {
               return setCategoryInstruments(products => [...products, product]);
            }
        })
    }
    


    return (
        <Container fixed className='container'>
            <Stack direction="row" spacing={2} >
                <div className='container'>
                    <Button onClick={ (e) => {prueba('cuerdas')}}>
                        <div>
                            <Avatar
                                alt="Cuerdas"
                                src={imagCategory(`./cuerdas.jpg`)}
                                sx={{ width: 250, height: 250 }}
                                />
                            <h2 id="cuerdas" >Cuerdas</h2>
                        </div>
                    </Button>
                    <Button onClick={(e) => {prueba('electronico')}}>
                        <div>
                            <Avatar
                                alt="electronicos"
                                src={imagCategory(`./electronicos.jpg`)}
                                sx={{ width: 250, height: 250 }}
                            />
                            <h2 id="electronicos" >Electronicos</h2>
                        </div>
                    </Button>
                    <Button onClick={(e) => {prueba('percusion')}}>
                        <div>
                            <Avatar
                                alt="percusion"
                                src={imagCategory(`./percusion.jpg`)}
                                sx={{ width: 250, height: 250 }}
                            />
                            <h2 id="percusion" >Percusion</h2>
                        </div>
                    </Button>
                    <Button onClick={(e) => {prueba('viento')}}>
                        <div>
                            <Avatar
                                alt="viento"
                                src={imagCategory(`./viento.jpg`)}
                                sx={{ width: 250, height: 250 }}
                            />
                            <h2 id="viento" >Viento</h2>
                        </div>
                    </Button>
                </div>
            </Stack>
            {loading ? (
                <div className="alineamiento">
                    <div class="loader-wrapper">
                        <div class="loader">
                            <div class="loader loader-inner"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <p></p>
            )}
            {categoryInstrumentsList !== '' ? (
                <Stack direction="row" spacing={1} >
                    {categoryInstruments.map((instrument) => {
                        const { id } = instrument
                        return (
                            <ItemListContainer data={instrument} key={id}/>
                        )
                    })}
                </Stack>
            ) : (
                <h2>Cargando...</h2>
            )}
        </Container>
    )
}


export default InstrumentsCategory