import styled from "styled-components";

export const StyledCartProduct = styled.li`
    display: flex;
  margin-top: 10px;
  gap: 10px;
  width: 100%;
  position: relative;
  padding: 10px;

  figure {
    width: 80px;
    height: 80px;
    background: #e0e0e0;
    border-radius: 5px;
  }

  img {
    width: 100%;
  }

  .CartProductDesc {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    max-width: 40%;
  }

  .CartProductDesc h4 {
    font-size: 14px;
    font-weight: 700;
    color: #333333;
    width: 100%;
    min-width: 80%;
  }

  .CartProductDesc p {
    font-size: 12px;
    font-weight: 400;
    color: #828282;
  }

`