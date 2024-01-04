import './todo.css'
import Dop from "./dop"
import {useState} from "react";

const Todolist = () =>{
    const [todolist,setTodolist] = useState('')
    const [dop,setDop] = useState([])
    const handleTodo = (event) =>{
        event.preventDefault()
        if (todolist) {
            setDop([...dop,todolist])
        }
        setTodolist('')
    }
    const handleChange = (event) =>{
        const dopValue = event.target.value
        setTodolist(dopValue)
    }
    return(
        <div>
            <div className="main">
                <h1>T o d o l i s t</h1>
                <div className="secondname">
                    <form onSubmit={handleTodo} >
                        <input
                            type="text"
                            placeholder="Добавь задачу"
                            value={todolist}
                            onChange={handleChange}
                            className="input"
                        />
                        <button type="submit">
                            Добавить
                        </button>
                    </form>
                    <Dop list={dop}/>
                </div>
            </div>
        </div>
    )
}
export default Todolist