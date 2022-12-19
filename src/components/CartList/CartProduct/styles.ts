import styled from "styled-components";

export const StyledCartProduct = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  position: relative;

  figure {
    width: 80px;
    height: 80px;
    background: #e0e0e0;
    border-radius: 5px;
  }

  img {
    width: 100%;
  }

  .CartProductContainer {
    display: flex;
    gap: 10px;
  }

  .CartProductDesc {  
    position: relative;
  }

  .RemoveFromCartBtn {
    height: fit-content;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: ease .3s;
  }

  .RemoveFromCartBtn:hover {
    filter: brightness(0.9);
  }
 

`