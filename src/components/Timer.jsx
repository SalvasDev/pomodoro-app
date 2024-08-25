import { useEffect, useState } from 'react';
import CircularProgressBar from './CircularProgressBar';
import { useDispatch } from 'react-redux';
import { resetSessions } from '../features/sessions/sessionSlice';

const Timer = ({ duration, handleShowMessage, session }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);   
  const dispatch = useDispatch();

  const sound = new Audio('/sound.wav');

  useEffect(() => {
    if (session === 'Final') {
      dispatch(resetSessions());
    }
  }, [timeLeft, session, dispatch]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const totalElapsedTime = elapsedTime + Math.floor((now - startTime) / 1000);
      const remainingTime = duration - totalElapsedTime;

      if (remainingTime <= 0) {
        clearInterval(interval);
        sound.play();
        handleShowMessage();
        setTimeLeft(0);
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, startTime, elapsedTime, duration, handleShowMessage]);

  useEffect(() => {
    setProgress(((duration - timeLeft) / duration) * 100);
  }, [timeLeft, duration]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
    if (!isPaused) {
      setElapsedTime((prev) => prev + Math.floor((Date.now() - startTime) / 1000));
    } else {
      setStartTime(Date.now());
    }
  };

  const resetProgress = () => {
    setProgress(0);
    setTimeLeft(duration);
    setStartTime(Date.now());
    setElapsedTime(0);   
  };

  return (
    <div className="flex flex-grow relative items-center justify-center mt-8 gap-6">
      <CircularProgressBar
        size={200}
        strokeWidth={10}
        progress={progress}
        resetProgress={resetProgress}
        timeLeft={timeLeft}
        session={session}
        togglePause={togglePause}
        isPaused={isPaused}
      />
    </div>
  );
};

export default Timer;
