import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={()=>{}}>create task</button>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>status</th>
            <th>refresh</th>
          </tr>
        </thead>
        <tbody id="tasks">
        </tbody>
      </table>
    </>
  )
}

export default App
