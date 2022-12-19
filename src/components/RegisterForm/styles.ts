import styled from "styled-components";

export const StyledRegisterForm = styled.form`
    
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 500px;
        max-width: 100%;
        gap: 22px;
        border: 2px solid var(--color-gray-0);
        padding:24px;
        border-radius: 8px;


    .FormError {
        font-size: 1.4rem;
        color: var(--color-negative);
    }
`