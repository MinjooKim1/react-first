import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "COMPUTER" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h1 className="head">{props.title}</h1>
      <h3 className="subHead">{props.item && props.item.name}</h3>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
