import LoginForm from '../../components/LoginForm'
import SideDesc from '../../components/SideDesc'
import { StyledLoginPage } from './styles'

const Login = () => {
  return (
    <StyledLoginPage className='container'>
      <LoginForm />
      <SideDesc />
    </StyledLoginPage>
  )
}

export default Login