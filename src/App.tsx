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
    ids = ids
  }


  function createTasks(ids?: number[]) {
    const newTasks = sendCreateTask(ids)
    setTasks([ ...tasks, ...newTasks ]);
  }

  function readTasks(ids?: number[]) {
    const newTasks = sendReadTasks(ids)

    setTasks(
      ids? tasks.filter(task => !ids.includes(task.id)).concat(newTasks): newTasks  // TODO: optimize
    )
  }

  // stop task
  function updateTasks(ids?: number[]) {
    const newTasks = sendUpdateTasks(ids)

    setTasks(
      ids? tasks.filter(task => !ids.includes(task.id)).concat(newTasks): newTasks  // TODO: optimize
    )
  }

  function deleteTasks(ids?: number[]) {
    sendDeleteTasks(ids);

    setTasks(
      ids? tasks.filter(task => !ids.includes(task.id)): []  // TODO: optimize
    )
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
        <button type="button" className="btn btn-primary mr-1" onClick={() => createTasks([task.id])}>recreate task</button>
        <button type="button" className="btn btn-primary mr-1" onClick={() => readTasks([task.id])}>update task info</button>
        <button type="button" className="btn btn-warning mr-1" onClick={() => updateTasks([task.id])}>stop task</button>
        <button type="button" className="btn btn-danger mr-1" onClick={() => deleteTasks([task.id])}>delete task</button>
      </td>
    </tr>
  ))

  return (
    <>
      <button type="button" className="btn btn-primary mr-1" onClick={() => createTasks()}>create task</button>
      <button type="button" className="btn btn-primary mr-1" onClick={() => readTasks()}>update tasks info</button>
      <button type="button" className="btn btn-warning mr-1" onClick={() => updateTasks()}>stop tasks</button>
      <button type="button" className="btn btn-danger mr-1" onClick={() => deleteTasks()}>delete tasks</button>
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
