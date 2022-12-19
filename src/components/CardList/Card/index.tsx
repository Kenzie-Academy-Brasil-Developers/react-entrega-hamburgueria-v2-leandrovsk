import { useContext } from "react"
import { CartContext } from "../../../contexts/CartContext"
import { iProduct } from "../../../contexts/UserContext"
import { StyledCard } from "./styles"

const Card = ({ id, name, price, img, category}: iProduct) => {

const { addProductToCart } = useContext(CartContext);

  return (
    <>
        <StyledCard id={id}>
          <figure>
            <img src={img} alt={name} />
          </figure>
          <span>
          <h3>{name}</h3>            
            <h5>{category}</h5>
            <h4>R$ {price}</h4>
            <button className="addProductToCartBtn" onClick={() => addProductToCart(id)}>Adicionar</button>
          </span>
        </StyledCard>

    </>
  )
}

export default Card