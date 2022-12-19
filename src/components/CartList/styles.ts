import styled from "styled-components";

export const StyledCartList = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
    max-height: 350px;
    overflow-y: auto;
    padding: 20px;

    .emptyCartContainer {
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 100%;
    background: var(--color-gray-0);
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`