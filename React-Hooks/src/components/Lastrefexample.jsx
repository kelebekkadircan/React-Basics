import { useState } from "react"
import Todo from "./Todo"
function Lastrefexample() {

    const [showTodo, setShowTodo] = useState(true)

    return <>
        {showTodo && <Todo />}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowTodo(!showTodo)}>Tıkla</button>

    </>
}

export default Lastrefexample