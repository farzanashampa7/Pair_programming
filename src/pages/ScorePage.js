import { Component } from "react";
import axios from "axios";
import ScoreList from "../components/Score/ScoreList";
import { Link } from "react-router-dom";
import "./ScorePage.scss";

const URL = "http://localhost:8080";

class ScorePage extends Component {
  state = {
    scores: null,
  };

  componentDidMount() {
    axios.get(`${URL}/score`).then(({ data }) => {
      this.setState(
        {
          scores: data,
        },
        () => console.log(this.state.scores)
      );
    });
  }

  render() {
    if (!this.state.scores) {
      return <p>loading ...</p>;
    }
    return (
      <main className="scores">
        <div className="scores__container">
          <h1 className="scores__title">HIGH SCORES</h1>
          <div className="scores__box">
            <p className="scores_player">PLAYER</p>
            <p className="scores_score">SCORE</p>
          </div>
          <ScoreList scores={this.state.scores} />
          <Link className="link" to="/">
            Play Again
          </Link>
        </div>
      </main>
    );
  }
}

export default ScorePage;
