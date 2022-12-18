import { FieldValues, useForm } from 'react-hook-form'
import Button from '../Button'
import Input from '../Input'
import * as yup from 'yup'
import { StyledRegisterForm } from './styles'
import { yupResolver } from '@hookform/resolvers/yup'

const RegisterForm = () => {

    const formSchema = yup.object().shape({
        name: yup.string().required('Digite um nome'),
        email: yup.string().required('Digite um email válido').email('Email inválido'),
        password: yup.string().required('Digite uma senha')
    })

    const {register, handleSubmit, formState: { errors }} = useForm({mode:'onChange', resolver: yupResolver(formSchema)})

    const submit = (data:FieldValues) => {
        console.log(data)
    }

  return (
    <>
        <StyledRegisterForm onSubmit={handleSubmit(submit)}>
            <Input name='name' type='text' label='Nome' placeholder='Digite seu nome' register={register}/>
            {errors.name && <p className='FormError'><>{errors.name.message}</></p>}
            <Input name='email' type='email' label='Email' placeholder='Digite seu email' register={register}/>
            {errors.email && <p className='FormError'><>{errors.email.message}</></p>}
            <Input name='password' type='password' label='Senha' placeholder='Digite sua senha' register={register}/>
            {errors.password && <p className='FormError'><>{errors.password.message}</></p>}
            <Button className='RegisterSubmitBtn' content='Cadastrar' type='submit'/>
        </StyledRegisterForm>
    </>
  )
}

export default RegisterForm