import { FieldValues, UseFormRegister } from "react-hook-form";
import { StyledInput } from "./styles";

interface iInput{
    type: 'text' | 'password' | 'email';
    label: string;
    name: string;
    placeholder: string;
    register: UseFormRegister<FieldValues>;
}

const Input = ({ type, label, name, placeholder, register }:iInput) => {
  return (
    <>
        <label htmlFor={name}>{label}</label>
        <StyledInput placeholder={placeholder} id={name} type={type} {...register(`${name}`)}/>
    </>
  )
}

export default Input