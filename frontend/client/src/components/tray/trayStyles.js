import styled from "styled-components";
export const Contain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartItem = styled.div`
  background-color: #f4eabe;
  width: 80%;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 2px black solid;
  border-radius: 10px;
  box-shadow: 10px 5px 20px 1px black;
  &:hover {
    background-color: black;
    color: #f4eabe;
    border: 2px black solid;
    border-radius: 10px;
  }
`;

export const ItemHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  font-weight: bold;
  @media only screen and (max-width: 1024px) {
    flex: 1;
    margin-right: 10px;
  } ;
`;

export const Total = styled.div`
  display: flex;
  background-color: #f4eabe;
  font-weight: bold;
  padding: 5px;
  border-radius: 10px;
  border: black solid 2px;
  mar
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 20%;
`;
export const Remove = styled.button`
  background-color: red;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  height: 30px;
`;
