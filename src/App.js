import HomePage from "./pages/HomePage";
import ScorePage from "./pages/ScorePage";
import PlayPage from "./pages/PlayPage";
import ScoreInputPage from "./pages/ScoreInputPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from "react";

class App extends Component {
  state = {
    choice: "",
    lives: 3,
    score: 0,
  };

  clickHandler = (id) => {
    if (id === 0) {
      this.setState({
        choice: "rock",
      });
    }
    if (id === 1) {
      this.setState({
        choice: "paper",
      });
    }
    if (id === 2) {
      this.setState({
        choice: "scissors",
      });
    }
  };

  playHandler = (result) => {
    if (result === "You lose") {
      this.setState({
        lives: this.state.lives - 1,
      });
    }

    if (result === "You win") {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  clickHandler={this.clickHandler}
                  score={this.state.score}
                  lives={this.state.lives}
                />
              )}
            />
            <Route path="/score" render={() => <ScorePage />} />
            <Route
              path="/scoreinput"
              render={(routerProps) => (
                <ScoreInputPage score={this.state.score} {...routerProps} />
              )}
            />
            <Route
              path="/play"
              render={() => (
                <PlayPage
                  lives={this.state.lives}
                  choice={this.state.choice}
                  playHandler={this.playHandler}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
