import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Drum Kit</h1>
        <div className="container">
          <div id="drum-machine">
            <div data-key="65" className="drum-pad">
              <kbd>A</kbd>
              <span className="sound">clap</span>
            </div>

            <div data-key="83" className="drum-pad">
              <kbd>S</kbd>
              <span className="sound">hihat</span>
            </div>

            <div data-key="68" className="drum-pad">
              <kbd>D</kbd>
              <span className="sound">kick</span>
            </div>

            <div data-key="70" className="drum-pad">
              <kbd>F</kbd>
              <span className="sound">openhat</span>
            </div>

            <div data-key="71" className="drum-pad">
              <kbd>G</kbd>
              <span className="sound">boom</span>
            </div>

            <div data-key="72" className="drum-pad">
              <kbd>H</kbd>
              <span className="sound">ride</span>
            </div>

            <div data-key="74" className="drum-pad">
              <kbd>J</kbd>
              <span className="sound">snare</span>
            </div>

            <div data-key="75" className="drum-pad">
              <kbd>K</kbd>
              <span className="sound">tom</span>
            </div>

            <div data-key="76" className="drum-pad">
              <kbd>L</kbd>
              <span className="sound">tink</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
