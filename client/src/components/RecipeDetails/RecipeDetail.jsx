import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeDetail } from "../../redux/actions/index";
import { Div, Box, Header, Middle, Detail, Image } from "./RecipeDetails.styles";
import Loading from "../Loading/Loading";

const RecipeDetail = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const recipe = useSelector((state) => state.recipesDetail);
  let isLoading = useSelector((state) => state.loaded);
  // console.log("Step", recipe.stepByStep);

  useEffect(() => {
    dispatch(getRecipeDetail(match.params.id));
  }, [dispatch, match.params.id]);

  if (!isLoading) {
    return <Loading />;
  }

  const handleBack = () => {
    history.push("/home");
  };

  return (
    <Div>
      <Box>
        <Header>
          <button onClick={handleBack}>Back</button>
          <h1>{recipe.name}</h1>
        </Header>
        <h3>HealthScore: {recipe.healthScore}</h3>
        <Middle>
          <Image>
            <img
              src={`${recipe.image}`}
              alt={`illustration of the recipe ${recipe.name}`}
            />
          </Image>
          <Detail>
            <h3>Diets: </h3>
            {recipe.Diets ? (
              recipe.Diets.map((d, i) => (
                <ul key={"name" + i}>
                  <li>{d.name}</li>
                </ul>
              ))
            ) : recipe.diets?.length > 0 ? (
              recipe.diets?.map((d) => (
                <ul key={d}>
                  <li>{d}</li>
                </ul>
              ))
            ) : (
              <h1>{"This recipe does not belong to a diet"}</h1>
            )}
          </Detail>
        </Middle>
        <div>
          <h3>Summary: </h3> <br/>
          <div dangerouslySetInnerHTML={{ __html: recipe.summary }} /> <br/>
          <h3>Step by step: </h3> <br/>
          <p>{recipe.stepByStep?.join(". ")}</p>
        </div>
      </Box>
    </Div>
  );
};

export default RecipeDetail;
