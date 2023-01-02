import React from "react";
import { Link } from "react-router-dom";
import { Div, Wrapper, Button } from "../Styles";

const LandingPage = () => {
  return (
    <Div>
      <Wrapper>
        <h1>Welcome</h1>
        <h2>
          Join us to learn about
          <b> the best recipes</b>
        </h2>
        <Button><Link to="/home">Start</Link></Button>
      </Wrapper>
    </Div>
  );
};

export default LandingPage;
