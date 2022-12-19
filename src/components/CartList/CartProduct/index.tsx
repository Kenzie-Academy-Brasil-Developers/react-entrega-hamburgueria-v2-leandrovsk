import { iProduct } from "../../../contexts/UserContext"
import { StyledCartProduct } from "./styles"
import trash from '../../../assets/img/trash.svg'
import { useContext } from "react"
import { CartContext } from "../../../contexts/CartContext"

const CartProduct = ({ id, name, price, img, category}: iProduct) => {

  const { removeProductFromCart } = useContext(CartContext)

  return (
    <>
        <StyledCartProduct id={id}>
            <figure>
              <img src={img} alt={name} />
            </figure>
            <span className="CartProductDesc">
              <h4>{name}</h4>
              <p>{category}</p>
            </span>
            <button onClick={() => removeProductFromCart(id)}>
              <img src={trash} alt="trash icon" />
            </button>
        </StyledCartProduct>
    </>
  )
}

export default CartProduct