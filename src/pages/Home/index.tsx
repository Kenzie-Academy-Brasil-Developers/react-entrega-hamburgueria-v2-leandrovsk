import { useContext } from "react"
import CardList from "../../components/CardList"
import CartList from "../../components/CartList"
import { UserContext } from "../../contexts/UserContext"

const Home = () => {

  const { userLogout } = useContext(UserContext)

  return (
    <>
      <header>
        <button onClick={() => userLogout()}>Sair</button>
      </header>
      <CardList/>
      <CartList/>
    </>
  )
}

export default Home