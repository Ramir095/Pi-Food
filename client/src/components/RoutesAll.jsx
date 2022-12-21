import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../components/Home/Home';
import CreateRecipe from '../components/CreateRecipe/CreateRecipe'
import RecipeDetail from './RecipeDetails/RecipeDetail'

const RoutesAll = () => {
  return (
    <>
     <Switch>
        <Route path='/home' component={Home} />
        <Route path='/createRecipe' component={CreateRecipe} />
        <Route path='/recipeDetail/:id' render={ ({match}) =>  <RecipeDetail match={match} />}/>
     </Switch>
    </>
  ) 
}

export default RoutesAll;