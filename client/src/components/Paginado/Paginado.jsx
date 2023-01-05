import React from "react";
import { Div } from "./Paginado.styles";

const Paginado = ({ recipesPerPage, recipes, paged }) => {
  const pageNumbers = [];

  for (let i = 0; i < recipes / recipesPerPage; i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <Div>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button onClick={() => paged(number)} key={number}>
            {number}
          </button>
        ))}
    </Div>
  );
};

export default Paginado;
