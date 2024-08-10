const AddTasks = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            placeholder="Nueva tarea"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="">
          <button type="submit">Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default AddTasks;
