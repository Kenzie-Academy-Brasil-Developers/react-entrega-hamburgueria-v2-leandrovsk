import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import CartProduct from "./CartProduct"
import { StyledCartList } from "./styles"

const CartList = () => {

  const { cartProducts } = useContext(CartContext);

  if(cartProducts?.length !== 0) {
    return (
      <>
      <StyledCartList>
        {cartProducts?.map(product => <CartProduct id={product.id} name={product.name} price={product.price} img={product.img} category={product.category} key={product.id} />)}
      </StyledCartList>
    </>
    )
  }

  return (
    <>
      <StyledCartList>
        <div className="emptyCartContainer">
          <h3>Sua Sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      </StyledCartList>
    </>
  )
}

export default CartList