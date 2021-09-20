import styled from "styled-components";
import { Link } from "react-router-dom";

export const FoodDrinksHolder = styled(Link)`
  
  width: 300px;
  margin: 20px;
  text-decoration: none
  translate: all 0.5 ease-in-out;

  &:hover {
    transform: scale(1.5, 1.5);
  }
`;
export const Images = styled.img`
  width: 100%;
`;
