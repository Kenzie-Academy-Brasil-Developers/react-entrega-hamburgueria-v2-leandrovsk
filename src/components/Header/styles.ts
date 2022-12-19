import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    min-width: 100%;

    align-items: center;
    background: #f5f5f5;

    .HeaderContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px 40px;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto;
    max-width: 1450px;
    }

    .SearchContainer {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .LogoutBtn{
        border: none;
        cursor: pointer;
        margin-left: 20px;
        background-color: transparent;
    }

    .CartBtn{
        border: none;
        cursor: pointer;
        margin-left: 20px;
        background-color: transparent;
        position: relative;
    }

    .CartBtn p {
        color: #ffffff;
        font-weight: 700;
        position: absolute;
        right: 5px;
        top: 3px;
        
    }

    @media (width < 730px) {
    .HeaderContainer {
        justify-content: center;
    }
    }
`