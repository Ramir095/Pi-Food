import React from "react";
import Card from "../Card/Card";

const Cards = ({ currentRecipes }) => {
  //console.log(recipes);
  return (
    <div>
      {
        currentRecipes &&
          currentRecipes.map((r) => (
            <Card
              key={r.id}
              id={r.id}
              name={r.name}
              image={r.image}
              diets={r.diets}
            />
        ))
      }
    </div>
  );
};

export default Cards;
