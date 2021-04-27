import { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PaperIcon } from "../images/icon-paper.svg";
import { ReactComponent as RockIcon } from "../images/icon-rock.svg";
import { ReactComponent as ScissorsIcon } from "../images/icon-scissors.svg";
import "./PlayPage.scss";

class PlayPage extends Component {
  getRandom = () => {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * Math.floor(3))];
  };

  getIcon = (icon) => {
    if (icon === "rock") return <RockIcon />;
    if (icon === "paper") return <PaperIcon />;
    if (icon === "scissors") return <ScissorsIcon />;
  };

  compareResults = (choice, random) => {
    console.log("compareChoice", choice);
    console.log("compareRandom", random);
    if (choice === "rock" && random === "paper") {
      console.log("You lose");
      return "You lose";
    } else if (choice === "rock" && random === "scissors") {
      console.log("You win");
      return "You win";
    } else if (choice === "paper" && random === "scissors") {
      console.log("You lose");
      return "You lose";
    } else if (choice === "paper" && random === "rock") {
      console.log("You win");
      return "You win";
    } else if (choice === "scissors" && random === "paper") {
      console.log("You win");
      return "You win";
    } else if (choice === "scissors" && random === "rock") {
      console.log("You lose");
      return "You lose";
    } else {
      console.log("Game draw");
      return "Draw";
    }
  };

  render() {
    const { lives, choice, playHandler } = this.props;
    const computerChoice = this.getRandom();
    const result = this.compareResults(choice, computerChoice);
    return (
      <main className="playPage">
        <div className="playPage__choiceList">
          <div className="playPage__choice">
            <h3>Player</h3>
            {this.getIcon(choice)}
          </div>

          <div className="playPage__choice">
            <h3>Computer</h3>
            {this.getIcon(computerChoice)}
          </div>
        </div>
        <p className="playPage__result">{result}</p>
        {lives === 1 && result === "You lose" ? (
          <Link className="link" to="/scoreinput">
            Back
          </Link>
        ) : (
          <Link className="link" to="/" onClick={() => playHandler(result)}>
            Back
          </Link>
        )}
      </main>
    );
  }
}

export default PlayPage;
