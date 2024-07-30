import { useState } from 'react'
import './App.css'

let nextId = 0;  // TODO: temporary code; remove after back-end using

function App() {
  const [tasks, setTasks] = useState<{id: number, name: string, description: string, state: string, link: string}[]>([]);

  function sendCreateTask(ids?: number[]) {
    // TODO: temporary mock
    if (!ids) {
      nextId++;
      return [{ id: nextId, name: `name${nextId}`, description: `description${nextId}`, state: "PENDING", link: `link${nextId}` }]
    }

    // recreate task
    return tasks.filter(task => ids.includes(task.id)).map(task => {
      nextId++;
      return { ...task, id: nextId, state: "PENDING" }
    })
  }

  function sendReadTasks(ids?: number[]) {
    // TODO: temporary mock
    if (!ids) {
      return tasks.map(task => { return {...task, state: "SUCCESS"} })
    }

    return tasks.filter(task => ids.includes(task.id)).map(task => { return {...task, state: "SUCCESS"} })
  }

  function sendUpdateTasks(ids?: number[]) {
    // TODO: temporary mock
    if (!ids) {
      return tasks.map(task => { return {...task, state: "REVOKED"} })
    }

    return tasks.filter(task => ids.includes(task.id)).map(task => { return {...task, state: "REVOKED"} })
  }

  function sendDeleteTasks(ids?: number[]) {
    // TODO: temporary mock
    return ids;
  }


  function createTasks(ids?: number[]) {
    sendCreateTask(ids);
    readTasks();;
  }

  function readTasks() {
    const inputTasks = sendReadTasks();
    setTasks(inputTasks);
  }

  function updateTasks(ids?: number[]) {
    sendUpdateTasks(ids);
    readTasks();
  }

  function deleteTasks(ids?: number[]) {
    sendDeleteTasks(ids);
    readTasks();
  }


  function createTasksOptimized(ids?: number[]) {
    const inputTasks = sendCreateTask(ids);
    setTasks([ ...tasks, ...inputTasks ]);
  }

  function readTasksOptimized(ids?: number[]) {
    const inputTasks = sendReadTasks(ids);
    const inputTasksMap = new Map(inputTasks.map(task => [task.id, task]));
    setTasks(tasks.map(task => inputTasksMap.get(task.id) || task));
  }

  function updateTasksOptimized(ids?: number[]) {
    const inputTasks = sendUpdateTasks(ids);
    const inputTasksMap = new Map(inputTasks.map(task => [task.id, task]));
    setTasks(tasks.map(task => inputTasksMap.get(task.id) || task));
  }

  function deleteTasksOptimized(ids?: number[]) {
    const deletedIds = sendDeleteTasks(ids);
    const deletedIdsSet = new Set(deletedIds);

    setTasks(
      ids? tasks.filter(task => !deletedIdsSet.has(task.id)): []
    );
  }


  const tasksItems = Object.values(tasks)
  .sort((a, b) => a.id - b.id)
  .map((task) => (
    <tr>
      <td>{task.id}</td>
      <td>{task.name}</td>
      <td>{task.description}</td>
      <td>{task.state}</td>
      <td>{task.link}</td>
      <td>
        <button type="button" className="btn btn-primary mr-1" onClick={() => createTasksOptimized([task.id])}>recreate task</button>
        <button type="button" className="btn btn-primary mr-1" onClick={() => readTasksOptimized([task.id])}>update task info</button>
        <button type="button" className="btn btn-warning mr-1" onClick={() => updateTasksOptimized([task.id])}>stop task</button>
        <button type="button" className="btn btn-danger mr-1" onClick={() => deleteTasksOptimized([task.id])}>delete task</button>
      </td>
    </tr>
  ))

  return (
    <>
      <button type="button" className="btn btn-primary mr-1" onClick={() => createTasksOptimized()}>create task</button>
      <button type="button" className="btn btn-primary mr-1" onClick={() => readTasksOptimized()}>update tasks info</button>
      <button type="button" className="btn btn-warning mr-1" onClick={() => updateTasksOptimized()}>stop tasks</button>
      <button type="button" className="btn btn-danger mr-1" onClick={() => deleteTasksOptimized()}>delete tasks</button>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>description</th>
            <th>state</th>
            <th>link</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems}
        </tbody>
      </table>
    </>
  )
}

export default App
