import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid  } from "uuid";

const AddTasks = () => {

 const dispatch =  useDispatch(addTask);

  const [task, setTask] = useState({description: ''});

  const [error, setError] = useState(false)


  const handleChange = (e) => {
      setTask({
        ...task,
        [e.target.name]: e.target.value
      })
    }


  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(task.description.trim() !== ''){
      dispatch(addTask({
        ...task,
        id: uuid(),
        isCompleted: false
      }));
      setTask({ description: '' });  
      setError(false);
    } else {
        setError(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-row gap-4 w-full h-10 justify-between max-w-150 items-center mt-6">
        <input
          name='description'
          placeholder="Nueva tarea"
          onChange={handleChange}
          value={task.description}
          className="w-10/12 h-full rounded-lg p-4 placeholder:text-[#52525B]"
        />
        <button
          type="submit"
          className="w-2/12 min-w-[100px] h-full rounded-lg bg-[#5f9f00] hover:bg-[#518600] text-[#ffffff] font-semibold"
        >
          Agregar
        </button>
      </form>
      { error && <p className="text-red-500">¡Por favor ingresa una nueva tarea!</p> }
    </>
    
  );
};

export default AddTasks;