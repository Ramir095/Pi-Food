import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  & a {
    background-color: #f4f0ee;
    border: 2px solid white;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    width: 350px;
    height: 100%;
    border-radius: 8px;
    text-decoration: none;
    overflow: hidden;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    div {
      padding: 1px 5px;
      flex-wrap: wrap;
      width: 100%;
      padding: 0;
      background-color: transparent;
      & p:first-child {
        color: black;
        padding: auto;
        text-align: center;
        background-color: transparent;
        /* font-family: bold; */
      }
    }
  }
`;

export const P = styled.p`
  color: black;
  font-weight: 900;
  text-align: center;
  padding: 1px 5px;
  width: 100%;
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  font-size: 1.1rem;
  background-color: rgb(255, 255, 255, 0.603);
  /* background-color: #5b5b64; */
  color: rgb(15, 15, 15);
  border-radius: 50%;
  position: absolute;
  top: 3px;
  right: 2px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    font-weight: bold;
    color: rgb(255, 254, 254);
    width: 37px;
    height: 37px;
  }
`;
