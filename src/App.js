import React, { Component } from 'react';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends Component {
  state = {
    lat: null,
    lon: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // Helper method
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonsDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please except location request" />;
  }

  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}

export default App;
