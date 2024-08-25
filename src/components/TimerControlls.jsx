
const TimerControlls = ({ togglePause, isPaused, resetProgress }) => {
  return (
    <div className="absolute bottom-0 left-[20%] flex flex-arrow gap-1 items-center controlls">
      <button className="h-14 w-14 bg-[#52525B] flex justify-center items-center rounded-md hover:bg-[#84CC16] active:bg-[#78b221] group">
        <span onClick={togglePause} className="material-symbols-rounded text-[#A1A1AA] text-5xl group-hover:text-white">
          { isPaused ? 'play_arrow' : 'pause_circle' }
        </span>
      </button>
      <button onClick={resetProgress} className="h-14 w-14 bg-[#3F3F46] flex justify-center items-center rounded-md hover:bg-[#84CC16]  active:bg-[#78b221] group">
        <span className="material-symbols-rounded text-[#A1A1AA] text-4xl group-hover:text-white">
          update
        </span>
      </button>
    </div>
  );
};

export default TimerControlls;
