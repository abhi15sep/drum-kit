import React, { Component } from "react";

export default class SwitchInstrument extends Component {
  render() {
    const { changeInstrument } = this.props;
    return (
      <div
        id="switch-instrument"
        style={{ display: "block", margin: "auto", marginBottom: "5vh" }}
      >
        <div id="display" style={{ display: "flex", justifyContent: "center" }}>
          Yahallo!
        </div>

        <h2 id="switch-heading">Switch Instrument</h2>

        <div
          id="switch-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            aria-label="Select Piano"
            id="pianoId"
            onClick={changeInstrument}
            className="switcher enabled-switch"
          >
            Piano
          </button>
          <button
            aria-label="Select Drumkit"
            id="drumId"
            onClick={changeInstrument}
            className="switcher disabled-switch"
          >
            Drumkit
          </button>
        </div>
      </div>
    );
  }
}
