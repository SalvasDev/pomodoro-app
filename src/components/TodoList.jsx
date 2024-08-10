import rocket from '../assets/rocket.png';

const TodoList = () => {
  return (
    <section className="h-full w-full border border-[#71717A] rounded-lg p-4 ">
      <article className="flex flex-row justify-between items-center ">
        <div className="">
          <h3 className="text-2xl font-extrabold">Lista de tareas</h3>
          <p>Tus objetivos para esta sesión</p>
        </div>
        <div className="bg-[#27272A] w-14 h-14 flex justify-center items-center rounded-md">
          <img src={rocket} alt="Hourglass image" />
        </div>
      </article>

      <div className="w-full h-[1px] bg-[#71717A] mt-6"></div>
      <article>
        <input type="radio"></input>
      </article>
    </section>
  );
};

export default TodoList;
