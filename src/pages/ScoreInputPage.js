import { Component } from "react";
import axios from "axios";
import "./ScorePage.scss";

const URL = "http://localhost:8080";

class ScoreInputPage extends Component {
  submitHandler = (e, score) => {
    e.preventDefault();
    console.log(score);
    axios
      .post(`${URL}/score`, {
        name: e.target.name.value,
        score: score,
      })
      .then((res) => {
        console.log(res);
        this.props.history.push("/score");
      });
  };

  render() {
    const { score } = this.props;
    return (
      <main className="scoreinput">
        {console.log(score)}
        <form className="form" onSubmit={(e) => this.submitHandler(e, score)}>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="form__input"
            placeholder="Enter Your Name"
          />
          <input className="form__button" type="submit" value="SUBMIT" />
        </form>
      </main>
    );
  }
}

export default ScoreInputPage;
