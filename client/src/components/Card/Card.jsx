import React from "react";
import { Link } from "react-router-dom";
import { Div, P, Button } from "./Card.styles.";

const Card = ({ id, name, image, diets, dietsDb, createdInDb, handleDelete}) => {
  const dietsDataB = dietsDb?.map((d) => d.name);
  
  if (dietsDb) diets = dietsDataB;

  return (
    <Div>
      {createdInDb ? <Button onClick={ handleDelete }>X</Button> : "" }
      <Link to={`/recipeDetail/${id}`}>
        <img src={image} alt="pending" />
        <P>{name}</P>
        <div>
          {
            diets?.length > 0 ? <p>Diets: {diets.join(", ")}</p> : <p>No diets</p>
          }
        </div>
      </Link>
    </Div>
  );
};
export default Card;
