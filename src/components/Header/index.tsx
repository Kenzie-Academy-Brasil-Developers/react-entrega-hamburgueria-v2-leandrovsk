import { StyledHeader } from "./styles"
import logo from '../../assets/img/logo.svg'
import InputSearch from "../InputSearch"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { CartContext } from "../../contexts/CartContext"
import logout from '../../assets/img/logout.svg'
import cart from '../../assets/img/cart.svg'

const Header = () => {

  const { userLogout } = useContext(UserContext)
  const { setModal, cartProducts } = useContext(CartContext)

  return (
    <>
        <StyledHeader>
          <span className="HeaderContainer">
            <img src={logo} alt="logotipo" />
            <span className="SearchContainer">
              <InputSearch />
              <button className="CartBtn" onClick={() => setModal(true)}>
                <img src={cart} alt="cart button" />
                <p>{cartProducts ? cartProducts.length : 0}</p>
              </button>
              <button className="LogoutBtn" onClick={() => userLogout()}>
                <img src={logout} alt="logout button" />
              </button>
            </span>
          </span>
        </StyledHeader>
    </>
  )
}

export default Header