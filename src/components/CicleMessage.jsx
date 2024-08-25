
const CicleMessage = ({ title, typeMessage, message, nextSession, onSessionEnd,  resetSessions, sessionMode }) => {
  
  const baseColor = nextSession === 'Foco' || 'End' ? 'bg-[#5f9f00]' : nextSession === 'Pausa Corta' ? 'bg-[#f59e0b]' : 'bg-[#06b6d4]';
  const hoverColor = nextSession === 'Foco' || 'End' ? 'hover:bg-[#518600]' : nextSession === 'Pausa Corta' ? 'hover:bg-[#c6881e]' : 'hover:bg-[#05a3be]';
  const widthCustom = typeMessage === 'begin' ? 'w-[70%]' : 'w-[90%]';

  return (
    <div className={`flex flex-col mt-10 mb-10 justify-center items-center ${widthCustom}`}>
      <div className="flex flex-row">
        <h2 className="font-bold text-5xl text-white">{title}</h2>
        <span className="material-symbols-rounded text-5xl text-[#f59e0b]">
          { typeMessage === 'end' ? 'celebration' : 'rocket_launch'}
        </span>
      </div>
      <p className="text-[#71717A] text-xl mt-2 text-center">{ message }</p>
      <button 
        onClick={ sessionMode === 'Pausa Larga' ? resetSessions : onSessionEnd } 
        className={`w-full h-12 mt-8 rounded-lg text-white text-xl font-semibold ${baseColor} ${hoverColor}`}
      >
        {sessionMode === 'Pausa Larga' ? 'Reiniciar sesiones' : 'Iniciar: ' + nextSession}
      </button>
    </div>
  );
};

export default CicleMessage;

