import styled from "styled-components";

export const StyledInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: relative;
   
    input{
        width: 100%;
        height: 60px;
        border: 0.2rem solid var(--color-gray-3);
        border-radius: 0.8rem;
        padding-left: 10px;
        position: relative;
        background-color: #FFFFFF;
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--color-gray-3);
        outline: none;
    }

    label {
        z-index: 99;
        position: absolute;
        background-color: white;
        padding: 5px;
        left: 15px;
        top: -12px;
        font-size: 1.2rem;
        color: #999999;


    }
`