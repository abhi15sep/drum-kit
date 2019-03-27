import React, { Component } from "react";

export default class SwitchInstrument extends Component {
  render() {
    const { changeInstrument } = this.props;
    return (
      <div id="switch-instrument" style={{ display: "block", margin: "auto" }}>
        <div id="display" style={{ display: "flex", justifyContent: "center" }}>
          Yahallo!
        </div>

        <h3 id="switch-heading" style={{ margin: "0.5rem auto" }}>
          Switch Instrument
        </h3>

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