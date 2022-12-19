import  { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartList from '../CartList'
import CartTotal from './CartTotal'
import { StyledCartModal } from './styles'

const CartModal = () => {

  const { modal, setModal, cartProducts } = useContext(CartContext)

  return (
    <>
        <StyledCartModal className={ modal ? 'Enabled' : 'Disabled'}>
            <div className='ModalContainer'>
              <span className='CartHeader'>
                  <h3>Carrinho de compras</h3>
                  <button className='CloseModalBtn' onClick={() => setModal(false)}>X</button>
              </span>
              <CartList/>
              {cartProducts?.length !== 0 && <CartTotal/>}
            </div>
        </StyledCartModal>
    </>
  )
}

export default CartModal