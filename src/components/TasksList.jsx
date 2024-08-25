import { useDispatch, useSelector } from "react-redux";
import { completeTask, deleteTask } from "../features/tasks/taskSlice";

const TasksList = () => {

  const tasks =  useSelector(state =>state.tasks)
  const dispatch = useDispatch(deleteTask, completeTask)

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  const onToggleChecked = (id) => {
    dispatch(completeTask(id))
  }

  return (
    <div className="flex flex-grow overflow-auto mt-6">
      <ul className="flex flex-col gap-4 w-full items-center">
        {
          tasks.map( task => (
            <li key={task.id} className="flex flex-row w-full justify-between items-center gap-2 ">
              <div className="flex flex-row gap-4 items-center">
                <input
                  type="checkbox"
                  id={task.id}
                  checked= {task.isCompleted}
                  onChange={()=>onToggleChecked(task.id)}
                  className="appearance-none bg-[#3F3F46] h-5 w-5 border border-[#71717A] rounded-md checked:bg-[#5f9f00] checked:border-transparent focus:outline-none checked:after:content-['✓'] checked:after:text-white checked:after:block checked:after:text-center checked:after:leading-[17px] font-bold"
                />
                <label htmlFor={task.id} className={task.isCompleted ? 'line-through' : '' }>
                  {task.description}
                </label>
              </div>
              <button onClick={() => handleDelete(task.id)}>
                <span className="material-symbols-rounded hover:text-red-600">delete</span>
              </button>
            </li>                   
          ))
        }
      </ul>
    </div>
  );
};

export default TasksList;

