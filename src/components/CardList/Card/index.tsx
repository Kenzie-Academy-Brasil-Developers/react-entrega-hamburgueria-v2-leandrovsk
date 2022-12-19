import { useContext } from "react"
import { CartContext } from "../../../contexts/CartContext"
import { iProduct } from "../../../contexts/UserContext"
import { StyledCard } from "./styles"

const Card = ({ id, name, price, img, category}: iProduct) => {

const { addProductToCart } = useContext(CartContext);

  return (
    <>
        <StyledCard id={id}>
            <img src={img} alt={name} />
            <p>{name}</p>
            <p>{category}</p>
            <p>R$ {price}</p>
            <button onClick={() => addProductToCart(id)}>Adicionar ao carrinho</button>
        </StyledCard>
    </>
  )
}

export default Card