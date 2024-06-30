import React from 'react';

function Display({ display }) {
  return (
    <div id="display" className="bg-dark text-white text-center p-3">
      {display}
    </div>
  );
}

export default Display;
