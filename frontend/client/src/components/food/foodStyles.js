import styled from "styled-components";
export const Contain = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  border-radius: 10px;
  @media only screen and (max-width: 690px) {
    height: 100%;
  }
`;
