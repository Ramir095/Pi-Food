import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRecipes, filterByDiets, orderByAlphabetically, orderByHealthScore, filterCreated, deleteRecipe } from '../../redux/actions/index';
import Cards from '../Cards/Cards';
import Filters from '../Filters/Filters';
import Paginado from '../Paginado/Paginado';
import Nav from '../Nav/Nav';
import Loading from '../Loading/Loading';
 
const Home = () => {

  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);
  let isLoading = useSelector(state => state.loaded)
 
  const [ orden, setOrden ] = useState('');
  const [ score, setScore ] = useState('');

  // Estado con la pagina actual 
  const [ currentPage, setCurrentPage ] = useState(1);
  // Estado que va a setear los personajes por pagina
  const [ recipesPerPage, setRecipesPerPage ] = useState(9);
  // indice del ultimo personaje
  const indexOfLastRecipe = currentPage * recipesPerPage;
  // indice del primer personaje
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  // cantidad de personajes que estan en la pagina actual. Usamos el slice para tomar una porcion que pasamos por parametros (indice del primer personaje, indice del ultimo)
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  // funcion de paginado
  const paged = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllRecipes());
    setCurrentPage(1);
  };

  const handleFilterDiets = (e) => {
    dispatch(filterByDiets(e.target.value));
    setCurrentPage(1);
  };

  const handleOrderAlphabetically = (e) => {
    e.preventDefault();
    e.target.value === "All" 
      ? dispatch(getAllRecipes()) 
      : dispatch(orderByAlphabetically(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenando ${e.target.value}`)
  };

  const handleOrderByHealthScore = (e) => {
    e.preventDefault();
    e.target.value === "All" 
      ? dispatch(getAllRecipes()) 
      : dispatch(orderByHealthScore(e.target.value))
    setCurrentPage(1);
    setScore(`Ordenando ${e.target.value}`)
  };

  const handleFilterCreated = (e) => {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    console.log("Acá esta el id:", id);
    dispatch(deleteRecipe(id))
  };

  if(!isLoading) {
    return <Loading />
  }

  return (
    <div>
      <div>
        <Nav setCurrentPage = {setCurrentPage} />
        <Filters handleClick={handleClick} handleFilterDiets={handleFilterDiets} handleOrderAlphabetically={handleOrderAlphabetically} handleFilterCreated={handleFilterCreated} handleOrderByHealthScore={handleOrderByHealthScore} />
      </div>
      <div>
        <Cards currentRecipes={currentRecipes} handleDelete={handleDelete}/>
      </div>
      <div>
        <Paginado recipesPerPage={recipesPerPage} recipes={recipes.length} paged={paged}/>
      </div>
    </div>
  )
}

export default Home;