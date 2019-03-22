import React, { Component } from "react";
import "./App.css";
import Instrument from "./components/Instrument";
import SwitchInstrument from "./components/SwitchInstrument";

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
      activeInstrument: undefined
    };
  }

  componentDidMount(e) {
    const keys = document.querySelectorAll(".drum-pad");
    const drumMachine = document.getElementById("drum-machine");

    //now to remove transition after key has played
    //used forEach to loop through ALL the keys properly
    keys.forEach(key =>
      key.addEventListener("transitionend", removeTransition)
    );

    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);
      if (!audio) return; //stop the function from running altogether
      audio.currentTime = 0; //rewind to the start
      audio.play();
      key.classList.add("playing");
      setTimeout(function() {
        key.classList.remove("playing");
      }, 100);
    }

    function playSoundOnClick(e) {
      // if click event happens on drum-pad itself
      const targetIsDrumpadItself = e.target.querySelector("audio");

      // if click event happens on drum-pad children
      const targetIsDrumpadChild = e.target.parentElement.querySelector(
        "audio"
      );

      // if (targetIsDrumpadItself) {
      //   targetIsDrumpadItself.currentTime = 0;
      //   targetIsDrumpadItself.play();
      // } else if (targetIsDrumpadChild) {
      //   targetIsDrumpadChild.currentTime = 0;
      //   targetIsDrumpadChild.play();
      // } else {
      //   return;
      // }

      // alternate approach
      // bubbleaudio captureaudio
      const audio1 = e.target.querySelector("audio");
      const audio2 = e.target.parentElement.querySelector("audio");
      // if click event happens on drum-pad itself
      if (e.target.classList.contains("drum-pad")) {
        e.target.querySelector("audio").currentTime = 0;
        e.target.querySelector("audio").play();
      }
      // if click event happens on drum-pad children
      else if (e.target.parentElement.classList.contains("drum-pad")) {
        e.target.parentElement.querySelector("audio").currentTime = 0;
        e.target.parentElement.querySelector("audio").play();
      }
    }

    function removeTransition(e) {
      if (e.propertyName !== "transform") return; //skip it if its not a transform
      this.classList.remove("playing");
    }

    window.addEventListener("keydown", playSound);
    window.addEventListener("click", playSoundOnClick);
  }

  changeActiveInstrument = () => {
    let switchInstrument = document.getElementById("ckbx-size-1");

    if (switchInstrument.checked) {
      this.setState({
        activeInstrument: "drumkit"
      });
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
          <Instrument />
          <SwitchInstrument />
        </div>
      </div>
    );
  }
}

export default App;
