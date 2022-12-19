import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { StyledCartTotal } from "./styles";


const CartTotal = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext)

  const cartSum = cartProducts?.reduce((previous, current) => previous + (current.price), 0).toFixed(2);

    return (
      <StyledCartTotal>
        <span className="TotalContainer">
          <h5>Total</h5>
          <p>R$ {cartSum}</p>
        </span>
        <button className="RemoveAllCartItemsBtn" onClick={() => setCartProducts([])}>Remover todos</button>
      </StyledCartTotal>
    )
  }

export default CartTotal;