import { createContext, useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
    const [cartInstruments, setCartInstruments] = useState([])

    const addInstrumentToCart = (instrument) => {
        console.log('Instrumento: ', instrument)
            setCartInstruments(cartInstruments => [...cartInstruments, instrument])
    }

    const totalPrice = () => {
        let total = 0

        cartInstruments.map( (cartInstrument) => {
           total = cartInstrument.price + total
        })

        return total
    }

    const deleteProduct = (instrument) => {
        setCartInstruments(cartInstruments.filter( cartInstrument => cartInstrument.id !== instrument.id))
    }

    const data = {
        cartInstruments,
        addInstrumentToCart,
        totalPrice,
        deleteProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext