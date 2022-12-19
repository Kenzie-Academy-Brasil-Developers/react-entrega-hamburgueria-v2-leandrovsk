import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 346px;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    transition: ease .3s;

    &:hover {
        scale: 1.1;
        border: 2px solid var(--color-primary);
    }

    &:hover .addProductToCartBtn{
        background-color: var(--color-primary);
    }

    .addProductToCartBtn {
        background-color: var(--color-gray-2);
        height: 40px;
        padding: 0px 20px;
        width: fit-content;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        font-size: 1.4rem;
        border: none;
        cursor: pointer;
        transition: ease 0.3s;
    }

    .addProductToCartBtn:hover {
        filter: brightness(0.9);
    }

    figure {
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    }

    figure img {
    width: 100%;
    height: 150px;
    object-fit: contain;
    }

    span {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    height: 100%;
    }

    span h3 {
    color: #333333;
    font-weight: 700;
    font-size: 1.8rem;
    }

    span h4 {
    color: #27ae60;
    font-weight: 600;
    font-size: 1.4rem;
    }

    span h5 {
    color: #828282;
    font-size: 1.2rem;
    font-weight: 400;
    }

    @media (width < 730px) {
    min-width: 300px;
    }
`