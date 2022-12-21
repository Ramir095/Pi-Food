import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({id, name, image, diets}) => {
  return (
    <div>
      <Link to={`/recipeDetail/${id}`}>
        <img src={image} alt="pending" />
        <p>{name}</p>
        <p>{diets}</p>
      </Link>
    </div>
  )
}

export default Card