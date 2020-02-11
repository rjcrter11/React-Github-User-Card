import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gitCard: [],
      followers: []
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

  render() {
    return (
      <div>
        <h1>Github User Card</h1>
      </div>
    );
  }
}

export default App;
