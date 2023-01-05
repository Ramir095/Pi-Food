import React from "react";
import { Div } from "./ToastNotification.styles";
import img from "../../assets/check-circle.png";

const ToastNotification = () => {
  return (
    <Div>
      <div>
        <img src={`${img}`} alt="" />
      </div>
      <p>The recipe was created correctly. You will be redirected to home</p>
    </Div>
  );
};

export default ToastNotification;
