import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    height:100%
    margin:0;
    padding:0;
    text-decoration: none;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Rapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  margin: 0;
`;

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.p`
  color: black;
  text-decoration: none;
  text-align: center;
`;
export const Holder = styled.div`
width:100%;
height:100vh;
display flex ;
flex-flow : column wrap;
background-color: yellow
margin-top:40px;
  
& button {
    background-color: black;
    color: yellow;
    width: 80%;
    height: 40px;
    margin: 10px auto;

`;

export default GlobalStyle;
