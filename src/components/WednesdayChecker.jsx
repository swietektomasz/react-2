import React from 'react';

function WednesdayChecker() {
  const today = new Date();

  return (
    <div>
      {today.getDay() === 3 ? <p>Yes, it is a Wednesday</p> : <p>Not a Wednesday</p>}
    </div>
  );
}

export default WednesdayChecker;
