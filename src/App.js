import React, { Component } from "react";
import "./App.css";

const drum = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "clap",
    url: "./sounds/drum/clap.wav"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "boom",
    url: "./sounds/drum/boom.wav"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "hihat",
    url: "./sounds/drum/hihat.wav"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "kick",
    url: "./sounds/drum/kick.wav"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "openhat",
    url: "./sounds/drum/openhat.wav"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "ride",
    url: "./sounds/drum/ride.wav"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "snare",
    url: "./sounds/drum/snare.wav"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "tink",
    url: "./sounds/drum/tink.wav"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "tom",
    url: "./sounds/drum/tom.wav"
  }
];

const piano = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "q-key",
    url: "./sounds/piano/q.wav"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "w-key",
    url: "./sounds/piano/w.wav"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "e-key",
    url: "./sounds/piano/e.wav"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "a-key",
    url: "./sounds/piano/a.wav"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "s-key",
    url: "./sounds/piano/s.wav"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "d-key",
    url: "./sounds/piano/d.wav"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "z-key",
    url: "./sounds/piano/z.wav"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "x-key",
    url: "./sounds/piano/x.wav"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "c-key",
    url: "./sounds/piano/c.wav"
  }
];

console.log(drum[0].url);

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeInstrument: undefined // remove double quotes later
    };
  }

  changeActiveInstrument = () => {
    // console.log();
    let switchInstrument = document.getElementById("instrument-switch");
    // console.log(switchInstrument);

    // document.getElementById("instrument-switch").value = "piano";
    // console.log(switchInstrument);

    if (switchInstrument.checked) {
      this.setState({
        activeInstrument: "drumkit"
      });
      // console.log(this.state.activeInstrument);
    } else {
      this.setState({
        activeInstrument: "piano"
      });
    }
    this.stateChangeFunc();
  };

  stateChangeFunc = () => {
    console.log(this.state.activeInstrument);
  };

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

            <label className="switch">
              <p style={{ display: "block" }}>piano</p>
              <input
                id="instrument-switch"
                type="checkbox"
                value="drumkit"
                onChange={this.changeActiveInstrument}
                style={{ display: "block" }}
              />
              <p style={{ display: "block" }}>drumkit</p>
              drumkit
              <span className="slider round" />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
