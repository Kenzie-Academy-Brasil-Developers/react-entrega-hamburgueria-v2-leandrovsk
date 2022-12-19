import { useContext } from "react"
import CardList from "../../components/CardList"
import CartList from "../../components/CartList"
import Header from "../../components/Header"
import { UserContext } from "../../contexts/UserContext"

const Home = () => {

  

  return (
    <>
      <Header/>
      <CardList/>
    </>
  )
}

export default Home