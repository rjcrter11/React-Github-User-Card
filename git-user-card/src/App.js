import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GitCard from "./Components/GitCard";
import Search from "./Components/SearchCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gitCard: [],
      followers: [],
      user: "",
      error: ""
    };
  }

  componentDidMount() {
    Promise.all([
      axios.get("https://api.github.com/users/rjcrter11"),
      axios.get("https://api.github.com/users/rjcrter11/followers")
    ])
      .then(([res1, res2]) => {
        this.setState({
          gitCard: res1.data,
          followers: res2.data
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.gitCard !== this.state.gitCard) {
      if (this.state.user === "wrong") {
        axios
          .get(`https://api.github.com/users/${this.state.user}`)
          .then((res) => {
            this.setState({
              gitCard: res.data
            });
          })
          .catch((err) => console.log(err));
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      user: e.target.value
    });
  };

  getUsers = (e) => {
    e.preventDefault();
    Promise.all([
      axios.get(`https://api.github.com/users/${this.state.user}`),
      axios.get(`https://api.github.com/users/${this.state.user}/followers`)
    ])

      .then(([res1, res2]) => {
        this.setState({
          gitCard: res1.data,
          followers: res2.data,
          error: ""
        });
      })
      .catch((err) => {
        this.setState({
          error: "Looks like you have no idea what you're doing...",
          err,
          gitCard: [],
          followers: []
        });
      });
  };

  render() {
    return (
      <div>
        <h1>Github User Card</h1>

        <Search
          user={this.state.user}
          gitCard={this.state.gitCard}
          handleChange={this.handleChange}
          getUsers={this.getUsers}
          error={this.state.error}
        />
        <GitCard
          gitCard={this.state.gitCard}
          followers={this.state.followers}
        />
      </div>
    );
  }
}

export default App;
