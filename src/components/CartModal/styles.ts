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

  .ModalContainer {
    width: 500px;
    max-width: 95%;
    height: 400px;
    background-color: var(--color-gray-0);
    border-radius: 0.4rem;
    overflow: auto;
    margin-top: 100px;
  }

  &.Enabled {
    display: flex;
  }

  &.Disabled {
    display: none;
  }
`;