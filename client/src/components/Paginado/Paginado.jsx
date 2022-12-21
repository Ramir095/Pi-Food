import React from "react";

const Paginado = ({ recipesPerPage, recipes, paged }) => {
  const pageNumbers = [];

  for (let i = 0; i <= recipes / recipesPerPage; i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button onClick={() => paged(number)} key={number}>
            {number}
          </button>
        ))}
    </div>
  );
};

export default Paginado;
