import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";

import SesasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <>Error: {this.state.errorMessage}</>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SesasonDisplay lat={this.state.lat} />;
    }

    return <>Loading...</>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
