import React, { Component } from "react";
import boom from "../sounds/drum/boom.wav";
import clap from "../sounds/drum/clap.wav";
import hihat from "../sounds/drum/hihat.wav";
import kick from "../sounds/drum/kick.wav";
import openhat from "../sounds/drum/openhat.wav";
import ride from "../sounds/drum/ride.wav";
import snare from "../sounds/drum/snare.wav";
import tink from "../sounds/drum/tink.wav";
import tom from "../sounds/drum/tom.wav";

import q from "../sounds/piano/q.wav";
import w from "../sounds/piano/w.wav";
import e from "../sounds/piano/e.wav";
import a from "../sounds/piano/a.wav";
import s from "../sounds/piano/s.wav";
import d from "../sounds/piano/d.wav";
import z from "../sounds/piano/z.wav";
import x from "../sounds/piano/x.mp3";
import c from "../sounds/piano/c.mp3";
// import x from "../sounds/piano/x.wav";
// import c from "../sounds/piano/c.wav";

let pianoNotes = [q, w, e, a, s, d, z, x, c];

export default class Instrument extends Component {
  // componentDidMount() {
  //   let audioElems = document.querySelectorAll('audio');
  //   audioElems.forEach(elem => {
  //    elem.src = try to avoid nested loops
  //   });
  // }

  render() {
    return (
      <div id="drum-machine" style={{ margin: "auto" }}>
        <div data-key="81" className="drum-pad">
          <kbd>Q</kbd>
          <audio data-key="81" src={q} />
          <span className="sound">openhat</span>
        </div>

        <div data-key="87" className="drum-pad">
          <kbd>W</kbd>
          <audio data-key="87" src={w} />
          <span className="sound">boom</span>
        </div>

        <div data-key="69" className="drum-pad">
          <kbd>E</kbd>
          <audio data-key="69" src={e} />
          <span className="sound">ride</span>
        </div>

        <div data-key="65" className="drum-pad">
          <kbd>A</kbd>
          <audio data-key="65" src={a} />
          <span className="sound">clap</span>
        </div>

        <div data-key="83" className="drum-pad">
          <kbd>S</kbd>
          <audio data-key="83" src={s} />
          <span className="sound">hihat</span>
        </div>

        <div data-key="68" className="drum-pad">
          <kbd>D</kbd>
          <audio data-key="68" src={d} />
          <span className="sound">kick</span>
        </div>

        <div data-key="90" className="drum-pad">
          <kbd>Z</kbd>
          <audio data-key="90" src={z} />
          <span className="sound">snare</span>
        </div>

        <div data-key="88" className="drum-pad">
          <kbd>X</kbd>
          <audio data-key="88" src={x} />
          <span className="sound">tom</span>
        </div>

        <div data-key="67" className="drum-pad">
          <kbd>C</kbd>
          <audio data-key="67" src={c} />
          <span className="sound">tink</span>
        </div>
      </div>
    );
  }
}
