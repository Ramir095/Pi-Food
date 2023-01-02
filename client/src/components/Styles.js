import styled from "styled-components";
import img from "../assets/background.jpg";

export const Div = styled.div`
  background: url(${img});
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  margin-left: -50%;
  margin-bottom: -10%;
  font-size: 1.5rem;
  & h1,
  h2 {
    font-weight: 100;
    & b {
        color: #df050d;
        /* color: #FF7F50; */
        font-weight: 100;
    }
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  position: relative;
  margin-top: 50px;
  width: auto;
  height: 100px;
  & a {
    background-color: black;
    /* border: 1px solid white; */
    border-radius: 5px;
    padding: 10px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 1px;
    transition: all 0.3s;
    &:hover {
      font-size: 1.5rem;
      /* text-decoration: underline; */
    }
  }
`;
