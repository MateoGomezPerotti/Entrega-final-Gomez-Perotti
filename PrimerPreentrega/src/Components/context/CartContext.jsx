import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (items, quantity) => {
        if (isInCart(items.id)) {
            let produ = cart.find(prod => prod.id ===items.id)
            produ.quantity += quantity
            setCart ([...cart, ])

        } else {
            setCart([...cart, {...items, quantity:quantity}])
        }
    }

    const removeItem = (id) => {
        const items = cart.filter(items => items.id !== id)
        setCart ([...items])
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(items => items.id === id)
    }

    const contProduct = () => {
        return cart.reduce((acum, items) => acum += items.quantity, 0)
    }

    const sumaTotProdu = () => {
        return cart.reduce((acum, items) => acum += items.quantity * items.precio, 0)
    }


    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, contProduct, sumaTotProdu}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider;