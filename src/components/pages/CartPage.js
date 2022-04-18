//STYLES
import '../../App.css'

//LIBRARIES
import { useContext } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CardMedia, Container, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

//COMPONENTS
import CartContext from "../context/CartContext";

const CartPage = (() => {

    const { cartInstruments, deleteInstrument, totalPrice } = useContext(CartContext)
    
    console.log(cartInstruments)
    console.log(totalPrice)
   
    return (
        <Container>
            <div>
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
                        {cartInstruments.map((cartInstrument) => (
                            <TableRow
                            key={cartInstrument.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                <CardMedia
                                    component="img"
                                    height={80}
                                    image={cartInstrument.img}
                                    alt={cartInstrument.name}
                                />
                            </TableCell>
                            <TableCell align="center">{cartInstrument.name}</TableCell>
                            <TableCell align="center">$ {cartInstrument.price}</TableCell>
                            <TableCell align="center">{cartInstrument.quantity}</TableCell>
                            <TableCell align="center"><button className="decorations" onClick={() => deleteInstrument(cartInstrument)}><DeleteIcon /></button></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
             <div>
                <Button className='btn-custom'>Continuar comprando</Button>
                    <div >
                        <div>
                            <p>Subtotal</p>
                            <span>$ {totalPrice}</span>
                        </div>
                        <div>
                            <p>Total</p>
                            <span>$ {totalPrice}</span>
                        </div>
                        <Button className='btn-custom'>Completar Compra</Button>
                    </div>
                </div>
        </Container>
    )
})

export default CartPage