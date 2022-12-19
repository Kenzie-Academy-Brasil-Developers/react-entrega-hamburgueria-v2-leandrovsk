import styled from "styled-components";

export const StyledCartModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(18, 18, 20, 0.6);
  display: flex;
  justify-content: center;

  .CartHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 65px;
    background: #27ae60;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
  }

  .CloseModalBtn{
    background-color: transparent;
    border: none;
    color: var(--color-gray-1);
    cursor: pointer;
    font-size: 2rem;
    
  }

  .ModalContainer {
    width: 500px;
    max-width: 95%;
    height: fit-content;
    background-color: var(--color-gray-0);
    border-radius: 0.4rem;
    overflow: hidden;
    margin-top: 100px;
  }

  &.Enabled {
    display: flex;
  }

  &.Disabled {
    display: none;
  }
`;