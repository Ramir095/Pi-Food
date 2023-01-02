import React from "react";
import { Link } from "react-router-dom";
import { Div, P } from "./Card.styles.";

const Card = ({ id, name, image, diets, dietsDb }) => {
  // console.log("diets", diets);
  // console.log("dietsDb", dietsDb);
  const dietsDataB = dietsDb?.map((d) => d.name);
  // console.log("dietsDb.map", dietsDataB);
  if (dietsDb) diets = dietsDataB;

  return (
    <Div>
      <Link to={`/recipeDetail/${id}`}>
        <img src={image} alt="pending" />
        <P>{name}</P>
        <div>
          {
            <p>Diets: {diets ? diets.join(", ") : "No diets"}</p>
          }
        </div>
      </Link>
    </Div>
  );
};
export default Card;
