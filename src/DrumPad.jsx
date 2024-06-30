import React, { useEffect } from 'react';

function DrumPad({ id, src, triggerKey, handleDisplay }) {
  const playSound = () => {
    const audio = document.getElementById(triggerKey);
    audio.currentTime = 0;
    audio.play();
    handleDisplay(id);
  };

  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === triggerKey) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div
      id={id}
      className="drum-pad btn btn-secondary m-2"
      onClick={playSound}
    >
      {triggerKey}
      <audio className="clip" id={triggerKey} src={src}></audio>
    </div>
  );
}

export default DrumPad;
