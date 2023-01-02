import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  background-color: #5b5b64;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 41%;
  height: 40px;
  & select {
    background-color: rgba(255, 255, 255, 0.603);
    margin: 2px;
    border: 1px solid white;
    border-radius: 5px;
    border: transparent;
  }
  & div {
    & button {
      background: black;
      border: transparent;
      color: white;
      border-radius: 5px;
      font-weight: bolder;
      width: 59px;
      height: 40px;
      margin-right: 4px;

      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        font-size: 0.9rem;
        font-weight: bold;
        color: rgb(255, 254, 254);
        cursor: pointer;
      }
    }
  }
`;
