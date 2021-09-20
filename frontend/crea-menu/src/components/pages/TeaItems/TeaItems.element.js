import styled from "styled-components";
import { Link } from "react-router-dom";

export const TeaList = styled.ul`
  width: 100%;
  height: 100vh;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;
export const Item = styled(Link)`
  width: 300px;
  margin: 20px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Tea = styled.div`
width :100%;
height:100vh
background-color: blue

`;
