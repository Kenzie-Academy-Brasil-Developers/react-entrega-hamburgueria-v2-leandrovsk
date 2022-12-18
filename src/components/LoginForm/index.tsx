import { Link } from 'react-router-dom'
import Button from '../Button'
import Input from '../Input'
import { StyledLoginForm } from './styles'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup' 
import { FieldValues, useForm } from 'react-hook-form'
import { ReactNode } from 'react';


const LoginForm = () => {


    const formSchema = yup.object().shape({
        email:yup.string().required('Digite um email válido').email('Email inválido'),
        password: yup.string().required('Digite uma senha'),
    })

    const { handleSubmit, register, formState:{ errors} } = useForm( {mode: "onChange", resolver: yupResolver(formSchema) })

    const submit = (data:FieldValues) => {
        console.log(data)
    }
  return (
    <>
        <StyledLoginForm onSubmit={handleSubmit(submit)}>
            <Input placeholder='Digite seu email' name='email' label='Email' type='email' register={register}/>
             {errors.email && <p className='FormError'><>{errors.email.message}</></p>}
            <Input placeholder='Digite sua senha' name='password' label='Senha' type='password' register={register}/>
            {errors.password && <p className='FormError'><>{errors.password?.message}</></p>}
            <Button type='submit' content='Logar' className='RegisterLoginBtn'/>
            <p className='FormMicroDesc'>Crie sua conta para saborear várias delícias e matar sua fome!</p>
            <Link to='/register'>Cadastro</Link>
        </StyledLoginForm>
    </>
  )
}

export default LoginForm