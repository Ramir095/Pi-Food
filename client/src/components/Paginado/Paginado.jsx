import React from "react";
import arrowLeft from '../../assets/arrow-fat-left.svg'
import arrowRight from '../../assets/arrow-fat-right.svg'
import { Div, ButtonsNumber, ButtonsArrow } from "./Paginado.styles";

const Paginado = ({ recipesPerPage, recipes, paged, handleBack, handleNext }) => {
  const pageNumbers = [];

  for (let i = 0; i < recipes / recipesPerPage; i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <Div>
      <ButtonsArrow onClick={handleBack} name='buttonLeft'>
        <img src={arrowLeft} alt='Flecha para volver atrás' />
      </ButtonsArrow>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <ButtonsNumber onClick={() => paged(number)} key={number}>
            {number}
          </ButtonsNumber>
        ))}
      <ButtonsArrow onClick={handleNext} name='buttonRight'>
        <img src={arrowRight} alt='Flecha para volver atrás' />
      </ButtonsArrow>
    </Div>
  );
};

export default Paginado;
