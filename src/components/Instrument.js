import React, { Component } from "react";
import clap from "../sounds/drum/clap.mp3";
import boom from "../sounds/drum/boom.mp3";
import hihat from "../sounds/drum/hihat.mp3";
import kick from "../sounds/drum/kick.mp3";
import openhat from "../sounds/drum/openhat.mp3";
import ride from "../sounds/drum/ride.mp3";
import snare from "../sounds/drum/snare.mp3";
import tink from "../sounds/drum/tink.mp3";
import tom from "../sounds/drum/tom.mp3";

import q from "../sounds/piano/q.mp3";
import w from "../sounds/piano/w.mp3";
import e from "../sounds/piano/e.mp3";
import a from "../sounds/piano/a.mp3";
import s from "../sounds/piano/s.mp3";
import d from "../sounds/piano/d.mp3";
import z from "../sounds/piano/z.mp3";
import x from "../sounds/piano/x.mp3";
import c from "../sounds/piano/c.mp3";

const drumCollection = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "clap",
    src: clap
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "boom",
    src: boom
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "hihat",
    src: hihat
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "kick",
    src: kick
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "openhat",
    src: openhat
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "ride",
    src: ride
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "snare",
    src: snare
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "tink",
    src: tink
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "tom",
    src: tom
  }
];

const pianoCollection = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord A",
    src: q
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord B",
    src: w
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord C",
    src: e
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Chord D",
    src: a
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Chord E",
    src: s
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Chord E#",
    src: d
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Chord F",
    src: z
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Chord G",
    src: x
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Chord G#",
    src: c
  }
];

export default class Instrument extends Component {
  componentDidUpdate(prevProps) {
    // console.log(prevProps.activeInstrument);
    const { activeInstrument } = this.props;

    if (prevProps.activeInstrument !== activeInstrument) {
      // console.log("need update!");

      let soundsArray = [];

      if (activeInstrument === "Piano") {
        soundsArray = pianoCollection;
      } else if (activeInstrument === "Drumkit") {
        soundsArray = drumCollection;
      }

      const audioElemArray = document.querySelectorAll("audio");
      const spanSoundNames = document.querySelectorAll(".sound-name");

      // Adds src to the audio tags
      audioElemArray.forEach((elem, index) => {
        elem.src = soundsArray[index].src;
      });

      // Adds sound name to the keys
      spanSoundNames.forEach(
        (elem, index) => (elem.textContent = soundsArray[index].id)
      );
    }
  }

  render() {
    return (
      <div id="drum-machine" style={{ margin: "auto" }}>
        <div data-key="81" className="drum-pad" id="sound1">
          <span className="keyboard-key">Q</span>
          <audio id="Q" className="clip" data-key="81" src={q} />
          <span className="sound-name">Chord A</span>
        </div>

        <div data-key="87" className="drum-pad" id="sound2">
          <span className="keyboard-key">W</span>
          <audio id="W" className="clip" data-key="87" src={w} />
          <span className="sound-name">Chord B</span>
        </div>

        <div data-key="69" className="drum-pad" id="sound3">
          <span className="keyboard-key">E</span>
          <audio id="E" className="clip" data-key="69" src={e} />
          <span className="sound-name">Chord C</span>
        </div>

        <div data-key="65" className="drum-pad" id="sound4">
          <span className="keyboard-key">A</span>
          <audio id="A" className="clip" data-key="65" src={a} />
          <span className="sound-name">Chord D</span>
        </div>

        <div data-key="83" className="drum-pad" id="sound5">
          <span className="keyboard-key">S</span>
          <audio id="S" className="clip" data-key="83" src={s} />
          <span className="sound-name">Chord E</span>
        </div>

        <div data-key="68" className="drum-pad" id="sound6">
          <span className="keyboard-key">D</span>
          <audio id="D" className="clip" data-key="68" src={d} />
          <span className="sound-name">Chord E#</span>
        </div>

        <div data-key="90" className="drum-pad" id="sound7">
          <span className="keyboard-key">Z</span>
          <audio id="Z" className="clip" data-key="90" src={z} />
          <span className="sound-name">Chord F</span>
        </div>

        <div data-key="88" className="drum-pad" id="sound8">
          <span className="keyboard-key">X</span>
          <audio id="X" className="clip" data-key="88" src={x} />
          <span className="sound-name">Chord G</span>
        </div>

        <div data-key="67" className="drum-pad" id="sound9">
          <span className="keyboard-key">C</span>
          <audio id="C" className="clip" data-key="67" src={c} />
          <span className="sound-name">Chord G#</span>
        </div>
      </div>
    );
  }
}
