import { StyledButton } from './styles'

interface iButton{
    content:string;
    type: 'button' | 'submit';
    className: string;
}

const Button = ({ content, type, className}:iButton) => {
  return (
    <>
        <StyledButton type={type} className={className}>{content}</StyledButton>
    </>
  )
}

export default Button