import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { iProduct, UserContext } from "./UserContext";

interface iCartProviderProps {
    children: React.ReactNode;
}

interface iCartContext {
    cartProducts: null | iProduct[];
    setCartProducts:React.Dispatch<React.SetStateAction<iProduct[]>>;
    addProductToCart: (id: string) => void;
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    removeProductFromCart: (id:string) => void;
    handleSearch: (value:string) => void;
}

export const CartContext = createContext({} as iCartContext)

export const CartProvider = ({ children }: iCartProviderProps) => {

    const { products, setProducts, getProductsData } = useContext(UserContext)

    const [cartProducts, setCartProducts] = useState<iProduct[]>([])
    const [modal, setModal] = useState(false)

    const addProductToCart = (id: string) => {
        const item: iProduct | undefined = products?.find(product => product.id === id)
        const checkDuplicated = cartProducts.find(product => product.id === id)
        if (!checkDuplicated && item) {
            setCartProducts([...cartProducts, item])
            toast.success(`O item ${item.name} foi adicionado ao carrinho com sucesso!`)
        } else {
            toast.warning(`O item ${item?.name} já foi adicionado ao carrinho!`)
        }
    }

    const removeProductFromCart = (id: string) => {
        const newCartProducts = cartProducts.filter((product) => {
             return product.id !== id
        });
        setCartProducts(newCartProducts)
    }

    function handleSearch(value:string) {
        const foundProducts = products?.filter(
          (element) => element.name.toLowerCase().includes(value.toLowerCase()) || element.category.toLowerCase().includes(value.toLowerCase())
        );

        if (value !== "") {
           foundProducts && setProducts(foundProducts);
        } else {
          getProductsData()
        }
      }

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, addProductToCart, modal, setModal, removeProductFromCart, handleSearch }}>
            {children}
        </CartContext.Provider>
    )
}