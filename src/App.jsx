import { useCallback } from "react";
import { useState } from "react";


const App = () => {

  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([])
  const [complete, setComplete] = useState({})


  const createTask = () => {
    let list = text.charAt(0).toUpperCase()+text.slice(1).toLowerCase()
    if (list) {
      setTasks([list, ...tasks])
      setText("")
    }
  }

  const clearTask = () => {
    if (tasks.length > 0) {
      setTasks([])
    } else {
      alert("You have no tasks at the moment.")
    }
  }


  const taskDelete = (item) => {
    setTasks(tasks.filter((_, index) => index !== item))
  }

  const taskChange = (list, index) => {
    if (text == "") {
      taskDelete(index)
      setText(list)
      console.log("edit")
    } else {
      alert("First clean the input box")
    }
  }

  const taskDone = (index) => {
    setComplete((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };



  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-500 vir-purple-600 to-green-700 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Todo App</h1>

      <div className="max-w-md mx-auto bg-gray-500/50 text-black p-6 rounded-lg shadow-lg">

        <div className="flex gap-2 mb-4 ">
          <input
            type="text"
            placeholder="Enter task"
            className="flex-grow p-2 bg-white border border-gray-300 rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="bg-amber-600 text-xl font-bold text-white px-4 py-2 rounded hover:bg-amber-700" onClick={createTask}>
            +
          </button>
        </div>

        <ul>
          {tasks.map((list, index) => (
            <li key={index} className="flex items-center justify-between gap-2 bg-gray-100 px-3 py-2 rounded mb-2">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="scale-125 accent-amber-600" onChange={() => { taskDone(index) }}/>
                <p className={`text-gray-800 font-bold ${complete[index]? "line-through  text-red-300" : "no-underline"}`} >{list}</p>
              </div>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:underline cursor-pointer" onClick={() => taskChange(list, index)}>Edit</button>
                <button className="text-red-600 hover:underline cursor-pointer" onClick={() => taskDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition" onClick={clearTask}>
          Clear All Tasks
        </button>
      </div>
    </div>

  )
}


export default App;