import React from "react";

const Filters = ({handleClick, handleFilterDiets, handleOrderAlphabetically, handleOrderByHealthScore, handleFilterCreated}) => {
  return (
    <div>
      <div>
        <button onClick={e => handleClick(e)}>Reload</button>
      </div>
      <select onChange={e => handleFilterDiets(e)}>
        <option value="All">Filter by diet</option>
        <option value="gluten free">Gluten free</option>
        <option value="ketogenic">Ketogenic</option>
        <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="pescatarian">Pescatarian</option>
        <option value="paleolithic">Paleolithic</option>
        <option value="primal">Primal</option>
        <option value="whole 30">Whole 30</option>
        <option value="dairy free">Dairy free</option>
        <option value="fodmap friendly">Fodmap friendly</option>
        <option value="vegetarian">Vegetarian</option>
      </select>
      <select onChange={e => handleOrderAlphabetically(e)}>
        <option value="All">Order by alphabetically</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <select onChange={e => handleOrderByHealthScore(e)} >
        <option value="All">Order by health score</option>
        <option value="Asc">Ascendent</option>
        <option value="Desc">Descendent</option>
      </select>
      <select onChange={e => handleFilterCreated(e)}>
        <option value="All">Filter by origin</option>
        <option value="created">Created</option>
        <option value="api">Apit</option>
      </select>
    </div>
  );
};

export default Filters;
