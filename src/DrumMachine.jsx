import React, { useState } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';
import heater1 from './assets/Heater-1.mp3';
import heater2 from './assets/Heater-2.mp3';
import heater3 from './assets/Heater-3.mp3';
import heater4 from './assets/Heater-4.mp3';
import clap from './assets/Clap.mp3';
import openHH from './assets/Open-HH.mp3';
import kicknHat from './assets/Kick-n-Hat.mp3';
import kick from './assets/Kick.mp3';
import closedHH from './assets/Closed-HH.mp3';

const drumPads = [
  { key: 'Q', id: 'Heater-1', src: heater1 },
  { key: 'W', id: 'Heater-2', src: heater2 },
  { key: 'E', id: 'Heater-3', src: heater3 },
  { key: 'A', id: 'Heater-4', src: heater4 },
  { key: 'S', id: 'Clap', src: clap },
  { key: 'D', id: 'Open-HH', src: openHH },
  { key: 'Z', id: 'Kick-n-Hat', src: kicknHat },
  { key: 'X', id: 'Kick', src: kick },
  { key: 'C', id: 'Closed-HH', src: closedHH },
];

function DrumMachine() {
  const [display, setDisplay] = useState('');

  const handleDisplay = (displayText) => {
    setDisplay(displayText);
  };

  return (
    <div id="drum-machine" className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <Display display={display} />
      <div className="drum-pad-container d-flex flex-wrap justify-content-center">
        {drumPads.map((pad) => (
          <DrumPad
            key={pad.id}
            id={pad.id}
            src={pad.src}
            triggerKey={pad.key}
            handleDisplay={handleDisplay}
          />
        ))}
      </div>
    </div>
  );
}

export default DrumMachine;
