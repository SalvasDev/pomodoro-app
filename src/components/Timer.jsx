import { useEffect, useState } from 'react';
import CircularProgressBar from './CircularProgressBar';
import { useDispatch } from 'react-redux';
import { resetSessions } from '../features/sessions/sessionSlice';

const Timer = ({ duration, handleShowMessage, session }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
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
      const elapsedTime = Math.floor((now - startTime) / 1000);
      const remainingTime = duration - elapsedTime;

      if (remainingTime <= 0) {
        clearInterval(interval);
        sound.play();
        setTimeout(() => handleShowMessage(), 0);
        setTimeLeft(0);
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, startTime, duration, handleShowMessage]);

  useEffect(() => {
    setProgress(((duration - timeLeft) / duration) * 100);
  }, [timeLeft, duration]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
    if (!isPaused) {
      setStartTime(Date.now() - (duration - timeLeft) * 1000);
    } else {
      setStartTime(Date.now());
    }
  };

  const resetProgress = () => {
    setProgress(0);
    setTimeLeft(duration);
    setStartTime(Date.now());
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
