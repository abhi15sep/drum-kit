import React, { Component } from "react";

export default class SwitchInstrument extends Component {
  render() {
    return (
      <div style={{ display: "block", margin: "auto" }}>
        <h2 style={{ marginTop: 0 }}>Switch Instrument</h2>
        <label htmlFor="piano" style={{ padding: "1rem" }}>
          <input type="radio" name="instrument" id="piano" defaultChecked />
          <span>Piano</span>
        </label>
        <label htmlFor="drum" style={{ padding: "1rem" }}>
          <input type="radio" name="instrument" id="drum" />
          <span>Drumkit</span>
        </label>
      </div>
    );
  }
}
