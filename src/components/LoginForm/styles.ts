import styled from "styled-components";

export const StyledLoginForm = styled.form`

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 500px;
        max-width: 90%;
        gap: 22px;
        border: 2px solid var(--color-gray-0);
        padding:24px;
        border-radius: 8px;

    .FormError {
        font-size: 1.4rem;
        color: var(--color-negative);
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        width: 100%;
        height: 60px;
        border-radius: 0.8rem;
        border: none;
        color: var(--color-gray-2);
        background-color: var(--color-gray-1);
        font-size: 1.6rem;
        font-weight: 700;
        cursor: pointer;
        transition: ease .3s;
    }

    a:hover {
        filter: brightness(0.9);
    }

`