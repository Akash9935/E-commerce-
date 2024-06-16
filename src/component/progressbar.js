import React, { useEffect, useState } from 'react'

const ProgressBar = ({ bgcolor, progress, height, setActive }) => {
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(15);



  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {

        setCounter(time)
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, time]);

  const setCounter = () => {
    if (time > 0 && isActive) {
      setTime((time) => time - 1);
    } else {
      setIsActive(false),

      setActive(true)
    }
  }


  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: 50
  }

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right'
  }

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900
  }

  return (
    <div style={Parentdiv}>
      {time} 
      {/* <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div> */}
    </div>
  )
}

export default ProgressBar;