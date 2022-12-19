import { iProduct } from "../../../contexts/UserContext"
import { StyledCartProduct } from "./styles"

const CartProduct = ({ id, name, price, img, category}: iProduct) => {
  return (
    <>
        <StyledCartProduct id={id}>
            <img src={img} alt={name} />
            <p>{name}</p>
            <p>{category}</p>
            <p>R$ {price}</p>
        </StyledCartProduct>
    </>
  )
}

export default CartProduct