import styled from "styled-components";

export const StyledCartTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 0px 0px 5px 5px;
  border-top: 2px solid #e0e0e0;
  margin-top: 15px;
  padding: 20px;

  .TotalContainer {
    display: flex;
    padding: 10px;
    margin-top: 10px;
    justify-content: space-between;
  }

  .TotalContainer p {
    font-size: 14px;
    color: #828282;
    font-weight: 600;
  }

  .RemoveAllCartItemsBtn {
    cursor: pointer;
    transition: ease 0.3s;
    font-size: 1.6rem;
    font-weight: 700;
    width: 100%;
    height: 60px;
    border-radius: 0.8rem;
    border: none;
    color: var(--color-gray-2);
    background-color: var(--color-gray-1);
  }

  .TotalContainer h5 {
    font-size: 14px;
    color: #333333;
    font-weight: 600;
  }
`;