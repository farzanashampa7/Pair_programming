import { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import { ReactComponent as PaperIcon } from "../images/icon-paper.svg";
import { ReactComponent as RockIcon } from "../images/icon-rock.svg";
import { ReactComponent as ScissorsIcon } from "../images/icon-scissors.svg";

class HomePage extends Component {
  render() {
    const { lives, score, clickHandler } = this.props;
    return (
      <div className="home">
        <h1>ROCK, PAPER, SCISSORS!</h1>
        <div className="home__container">
          <Link
            className="rock button"
            to="/play"
            onClick={() => clickHandler(0)}
          >
            <PaperIcon />
          </Link>
          <Link
            className="paper button"
            to="/play"
            onClick={() => clickHandler(1)}
          >
            <RockIcon />
          </Link>
          <Link
            className="scissors button"
            to="/play"
            onClick={() => clickHandler(2)}
          >
            <ScissorsIcon />
          </Link>
        </div>
        <p className="home__lives">Lives: {lives}</p>
        <p className="home__score">Score: {score}</p>
        <Link className="home__score-link link" to="/score">
          {" "}
          View Scores{" "}
        </Link>
      </div>
    );
  }
}

export default HomePage;
