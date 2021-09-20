import styled from "styled-components";

export const Holder = styled.div`
  width: 100%;
  height: 100vh;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  algin-items: center;

  & button {
    background-color: black;
    color: yellow;
    width: 80%;
    height: 40px;
    margin: 10px auto;
  }
`;
