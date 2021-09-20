import styled from "styled-components";
import { Link } from "react-router-dom";

export const Holder = styled.div`
  width: 100%;
  height: 100vh;
  background-color: pink;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

export const DrinkType = styled(Link)`
  background-color: pink;
  width: 300px;
  margin: 20px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
