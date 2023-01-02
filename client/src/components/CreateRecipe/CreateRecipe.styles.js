import styled from "styled-components";

export const Div = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-position: center;
  background-size: cover;
  align-items: center;
  justify-content: space-around;
  background-repeat: no-repeat;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(252, 252, 252, 0.801);
  padding: 30px 30px;
  width: 70%;
  height: 80%;
  border-radius: 6px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  & a {
    & button {
      padding: 10px;
      border: transparent;
      background: black;
      color: white;
      border-radius: 5px;
      font-weight: bolder;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        font-size: 1rem;
      }
    }
  }
`;

export const Form = styled.form`
  /* background-color: yellow; */
  /* position: absolute; */
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 75%;
  gap: 2px;
  padding-left: 20px;
  align-items: flex-start;
  text-align: left;
  & div {
    width: calc(100% / 2 - 20px);
  }
  & Button {
    margin-top: 15px;
    :disabled {
      background-color: #4d474d;
      color:  #4d474d;
    }
  }
`;

export const InputBox = styled.div`
  /* background-color: red; */
  height: 150px;
  width: 100%;
  /* outline: none; */
  border-radius: 5px;
  border: 1px solid black;
  padding-left: 15px;
  border-bottom-width: 2px;
  transition: all 0.3s ease-in-out;
  &:focus {
    border-color: rgb(41, 41, 40);
  }
  & label {
    display: block;
  }
  & textarea {
    width: 97%;
    height: 78%;
  }
`;

export const Step = styled.div`
  /* background-color: red; */
  margin-top: -10%;
  height: 220px;
  width: 100%;
  /* outline: none; */
  border-radius: 5px;
  border: 1px solid black;
  padding-left: 15px;
  border-bottom-width: 2px;
  transition: all 0.3s ease-in-out;
  &:focus {
    border-color: rgb(41, 41, 40);
  }
  & label {
    display: block;
  }
  & textarea {
    width: 97%;
    height: 70%;
  }
  & input {
    width: 97%;
  }
`;

export const Middle = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  & section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    gap: 7px;
    padding-left: 10px;
  }
  & div {
    /* background-color: gray; */
    display: flex;
    align-items: center;
    width: fit-content;

    & p {
      border: 1px solid #4d474d;
      background-color: #f4f0ee;
      color: #4d474d;
      padding: 2px 5px;
    }
    & button {
      margin-bottom: 15px;
      padding: 4px 2px;
      background-color: #4d474d;
      color: #f4f0ee;
      justify-content: center;
      cursor: pointer;
      :hover {
        font-weight: bold;
      }
    }
  }
`;

export const InputShort = styled.div`
  /* background-color: red; */
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid black;
  padding-left: 15px;

  & input {
    margin-left: 5px;
    width: 70%;
  }

`;

export const Button = styled.button`
  padding: 2px;
  border-color: 1px solid black;
  background-color: #4d474d;
  color: #f4f0ee;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    font-weight: bold;
    /* color: #f4f0ee; */
    cursor: pointer;
  }
`;

export const P = styled.p`
  color: red;
  padding: 10px;
  font-size: 0.8rem;
`;
