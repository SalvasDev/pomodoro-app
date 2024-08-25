export const saveTasksToLocalStorage = store => next => action => {
    const result = next(action);
    const tasks = store.getState().tasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return result;
};