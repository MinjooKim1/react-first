import React, { Component } from "react";
import BoxClass from "./Component/BoxClass";
import "./App.css";
import paper from "./img/paper.png";
import scissors from "./img/scissors.png";
import rock from "./img/rock.png";

const choice = {
  rock: {
    name: "Rock",
    img: "data:image/jpeg;base64,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",
  },
  scissors: {
    name: "Scissors",
    img: "https://thumbs.dreamstime.com/b/vector-cartoon-cute-scissors-school-kawaii-illustration-274221532.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://i.ebayimg.com/images/g/G5kAAOSwmoRexd9C/s-l400.jpg",
  },
};
export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }
  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  };
  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="YOU"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="COMPUTER"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>

        <div className="main">
          <button onClick={() => this.play("scissors")}>
            <img src={scissors} alt="scissors" width="50px" />
          </button>
          <button onClick={() => this.play("rock")}>
            <img src={rock} alt="rock" width="50px" />
          </button>
          <button onClick={() => this.play("paper")}>
            <img src={paper} alt="paper" width="50px" />
          </button>
        </div>
      </div>
    );
  }
}
