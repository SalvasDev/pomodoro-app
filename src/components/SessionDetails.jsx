import hourglass from '../assets/hourglass.png';
import Chronometer from './Chronometer';
import Tag from './Tag';

const SessionDetails = () => {
  return (
    <section className="h-full w-full border border-[#71717A] rounded-lg p-4 ">
      <article className="flex flex-row justify-between items-center ">
        <div className="">
          <h3 className="text-2xl font-extrabold">Datos de sesión</h3>
          <p>Sigue los próximos ciclos</p>
        </div>
        <div className="bg-[#27272A] w-14 h-14 flex justify-center items-center rounded-md">
          <img src={hourglass} alt="Hourglass image" />
        </div>
      </article>

      <div className="w-full h-[1px] bg-[#71717A] mt-6"></div>

      <article className="w-full mt-6 flex flex-row justify-between items-center">
        <div>
          <h4 className="font-semibold text-lg">Modo actual:</h4>
          <p className="text-md">Ciclo de cronómetro</p>
        </div>
        <Tag label={'Enfoque'} />
      </article>

      <article className="w-full mt-6 flex flex-row justify-between items-center">
        <div>
          <h4 className="font-semibold text-lg">Próximo modo:</h4>
          <p className="text-md">¿Qué ciclo se activará?</p>
        </div>
        <Tag label={'Pausa larga'} />
      </article>
      <Chronometer />
    </section>
  );
};

export default SessionDetails;
