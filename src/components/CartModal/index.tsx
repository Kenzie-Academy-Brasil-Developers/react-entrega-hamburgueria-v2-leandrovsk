import  { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartList from '../CartList'
import { StyledCartModal } from './styles'

const CartModal = () => {

    const { modal } = useContext(CartContext)
  return (
    <>
        <StyledCartModal className={ modal ? 'Enabled' : 'Disabled'}>
            <div className='ModalContainer'>
            <span>
                <h3></h3>
            </span>
             <CartList/>
            </div>
        </StyledCartModal>
    </>
  )
}

export default CartModal