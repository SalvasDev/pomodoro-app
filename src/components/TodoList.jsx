import AddTasks from './AddTasks';
import TasksList from './TasksList';

const TodoList = () => {
  return (
    <section className="flex flex-col h-full min-h-max w-full border border-[#71717A] rounded-lg p-4 ">
      <article className="flex flex-row justify-between items-center ">
        <div className="">
          <h3 className="text-2xl font-extrabold">Lista de tareas</h3>
          <p>Tus objetivos para esta sesión</p>
        </div>
        <div className="bg-[#27272A] w-10 h-10 flex justify-center items-center rounded-md">
          <span className="material-symbols-rounded text-[#f59e0b]">
            rocket_launch
          </span>
        </div>
      </article>

      <div className="w-full h-[1px] bg-[#71717A] mt-6"></div>

      <TasksList />
      <AddTasks />
    </section>
  );
};

export default TodoList;
