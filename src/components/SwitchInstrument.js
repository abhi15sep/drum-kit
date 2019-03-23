import React, { Component } from "react";
// require("../../node_modules/css-toggle-switch");
// import "css-toggle-switch/dist/css/"

export default class SwitchInstrument extends Component {
  logSwitchState = () => {
    return;
  };

  render() {
    const { changeInstrument } = this.props;
    return (
      <div id="switch-instrument" style={{ display: "block", margin: "auto" }}>
        <h2>Switch Instrument</h2>
        {/* <label htmlFor="piano" style={{ padding: "1rem" }}>
          <input type="radio" name="instrument" id="piano" defaultChecked />
          <span>Piano</span>
        </label>
        <label htmlFor="drum" style={{ padding: "1rem" }}>
          <input type="radio" name="instrument" id="drum" />
          <span>Drumkit</span>
        </label> */}

        {/* <label
          className="switch-light switch-candy"
          onClick={this.logSwitchState}
        >
          <input type="checkbox" />

          <strong>Switch Instrument</strong>

          <span>
            <span>Piano</span>
            <span>Drumkit</span>
            <a href="#" style={{ color: "transparent" }}>
              &nbsp;
            </a>
          </span>
        </label> */}

        <div
          id="switch-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            id="pianoId"
            onClick={changeInstrument}
            className="switcher enabled-switch"
          >
            Piano
          </div>
          <div
            id="drumId"
            onClick={changeInstrument}
            className="switcher disabled-switch"
          >
            Drumkit
          </div>
        </div>
      </div>
    );
  }
}
