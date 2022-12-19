import styled from "styled-components";

export const StyledCardList = styled.ul`
    display: flex;
    width: 100%;
    min-width: 250px;
    flex-wrap: wrap;
    gap: 55px;
    height: fit-content;
    padding: 40px;


  @media (width < 730px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    width: 100%;
    height: 380px;

    ::-webkit-scrollbar {
      background: transparent;
    }
  }
`