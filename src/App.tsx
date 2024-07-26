import { useState } from 'react'
import './App.css'

let nextId = 0;  // TODO: temporary code; remove after back-end using

function App() {
  const [tasks, setTasks] = useState<{id: number}[]>([]);

  function createClick() {
    setTasks(
      [
        ...tasks,
        { id: nextId++ }
      ]
    );
  }

  function refreshClick() {
  }

  function stopClick() {
  }

  function removeClick() {
  }

  const tasksItems = Object.values(tasks)
  .map((task) => (
    <tr>
      <td>{task.id}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={refreshClick}>refresh</button>
        <button type="button" className="btn btn-primary" onClick={stopClick}>stop</button>
        <button type="button" className="btn btn-primary" onClick={removeClick}>remove</button>
      </td>
    </tr>
  ))

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={createClick}>create task</button>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
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
