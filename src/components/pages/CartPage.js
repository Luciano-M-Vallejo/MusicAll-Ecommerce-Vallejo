//STYLES
import '../../App.css'

//LIBRARIES
import { useContext, useState, useEffect } from "react";
import {
    CardActions, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper, CardMedia, Container, Button, ButtonGroup, TextField, Alert, IconButton, Grid, FormControl,
    InputLabel, Input, FormHelperText
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addDoc, collection } from 'firebase/firestore';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

//COMPONENTS
import CartContext from "../context/CartContext";
import ItemCount from "../item-list-conteiner/ItemCount"
import Modal from "../modal/Modal"
import dataBaseFire from "../Utils/Firebase";


const CartPage = (() => {

    const imag = require.context('../../assets/img', true)

    const [count, setCount] = useState(1);
    
    const { cartInstruments, deleteInstrument, totalPrice, deleteAllInstrument } = useContext(CartContext)
    const [instrumentAdded, setInstrumentAdded] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState(
        {
            client: {
                name: '',
                phone: '',
                email: '',
            },
        })
    
    const [order, setOrder] = useState(
        {
            buyer : formData,
            items: cartInstruments.map((cartInstrument) => {
                return {
                    id: cartInstrument.id,
                    name: cartInstrument.name,
                    price: cartInstrument.price
                }
            }),
            endPrice: totalPrice
        }
    )

    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {...order,
            buyer: formData
        }
        setOrder({...order,
            buyer: formData})
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(dataBaseFire, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccessOrder(orderDoc.id)
        
    }

    const handleChange = (e) => {
        const {value, name} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    useEffect(() => {
        setInstrumentAdded(cartInstruments) 
        console.log(instrumentAdded)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteInstrument])
        
    // console.log(cartInstruments.lenght)
   
    return (
        cartInstruments.length !== 0 ? (
            <Container fixed className='container'>
            <div>
                {console.log(cartInstruments)}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="center">IMAGENES</TableCell>
                            <TableCell align="center">INSTRUMENTOS</TableCell>
                            <TableCell align="center">PRECIO</TableCell>
                            <TableCell align="center">CANTIDAD</TableCell>
                            <TableCell align="center">ELIMINAR</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartInstruments.map((cartInstrument) => {
                                const { name, type, price, stock, img, description, detail, id } = cartInstrument
                                return (
                                    <TableRow
                                        key={id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <CardMedia
                                                component="img"
                                                height={80}
                                                image={imag(`./${type}/${img}`)}
                                                alt={name}
                                            />
                                        </TableCell>
                                        <TableCell align="center">{name}</TableCell>
                                        <TableCell align="center">$ {price}</TableCell>
                                        <TableCell align="center">
                                             {/* <TextField
                                                    id="outlined-read-only-input"
                                                    value = {() => changeCount(value)}
                                                    InputProps={{
                                                    readOnly: false,
                                                    }}
                                            /> */}
                                            <ButtonGroup className="grupo">
                                                <Button
                                                    id={`buttonRemove${id}`}
                                                    aria-label="reduce"
                                                    variant="contained"
                                                    onClick={() => setCount(count - 1)}
                                                    disabled={count === 1}
                                                >
                                                    <RemoveIcon fontSize="small" />
                                                </Button>
                                                <TextField
                                                    id="outlined-read-only-input"
                                                    value={count}
                                                    InputProps={{
                                                    readOnly: false,
                                                    }}
                                                />
                                                <Button
                                                    id={`buttonAdd${id}`}
                                                    aria-label="increase"
                                                    variant="contained"
                                                    onClick={() => setCount(count + 1)}
                                                    disabled={count === stock}
                                                >
                                                    <AddIcon fontSize="small" />
                                                </Button>
                                            </ButtonGroup>
                                            {/* <ItemCount /> */}
                                        </TableCell>
                                        <TableCell align="center"><button className="decorations" onClick={() => deleteInstrument(cartInstrument)}><DeleteIcon /></button></TableCell>
                                    </TableRow>
                                )
                        })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className='cart-footer'>
                <Button variant="contained" size="medium">
                    <Link to={`/productos/`} className="buttonBuy" >Continuar comprando</Link>
                </Button>
                    <div className='cart-checkout-details'>
                        <div className='cart-checkout__subtotal'>
                            <p>Subtotal</p>
                            <span>$ {totalPrice * count}</span>
                        </div>
                        <div className='cart-checkout__total'>
                            <p>Total</p>
                            <span>$ {totalPrice * count}</span>
                        </div>
                        <Button className='btn-custom' onClick={() => setOpenModal(true)}  variant="contained" size="medium">Completar Compra</Button>
                    </div>
            </div>
            {console.log("formData:", formData)}
            <Modal handleClose={() => setOpenModal(false)} open={openModal}>
                
                {successOrder ? (
                        
                            <Alert variant="filled" severity="success"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => { deleteAllInstrument() }}
                                    >
                                    <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                {cartInstruments.length === 1 ? (
                                    <div>
                                        <h3>Su instrumento fue solicitado Exitosamente</h3>
                                        <h5>Su numero de orden es: <strong>{successOrder}</strong></h5>
                                    </div>
                                ) : (
                                    <div>
                                        <h3>Sus instrumentos fueron solicitados Exitosamente</h3>
                                        <h5>Su numero de orden es: <strong>{successOrder}</strong></h5>
                                    </div>
                                )}
                                
                            </Alert>
                    
                ) : (
                            
                    <div>
                        <h2 className='alineamiento'>Datos del Cliente</h2>
                        <form onSubmit={handleSubmit}>
                            <Grid container>
                                <Grid width={500}>
                                    <FormControl className='spaces'>
                                        <InputLabel htmlFor='nombre'>Nombre</InputLabel>
                                        <Input id='nombre' type='text' name='name' onChange={handleChange} value={formData.name} aria-describedby='nameHelp'/>
                                        <FormHelperText id='nameHelp'>Nombre Completo </FormHelperText>
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel htmlFor='phone'>Numero de Telefono</InputLabel>
                                        <Input id='phone' type='number' name='phone' onChange={handleChange} value={formData.phone} aria-describedby='phoneHelp'/>
                                        <FormHelperText id='phoneHelp'> (+54) 11 + Numero</FormHelperText>
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel htmlFor='email'>Email</InputLabel>
                                        <Input id='email' type='email' name='email' onChange={handleChange} value={formData.email} aria-describedby='emailHelp'/>
                                        <FormHelperText id='emailHelp'>Ej: algo@gmail.com </FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <div className='alineamiento2'>
                                <Button  variant="contained" size="medium" type="submit">Enviar</Button>
                            </div>
                        </form>
                    </div>
                )}
                
            </Modal>
        </Container>
        ) : (
            <div>
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary" className='alineamiento'>
                        Usted NO tiene Instrumentos es su carrito
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="medium" ><Link to={`/productos/`} className="buttonBuy">Continuar comprando</Link></Button>
                </CardActions>
            </div>
        )
        
    )
})

export default CartPage