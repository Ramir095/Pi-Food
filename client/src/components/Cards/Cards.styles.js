import styled from "styled-components";

export const Div = styled.div`
  background-color: #f4f0ee;
  max-width: 1200px;
  margin: 15px auto;
  display: grid;
  gap: 30px 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
`;
