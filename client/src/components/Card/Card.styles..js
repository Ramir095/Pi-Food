import styled from "styled-components";

export const Div = styled.div`
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
