import TimerControlls from "./TimerControlls";

const CircularProgressBar = ({ size, strokeWidth, progress, resetProgress, timeLeft, session, togglePause, isPaused }) => {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const strokeColor = session === 'Foco' ? '#84cc16' : session === 'Pausa Corta' ? '#f59e0b' : '#06b6d4';
  return (
    <section className="relative mb-10 mt-10 sm:mt-0">
      <div className="circle relative">
        <div className={ isPaused ? 'blur-effect circle-content' : 'circle-content'}>
            <svg width={size} height={size} className="rotate-[-90deg]">
              <circle
                stroke="#27272A"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={center}
                cy={center}
              />
              {timeLeft > 0 && (
                <circle
                  stroke= {strokeColor}
                  fill="transparent"
                  strokeWidth={strokeWidth}
                  r={radius}
                  cx={center}
                  cy={center}
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  className="transition-all duration-300 ease-linear"
                  strokeLinecap="round"
                />
              )}
            </svg>

            <span className="absolute top-[40%] translate-x-[40%] font-['Rajdhani'] font-bold text-5xl text-center w-[110px] text-ellipsis text-white  ">
              {timeLeft / 60 < 10 ? '0' : ''}
              {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}
            </span>
          </div>
          { timeLeft > 0 && (
          <div className="controlls absolute inset-0 flex items-center justify-center">
            <TimerControlls togglePause={togglePause} isPaused={isPaused} resetProgress={resetProgress}
/>
          </div>
        )}
      </div>
    </section>
  );
};

export default CircularProgressBar;
