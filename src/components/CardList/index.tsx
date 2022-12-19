import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import Card from './Card'
import { StyledCardList } from './styles'

const CardList = () => {

    const { products } = useContext(UserContext)

  return (
    <>
        <StyledCardList className='container'>
            {products?.map(product => <Card id={product.id} name={product.name} price={product.price} img={product.img} category={product.category} key={product.id}/> )}
        </StyledCardList>    
    </>
  )
}

export default CardList