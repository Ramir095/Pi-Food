import React from "react";
import { Div } from "./Paginado.styles";

const Paginado = ({ recipesPerPage, recipes, paged }) => {
  const pageNumbers = []; // 1, 2, 3, 4
  console.log("recipesPerPage", recipesPerPage); /// 9 
  console.log("recipes", recipes); /// 103
  console.log("paged", paged); // funcion para cambiar la pagina

              //  1 <= 4 , 1
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
