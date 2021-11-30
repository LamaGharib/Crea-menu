import styled, { createGlobalStyle } from "styled-components";
import crea from "./images/CREA.png";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
   
    margin:0;
    padding:0;
    text-decoration: none;
}

`;

export const Container = styled.div`
  background-size: contain;
  background-image: url(${crea});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`;

export const Button = styled.button`
  background-color: black;
  color: #f4eabe;
  padding: 5px;
  border-radius: 10px;
`;
export const Input = styled.input`
  background-color: #f4eabe;
  color: black;
  font-weight: bold;
  padding: 7px;
  margin: 5px;
  border-radius: 10px;
  width: ;
`;
export const Category = styled.div`
  background-color: #f4eabe;
  border: 1px solid black;
  margin: 10px;
  padding: 20px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  width: 25%;
  border-radius: 10px;
  box-shadow: 10px 5px 20px 1px black;

  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.1);
  }
  @media screen and (max-width: 960px) {
    width: 40%;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  } ;
`;
