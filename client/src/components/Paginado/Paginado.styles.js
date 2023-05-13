import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonsArrow = styled.button`
    display: flex;
    justify-content: center;
    padding: 2px 6px;
    margin: 16px 10px;
    border-radius: 6px;
    background-color: #5b5b64;
    color: white;
    cursor: pointer;
    & img {
        width: 1.3rem;
    }
`
export const ButtonsNumber = styled.button`
    padding: 2px 6px;
    margin: 16px 1px;
    border-radius: 6px;
    background-color: #5b5b64;
    color: white;
    cursor: pointer;
`