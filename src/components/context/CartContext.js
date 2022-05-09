import { createContext, useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
    const [cartInstruments, setCartInstruments] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    // const [count, setCount] = useState(1);

    const addInstrumentToCart = (instrument) => {
        console.log('Instrumento: ', instrument)
        let exist = cartInstruments.find(cartInstrument => cartInstrument.id === instrument.id)
        if (!exist) {
            // setCount()
            setTotalPrice(totalPrice + instrument.price)
            setCartInstruments(cartInstruments => [...cartInstruments, instrument])
        }
    }

    // const totalPrice = () => {
    //     let total = 0

    //     cartInstruments.find( (cartInstrument) => {
    //        total = cartInstrument.price + total
    //     })

    //     return total
    // }

    const deleteInstrument = (instrument) => {
        setCartInstruments(cartInstruments.filter( cartInstrument => cartInstrument.id !== instrument.id))
    }

    const deleteAllInstrument = () => {
        setCartInstruments([])
    }

    const data = {
        cartInstruments,
        addInstrumentToCart,
        totalPrice,
        deleteAllInstrument,
        deleteInstrument
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext