import { StyledSideDesc } from "./styles"
import logo from '../../assets/img/logo.svg'
import banner from '../../assets/img/banner.svg'

const SideDesc = () => {
  return (
    <>
        <StyledSideDesc>
            <img className="logo" src={logo} alt="logotipo" />
            <img src={banner} alt="banner" />
        </StyledSideDesc>
    </>
  )
}

export default SideDesc