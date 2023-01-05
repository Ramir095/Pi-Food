import styled from "styled-components";

export const Div = styled.div`
  background-color: rgb(227, 252, 239);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 18%) 0px 3px 8px;
  color: rgb(0, 102, 68);
  position: fixed;
  display: flex;
  margin-bottom: 8px;
  transition: transform 220ms cubic-bezier(0.2, 0, 0, 1) 0s,
    opacity 220ms ease 0s;
  width: 360px;
  transform: translate3d(0px, 0px, 0px);
  font-size: 18px;
  z-index: 1000;
  top: 80px;
  right: calc(50% - 175px);
  overflow: hidden auto;
  box-sizing: border-box;
  & div {
    background-color: rgb(54, 179, 126);
    width: 30px;
    padding: 8px;
    display: flex;
    justify-content: center;
    & img {
      margin-top: 2px;
      width: 20px;
      height: 20px;
    }
  }
  & p {
    padding: 8px;
  }
`;
