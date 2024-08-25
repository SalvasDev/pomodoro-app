import { useEffect, useState } from 'react';
import CircularProgressBar from './CircularProgressBar';
import { useDispatch } from 'react-redux';
import { resetSessions } from '../features/sessions/sessionSlice';

const Timer = ({ duration, handleShowMessage, session }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false)
  const dispatch = useDispatch()

  const sound = new Audio('/sound.wav');


  useEffect(()=>{
      if(session === 'Final') {
        dispatch(resetSessions());
      }
  }, [timeLeft]);

  useEffect(() => {
    if(isPaused) return; 
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          sound.play();
          setTimeout(() => handleShowMessage(), 0);  
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    setProgress(((duration - timeLeft) / duration) * 100);
  }, [timeLeft, duration]);

  const togglePause = () => {
    setIsPaused(prev => !prev);  
  };

  const resetProgress = () => {
    setProgress(0);
    setTimeLeft(duration);
  }

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
