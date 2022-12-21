import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/actions/index";

const Nav = () => {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState("");

  const handleSearchByName = (e) => {
    //console.log(e.target.value);
    e.preventDefault();
    dispatch(getRecipe(recipe));
  };

  return (
    <div>
      <Link to="/home"> Home </Link>
      <Link to="/createRecipe"> Create recipe </Link>
      <form onSubmit={handleSearchByName}>
        <input
          type="text"
          placeholder="Search recipe..."
          onChange={(e) => setRecipe(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Nav;
