import React from "react";
import "./App.css";

const Answercomponent = (props) => {
  return (
    <div className={props.count ? "div33none" : "div33"}>
      <img src="./img/thanks.svg" />
      <div className="answerdiv2">You selected {props.meore} out of 5</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating.if you ever need more
        support ,don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Answercomponent;
