import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipeDetail } from '../../redux/actions/index';
import Nav from '../Nav/Nav';

const RecipeDetail = ({ match }) => {

  const dispatch = useDispatch();
  const recipe = useSelector(state => state.recipesDetail);
  //console.log("detalles", recipe.diets);
  //let isLoading = useSelector((state) => state.loaded);

  useEffect(() => {
    dispatch(getRecipeDetail(match.params.id))
  }, [dispatch, match.params.id])
  
  // if (!isLoading) {
  //   return <Loading />;
  // }

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <h1>{recipe.name}</h1>
      <div>
        <img src={`${recipe.image}`} alt={`illustration of the recipe ${recipe.name}`} />
        <p>Diets: </p>
        {
          recipe.diets?.length > 0 ? (
            recipe.diets?.map(d => (
              <ul key={d}>
                <li>{d}</li>
              </ul>
            ))
          ) : (
            <h1>{"This recipe does not belong to a diet"}</h1>
          )
        }
      </div>  
        <h1>{recipe.healthScore}</h1>
        <p>{recipe.summary}</p>
        <p>{recipe.stepByStep}</p>
      </div>
    </div>
  )
};

export default RecipeDetail;
