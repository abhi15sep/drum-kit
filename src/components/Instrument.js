import React, { Component } from "react";

export default class Instrument extends Component {
  render() {
    return (
      <div id="drum-machine">
        <div data-key="81" className="drum-pad">
          <kbd>Q</kbd>
          <span className="sound">openhat</span>
        </div>

        <div data-key="87" className="drum-pad">
          <kbd>W</kbd>
          <span className="sound">boom</span>
        </div>

        <div data-key="69" className="drum-pad">
          <kbd>E</kbd>
          <span className="sound">ride</span>
        </div>

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

        <div data-key="90" className="drum-pad">
          <kbd>Z</kbd>
          <span className="sound">snare</span>
        </div>

        <div data-key="88" className="drum-pad">
          <kbd>X</kbd>
          <span className="sound">tom</span>
        </div>

        <div data-key="67" className="drum-pad">
          <kbd>C</kbd>
          <span className="sound">tink</span>
        </div>

        <audio data-key="81" src="./sounds/boom.wav" />
        <audio data-key="87" src="sounds/boom.wav" />
        <audio data-key="69" src="sounds/ride.wav" />
        <audio data-key="65" src="sounds/clap.wav" />
        <audio data-key="83" src="sounds/hihat.wav" />
        <audio data-key="68" src="sounds/kick.wav" />
        <audio data-key="90" src="sounds/snare.wav" />
        <audio data-key="88" src="sounds/tom.wav" />
        <audio data-key="67" src="sounds/tink.wav" />
      </div>
    );
  }
}
