import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import CartProduct from "./CartProduct"
import { StyledCartList } from "./styles"

const CartList = () => {

    const { cartProducts } = useContext(CartContext);

  return (
    <>
        <StyledCartList>
            {cartProducts?.map(product => <CartProduct id={product.id} name={product.name} price={product.price} img={product.img} category={product.category} key={product.id}/>)}
        </StyledCartList>
    </>
  )
}

export default CartList