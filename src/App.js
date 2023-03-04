import "./App.css";
import "./reset.css";
import { useState } from "react";
import Answercomponent from "./Answercomponent";
import { useEffect } from "react";

function App() {
  const [state, setstate] = useState(true);
  const [count, setcount] = useState(true);
  const [box, setbox] = useState(0);

  const handle3 = (event) => {
    setbox(event.target.textContent);
  };
  const handle2 = () => {
    setcount(!count);
  };
  const handle = (event) => {
    const divvs = Array.from(document.querySelector(".div4").children);
    divvs.map((divebi) => (divebi.style.backgroundColor = "#262e38"));

    if (state == true) {
      document.getElementById(event.target.textContent).style.backgroundColor =
        "#fc7614";
    } else {
      document.getElementById(event.target.textContent).style.backgroundColor =
        "#fc7614";
    }

    setbox(event.target.textContent);
    setstate(!state);
    console.log(event.target.textContent);
  };

  return (
    <div className="div1">
      <div className="div2">
        <Answercomponent count={count} meore={box} />
        <div className={count ? "div3" : "div3none"}>
          <img src="./img/star.svg" />
          <h1 className="hii">How did we do?</h1>
          <p>
            please let us know how we did with your support request.All feedback
            is appreciated to help us improve our offering!
          </p>
          <div className="div4">
            <div id="1" onClick={(event) => handle(event)}>
              1
            </div>
            <div id="2" onClick={(event) => handle(event)}>
              2
            </div>
            <div id="3" onClick={(event) => handle(event)}>
              3
            </div>
            <div id="4" onClick={(event) => handle(event)}>
              4
            </div>
            <div id="5" onClick={(event) => handle(event)}>
              5
            </div>
          </div>
          <div className="div5">
            <button onClick={handle2} className="submitbutton">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
