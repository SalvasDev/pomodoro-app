import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startNextSession, resetSessions } from '../features/sessions/sessionSlice';
import CicleMessage from './CicleMessage';
import Tag from './Tag';
import Timer from './Timer';

const SessionDetails = () => {
  const { sessions, currentSessionIndex } = useSelector(state => state.sessions);
  const session = sessions[currentSessionIndex];
  const nextSession = sessions[currentSessionIndex + 1];
  const dispatch = useDispatch();
  
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);  
  };

  const handleNextSession = () => {
    dispatch(startNextSession());
    setShowMessage(false);  
  };

  const handleResetSessions = () => {
    dispatch(resetSessions());
    setShowMessage(false); 
  };

  return (
    <section className="flex flex-col h-full w-full border border-[#71717A] rounded-lg p-4 ">
      <article className="flex flex-row justify-between items-center ">
        <div>
          <h3 className="text-2xl font-extrabold">Datos de sesión</h3>
          <p>Sigue los próximos ciclos</p>
        </div>
        <div className="bg-[#27272A] w-10 h-10 flex justify-center items-center rounded-md">
          <span className="material-symbols-rounded text-[#f59e0b]">
            hourglass_top
          </span>
        </div>
      </article>

      <div className="w-full h-[1px] bg-[#71717A] mt-6"></div>

      {     
        session.sessionNumber >= 1 &&
          <article className="w-full mt-6 flex flex-row justify-between items-center">
            <h4 className="font-semibold text-lg">Modo actual:</h4>
            <Tag label={session.mode} />
          </article>
      }

      {
        session.mode !== 'Pausa Larga' && (
          <article className="w-full mt-6 flex flex-row justify-between items-center">
            <h4 className="font-semibold text-lg">Próximo modo:</h4>
            <Tag label={ nextSession.mode} />
          </article>      
        )
      }

      <div className='flex flex-col flex-grow items-center justify-center self-center'>
        { 
          session.startTimer && !showMessage &&
            <Timer 
              duration={session.time * 60}   
              handleShowMessage={handleShowMessage}  
              session = {session.mode}
            />
        }

        { 
          showMessage && 
            <CicleMessage 
              title='¡Felicidades!'
              typeMessage='end'
              message='¡Has llegado al final de otro ciclo de esta sesión!'
              nextSession={nextSession.mode}
              onSessionEnd={handleNextSession} 
              sessionMode ={session.mode}
              resetSessions={handleResetSessions}
            />
        }

        { 
          session.sessionNumber === 0 && session.mode === 'Foco' && !session.startTimer && 
            <CicleMessage
              title='¡Empecemos!' 
              typeMessage='begin' 
              message='Haz click en el siguiente botón para iniciar tu primer ciclo.'
              nextSession={nextSession.mode} 
              onSessionEnd={handleNextSession}
            />
        }
    </div>

    {
      session.sessionNumber >= 1 &&
        <button 
          onClick={handleResetSessions} 
          className="mt-4 w-full h-12 self-end rounded-lg bg-gray-800 hover:bg-[#f59e0b] text-[#ffffff]   active:bg-[#b37600] text-xl font-semibold">
          Reiniciar Sesiones
        </button>
    }
    </section>
  );
};

export default SessionDetails;
