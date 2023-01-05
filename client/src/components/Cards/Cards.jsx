import React from "react";
import Card from "../Card/Card";
import { Div } from "./Cards.styles";

const Cards = ({ currentRecipes, handleDelete }) => {
  return (
    <Div>
      {
        currentRecipes.length > 0 ?
          currentRecipes.map((r) => (
            <Card
              key={r.id}
              id={r.id}
              name={r.name}
              image={r.image}
              diets={r.diets}
              dietsDb={r.Diets}
              createdInDb={r.createdInDb}
              handleDelete={() => handleDelete(r.id)}
            />
        )) : <h1> No recipes to show D: </h1>
      }
    </Div>
  );
};

export default Cards;


// <Div>
// {
//   currentRecipes &&
//     currentRecipes.map((r) => (
//       <Card
//         key={r.id}
//         id={r.id}
//         name={r.name}
//         image={r.image}
//         diets={r.diets}
//         dietsDb={r.Diets}
//         createdInDb={r.createdInDb}
//         handleDelete={() => handleDelete(r.id)}
//       />
//   ))
// }
// </Div>