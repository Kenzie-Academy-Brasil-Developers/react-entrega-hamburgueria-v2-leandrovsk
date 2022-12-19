import styled from "styled-components";

export const StyledInputSearch = styled.input`
  height: 60px;
  background: #ffffff;
  color: #828282;
  border-radius: 8px;
  min-width: 365px;
  padding: 0px 10px;
  border: 2px solid #e0e0e0;
  outline-color: #333333;

  ::placeholder {
    color: #e0e0e0;
  }

  @media (width < 730px) {
    min-width: 90%;
  }
`;