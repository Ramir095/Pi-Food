import styled from "styled-components";

export const Div = styled.div`

  width: 100%;
  min-height: 100vh;
  max-height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: fit-content;
  min-width: 80%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;
  margin: 15px auto;
  border: 1.5px solid black;
  border-radius: 5px;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
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
`;

export const Middle = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  height: fit-content;
`;

export const Detail = styled.div`

  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-left: 20px;
  text-align: left;
  & h3 {
    padding-left: 20px;
    align-self: flex-start;
    margin: 0 0 5px 0;
  }
  & ul {
    /* background-color: red; */
    padding-top: 30px;
    & li {
      /* background-color: red; */
      display: flex;
      flex-direction: column;   
    }
  }
`;

export const Image = styled.div`
    & img {
        border-radius: 6px;
        width: 556px;
        height: 420px;
    }
`;

export const Details = styled.div`
    width: 100%;
    /* & p {
      background-color: yellow;
    } */
`; 
