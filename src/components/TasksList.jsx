const TasksList = () => {
  return (
    <div>
      <ul className="list__items">
        <li>
          <label htmlFor={id} className={classEnabled}>
            <input
              checked={id.active}
              defaultChecked={defCheck}
              id={id}
              name={title}
              type="checkbox"
              onChange={(e) => {
                handleCheckbox(id, e);
              }}
            />
            {title}
          </label>
          {typeList === 'completed' && (
            <button className="btn__del" onClick={() => removeItem(id)}>
              <span className="material-symbols-outlined btn__small">
                delete
              </span>
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default TasksList;
