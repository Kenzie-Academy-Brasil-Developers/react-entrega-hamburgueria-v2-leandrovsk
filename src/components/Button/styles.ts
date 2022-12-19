import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    transition: ease 0.3s;
    font-size: 1.6rem;
    font-weight: 700;
    
    &:hover{
        filter: brightness(0.9);
    }


    &.LoginSubmitBtn {
        width: 100%;
        height: 60px;
        border-radius: 0.8rem;
        border: none;
        color: var(--color-gray-0);
        background-color: var(--color-primary);
    }

    &.RegisterSubmitBtn {
        width: 100%;
        height: 60px;
        border-radius: 0.8rem;
        border: none;
        color: var(--color-gray-2);
        background-color: var(--color-gray-1);
    }

`