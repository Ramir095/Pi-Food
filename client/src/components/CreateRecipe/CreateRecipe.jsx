import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, getDiets } from "../../redux/actions/index";
import {
  Div,
  Box,
  Header,
  Button,
  Form,
  InputBox,
  InputShort,
  Middle,
  Step,
  P,
} from "./CreateRecipe.styles";

import ToastNotification from "../ToastNotification/ToastNotification";

const CreateRecipe = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const diets = useSelector((state) => state.diets); // allDiets
  // let isLoading = useSelector((state) => state.loaded);

  const [step, setStep] = useState({}); // indexPaso
  const [cantP, setCantP] = useState(1);
  // const [summary, setSummary] = useState('')
  const [input, setInput] = useState({
    name: "",
    summary: "",
    healthScore: 0,
    stepByStep: [],
    image: "",
    diets: [],
  });
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(true);
  const [toast, setToast] = useState(false);

  const validate = (input) => {
    let errors = {};
    if (
      input.name.length > 4 &&
      (input.name.length < 3 || input.name.search(/[^{}*;@>!<]*$/g) !== 0)
    )
      errors.name =
        "Name is required, must be at least 4 characters long and must not contain special characters";
    else if (!input.summary) errors.summary = "Summary is required";
    else if (
      input.healthScore < 0 ||
      input.healthScore > 100 ||
      isNaN(Number(input.healthScore))
    )
      errors.healthScore = "Must be between 1 and 100";
    else if (!input.image) errors.image = "Enter a link";
    !errors.name && !errors.summary && !errors.healthScore
      ? setSubmit(false)
      : setSubmit(true);
    return errors;
  };

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  // if (!isLoading) {
  //   return <Loading />;
  // }

  const handleChange = (e) => {
    // console.log("name: ", e.target.name);
    // console.log("Shea", e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleStepByStep = (e, i) => {
    let stepByStepTwo = [];
    // console.log(stepByStepTwo);
    // console.log("es la i", i);
    setStep({
      // setIndexPaso
      ...step, // indexPaso
      [i]: e.target.value,
    });
    for (let i = 0; i < cantP - 1; i++) {
      stepByStepTwo.push(step[i]); // indexPaso[i]
    }
    setInput({
      ...input,
      stepByStep: stepByStepTwo,
    });
  };

  const addStep = () => {
    let steps = [];
    // console.log(step);
    if (cantP <= 13) {
      setStep({
        // setIndexPaso
        ...step, // indexPaso
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
    // console.log("aca esta el error", input.diets);
    setInput({
      ...input,
      diets: [...input.diets, e.target.value],
    });
  };

  const handleDelete = (el) => {
    // console.log("Dentro de handleDelete >>", el);
    const dieta = input.diets.filter((d) => d !== el);
    console.log({ dieta });
    setInput({
      ...input,
      diets: dieta,
    });
  };

  const handleToast = () => {
    setToast(true)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("En busca de diets", input);
    dispatch(createRecipe(input));
    handleToast()
    // alert("Receta creada");
    setInput({
      name: "",
      summary: "",
      healthScore: 0,
      stepByStep: [],
      image: "",
      diets: [],
    });
    setTimeout(() => {
      history.push("/home");
    }, 2000)
  };

  return (
    <Div>
      <Box>
        <Header>
          { toast === true ? <ToastNotification /> : "" }
          <h1>Create your recipe</h1>
          <Link to="./home">
            <button>Back</button>
          </Link>
        </Header>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <InputShort>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              value={input.name}
              name="name"
              id="name"
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <P>{errors.name}</P>}
          </InputShort>
          <InputShort>
            <label htmlFor="image">Link of the image: </label>
            <input
              id="image"
              type="text"
              value={input.image}
              name="image"
              onChange={(e) => handleChange(e)}
            />{" "}
            {errors.image && <P>{errors.image}</P>}
          </InputShort>

          <InputShort>
            <label htmlFor="healthScore">Health score: </label>
            <input
              id="healthScore"
              type="number"
              value={input.healthScore}
              name="healthScore"
              onChange={(e) => {
                handleChange(e);
              }}
            />{" "}
            {errors.healthScore && <P>{errors.healthScore}</P>}
          </InputShort>
          <InputBox>
            <label htmlFor="summary">Summary: </label>
            <textarea
              id="summary"
              value={input.summary}
              placeholder="describe the recipe"
              onChange={(e) => {
                handleChange(e);
              }}
              name="summary"
            />{" "}
            {errors.summary && <P>{errors.summary}</P>}
          </InputBox>
          <Step>
            <label htmlFor="stepByStep">Step by step</label>
            <Button onClick={() => addStep()}>Add step</Button>
            {step &&
              input.stepByStep.map((_d, i) => {
                // console.log("i dos", i);
                return (
                  <input
                    key={"stepByStep" + i}
                    type="text"
                    value={step[i]}
                    name="stepByStep"
                    onChange={(e) => handleStepByStep(e, i)}
                    required
                  />
                );
              })}
          </Step>
          <Middle>
            <p>Diets: </p>
            <select onChange={(e) => handleSelect(e)}>
              {diets.map((d, i) => (
                <option key={"diets" + i} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
            <section>
              {input.diets.map((el, i) => (
                <div key={"InputBox" + i}>
                  <p>{el}</p>
                  <button type="button" onClick={() => handleDelete(el)}>
                    X
                  </button>
                </div>
              ))}
            </section>
          </Middle>
          <Button type="submit" disabled={submit}>
            Create Recipe
          </Button>
        </Form>
      </Box>
    </Div>
  );
};

export default CreateRecipe;
