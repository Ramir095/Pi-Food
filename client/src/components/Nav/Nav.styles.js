import styled from "styled-components";

export const Div = styled.div`
  background-color: #5b5b64;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  max-height: 6rem;
  padding: 0.5rem;
  width: 100%;
  height: 7vh;
  /* outline: none; */
  a:last-child {
    width: 125px;
    padding-left: 15px;
  }
  & a {
    text-decoration: none;
    background: black;
    padding: 10px;
    border: transparent;
    color: white;
    border-radius: 5px;
    font-weight: bolder;
    width: 67px;
    
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      font-size: 1.055rem;
      font-weight: bold;
      color: rgb(255, 254, 254);
      cursor: pointer;
    }
  }
`;

export const Header = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(5px);
  align-items: center;
  width: 70%;
  gap: 1px;
  position: sticky;
  top: 0;
  z-index: 1;

  & form {
    width: 70%;
    max-width: 500px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.603);
    margin-left: 45px;
    & input {
      border: transparent;
      padding: 8px;
      background: transparent;
      width: 88%;
    }
    & button {
      padding: 5px;
      border-color: transparent;
      background-color: transparent;
      color: rgb(15, 15, 15);
      transition: all 0.3s ease-in-out;
      &:hover {
        font-weight: bold;
        color: rgb(255, 254, 254);
        cursor: pointer;
      }
    }
  }
`;
