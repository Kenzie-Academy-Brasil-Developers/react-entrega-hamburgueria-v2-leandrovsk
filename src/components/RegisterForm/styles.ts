import styled from "styled-components";

export const StyledRegisterForm = styled.form`
    
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 500px;
        max-width: 100%;
        gap: 15px;

    .FormError {
        font-size: 1.4rem;
        color: var(--color-negative);
    }
`