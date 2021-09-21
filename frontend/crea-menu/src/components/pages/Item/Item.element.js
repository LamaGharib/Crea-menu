import styled from "styled-components";

export const Holder = styled.div`
  width: 100%;
  height: 100%;
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

export const ExtraHolder = styled.div`
  width: 80%;
  display: flex;
  margin: 10px auto;
  justify-content: space-around;

  & button {
    width: 100%;
  }
`;
export const Img = styled.img`
  width: 500px;
  margin: 20px auto;
`;
