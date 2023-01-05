import React from "react";
import Card from "../Card/Card";
import { Div } from "./Cards.styles";

const Cards = ({ currentRecipes, handleDelete }) => {
  return (
    <Div>
      {
        currentRecipes &&
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
        ))
      }
    </Div>
  );
};

export default Cards;
