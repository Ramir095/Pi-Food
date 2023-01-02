import React from "react";
import Card from "../Card/Card";
import { Div } from "./Cards.styles";

const Cards = ({ currentRecipes }) => {
  //console.log("Cards", currentRecipes);
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
            />
        ))
      }
    </Div>
  );
};

export default Cards;
