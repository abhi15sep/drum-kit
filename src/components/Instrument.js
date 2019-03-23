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

// const drum = [
//   {
//     keyCode: 81,
//     keyTrigger: "Q",
//     id: "clap",
//     url: "./sounds/drum/clap.wav"
//   },
//   {
//     keyCode: 87,
//     keyTrigger: "W",
//     id: "boom",
//     url: "./sounds/drum/boom.wav"
//   },
//   {
//     keyCode: 69,
//     keyTrigger: "E",
//     id: "hihat",
//     url: "./sounds/drum/hihat.wav"
//   },
//   {
//     keyCode: 65,
//     keyTrigger: "A",
//     id: "kick",
//     url: "./sounds/drum/kick.wav"
//   },
//   {
//     keyCode: 83,
//     keyTrigger: "S",
//     id: "openhat",
//     url: "./sounds/drum/openhat.wav"
//   },
//   {
//     keyCode: 68,
//     keyTrigger: "D",
//     id: "ride",
//     url: "./sounds/drum/ride.wav"
//   },
//   {
//     keyCode: 90,
//     keyTrigger: "Z",
//     id: "snare",
//     url: "./sounds/drum/snare.wav"
//   },
//   {
//     keyCode: 88,
//     keyTrigger: "X",
//     id: "tink",
//     url: "./sounds/drum/tink.wav"
//   },
//   {
//     keyCode: 67,
//     keyTrigger: "C",
//     id: "tom",
//     url: "./sounds/drum/tom.wav"
//   }
// ];

// const piano = [
//   {
//     keyCode: 81,
//     keyTrigger: "Q",
//     id: "q-key",
//     url: "./sounds/piano/q.wav"
//   },
//   {
//     keyCode: 87,
//     keyTrigger: "W",
//     id: "w-key",
//     url: "./sounds/piano/w.wav"
//   },
//   {
//     keyCode: 69,
//     keyTrigger: "E",
//     id: "e-key",
//     url: "./sounds/piano/e.wav"
//   },
//   {
//     keyCode: 65,
//     keyTrigger: "A",
//     id: "a-key",
//     url: "./sounds/piano/a.wav"
//   },
//   {
//     keyCode: 83,
//     keyTrigger: "S",
//     id: "s-key",
//     url: "./sounds/piano/s.wav"
//   },
//   {
//     keyCode: 68,
//     keyTrigger: "D",
//     id: "d-key",
//     url: "./sounds/piano/d.wav"
//   },
//   {
//     keyCode: 90,
//     keyTrigger: "Z",
//     id: "z-key",
//     url: "./sounds/piano/z.wav"
//   },
//   {
//     keyCode: 88,
//     keyTrigger: "X",
//     id: "x-key",
//     url: "./sounds/piano/x.wav"
//   },
//   {
//     keyCode: 67,
//     keyTrigger: "C",
//     id: "c-key",
//     url: "./sounds/piano/c.wav"
//   }
// ];

export default class Instrument extends Component {
  render() {
    const { activeInstrument } = this.props;

    const pianoNotes = [q, w, e, a, s, d, z, x, c];
    const drumSounds = [
      boom,
      clap,
      hihat,
      kick,
      openhat,
      ride,
      snare,
      tink,
      tom
    ];
    let soundsArray = [];

    if (activeInstrument === "Piano") {
      soundsArray = pianoNotes;
    } else if (activeInstrument === "Drumkit") {
      soundsArray = drumSounds;
    }

    document.querySelectorAll("audio").forEach(elem => {
      elem.src = soundsArray.shift();
    });

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
