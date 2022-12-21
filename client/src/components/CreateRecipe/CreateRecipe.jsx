import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, getDiets } from "../../redux/actions/index";

const CreateRecipe = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const diets = useSelector((state) => state.diets);

  const [step, setStep] = useState({});
  const [cantP, setCantP] = useState(1);
  const [input, setInput] = useState({
    name: "",
    summary: "",
    healthScore: 0,
    stepByStep: [],
    image: "",
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleStepByStep = (e, i) => {
    let stepByStepTwo = [];
    setStep({
      ...step,
      [i]: e.target.value,
    });
    for (let i = 0; i < cantP - 1; i++) {
      stepByStepTwo.push(step[i]);
    }
    setInput({
      ...input,
      stepByStep: stepByStepTwo,
    });
  };

  const addStep = () => {
    let steps = [];
    if (cantP <= 30) {
      setStep({
        ...step,
        [cantP]: "",
      });
      for (let i = 0; i < cantP; i++) {
        steps.push(step[i]);
      }
      setCantP(1 + cantP);
      setInput({
        ...input,
        stepByStep: steps,
      });
    }
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      diets: [...input.diets, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(createRecipe(input));
    alert("Receta creada");
    setInput({
      name: "",
      summary: "",
      healthScore: 0,
      stepByStep: [],
      image: "",
      diets: [],
    });
    // history.push('/home')
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={input.name}
            name="name"
            placeholder="Brown rice"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="image">Link of the image: </label>
          <input
            id="image"
            type="text"
            value={input.image}
            name="image"
            placeholder="Link"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <div>
          <label htmlFor="stepByStep">Step by step</label>
          <button onClick={() => addStep()}>Add step</button>
          {step &&
            input.stepByStep.map((i) => {
              return (
                <input
                  type="text"
                  value={step[i]}
                  name="stepByStep"
                  onChange={(e) => handleStepByStep(e, i)}
                  required
                />
              );
            })}
          {/* <input
            id='stepByStep'
            type="text"
            value={input.stepByStep}
            name='stepByStep'
            onChange={e => {handleStepByStep(e, i)}}
          /> */}
        </div>

        <div>
          <label htmlFor="healthScore">Health score: </label>
          <input
            id="healthScore"
            type="number"
            value={input.healthScore}
            name="healthScore"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="summary">Summary: </label>
          <textarea
            id="summary"
            value={input.summary}
            placeholder="describe the recipe"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <select onChange={(e) => handleSelect(e)}>
            {diets.map((d) => (
              <option value={d.name}>{d.name}</option>
            ))}
          </select>
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
