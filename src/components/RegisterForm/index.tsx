import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Button from '../Button'
import Input from '../Input'
import * as yup from 'yup'
import { StyledRegisterForm } from './styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import RegisterFormHeader from './RegisterFormHeader'

export interface iRegisterFormValues {
    name: string;
    email: string;
    password:string;
    confirmPassword?:string;
}

const RegisterForm = () => {

    const formSchema = yup.object().shape({
        name: yup.string().required('Digite um nome'),
        email: yup.string().required('Digite um email válido').email('Email inválido'),
        password: yup.string().required('Digite uma senha'),
        confirmPassword: yup.string().required('Confirme sua senha').oneOf([yup.ref('password')], 'As senhas não coincidem'),
    })

    const {register, handleSubmit, formState: { errors }} = useForm<iRegisterFormValues>({mode:'onChange', resolver: yupResolver(formSchema)})

    const { userRegister, globalLoading } = useContext(UserContext)

    const submit: SubmitHandler<iRegisterFormValues> = (data) => {
        userRegister(data)
    }

  return (
    <>
        <StyledRegisterForm onSubmit={handleSubmit(submit)}>
        <RegisterFormHeader/>
            <Input name='name' type='text' label='Nome' placeholder='Digite seu nome' register={register}/>
            {errors.name && <p className='FormError'><>{errors.name.message}</></p>}
            <Input name='email' type='email' label='Email' placeholder='Digite seu email' register={register}/>
            {errors.email && <p className='FormError'><>{errors.email.message}</></p>}
            <Input name='password' type='password' placeholder='Senha' register={register}/>
            {errors.password && <p className='FormError'><>{errors.password.message}</></p>}
            <Input name='confirmPassword' type='password'  placeholder='Confirmar senha' register={register}/>
            {errors.confirmPassword && <p className='FormError'><>{errors.confirmPassword.message}</></p>}
            <Button className='RegisterSubmitBtn' content={globalLoading ? 'Cadastrando...' : 'Cadastrar'} type='submit'/>
        </StyledRegisterForm>
    </>
  )
}

export default RegisterForm