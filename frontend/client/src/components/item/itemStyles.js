import styled from "styled-components";

export const List = styled.div`
  font-size: 1rem;
  text-align: left;
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #f4eabe;
  border-color: transparent;
  cursor: pointer;

  padding: 10px;

  &:hover {
    background-color: black;
    color: #f4eabe;
    border: 2px black solid;
    border-radius: 10px;
  }
`;
