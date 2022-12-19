import { createContext, ReactNode, useContext, useState } from "react";
import { iProduct, UserContext } from "./UserContext";

interface iCartProviderProps {
    children: React.ReactNode;
}

interface iCartContext {
    cartProducts: null | iProduct[];
    addProductToCart: (id: string) => void;
}

export const CartContext = createContext({} as iCartContext)

export const CartProvider = ({ children }: iCartProviderProps) => {

    const { products } = useContext(UserContext)

    const [cartProducts, setCartProducts] = useState<iProduct[]>([])

    const addProductToCart = (id: string) => {
        const item: iProduct | undefined = products?.find(product => product.id === id)
        const checkDuplicated = cartProducts.find(product => product.id === id)
        if (!checkDuplicated && item) {
            setCartProducts([...cartProducts, item])
        }
    }

    return (
        <CartContext.Provider value={{ cartProducts, addProductToCart }}>
            {children}
        </CartContext.Provider>
    )
}