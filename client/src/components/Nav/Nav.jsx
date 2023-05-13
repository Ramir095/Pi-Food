import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/actions/index";
import { Div, Header, Img } from "./Nav.styles";
import logo from '../../assets/recipes.png'

const Nav = ({setCurrentPage}) => {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState("");

  const handleSearchByName = (e) => {
    //console.log(e.target.value);
    e.preventDefault();
    dispatch(getRecipe(recipe));
    setCurrentPage(1)
  };

  return (
    <Div>
      <Link to="/home"> <Img src={logo} alt='Imagen de un plato con cubiertos' /> </Link>
      <Header>
        <form onSubmit={handleSearchByName}>
          <input
            type="text"
            placeholder="Search recipe..."
            onChange={(e) => setRecipe(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </Header>
      <Link to="/createRecipe"> Create recipe </Link>
    </Div>
  );
};

export default Nav;
