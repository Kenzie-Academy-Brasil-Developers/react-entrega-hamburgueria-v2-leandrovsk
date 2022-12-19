import { UseFormRegister } from "react-hook-form";
import { iLoginFormValues } from "../LoginForm";
import { StyledInputDiv } from "./styles";

interface iInput{
    type: 'text' | 'password' | 'email';
    label?: string;
    name: string;
    placeholder: string;
    register: UseFormRegister<any>;
}

const Input = ({ type, label, name, placeholder, register }:iInput) => {
  return (
    <StyledInputDiv>
        {label && <label htmlFor={name}>{label}</label>}
        <input placeholder={placeholder} id={name} type={type} {...register(`${name}`)}/>
    </StyledInputDiv>
  )
}

export default Input