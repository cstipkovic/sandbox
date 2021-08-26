import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";

import SesasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner"

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <>Error: {this.state.errorMessage}</>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SesasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request"/>;
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
