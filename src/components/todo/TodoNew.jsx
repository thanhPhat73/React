import { useState } from "react";

const TodoNew = (props) => {
    // vì props là object nên có thể . để call nó
    // có thể destrucing

    const [valueInput, setValueInput] = useState()



    const { addData } = props;

    const handlClick = () => {
        addData(valueInput)
        setValueInput("")
    }

    const handlOnChangs = (name) => {
        setValueInput(name)
    }
    return (
        <div className="todo-new">
            <input value={valueInput}
                type="text" placeholder="Enter your task" onChange={(event) => { handlOnChangs(event.target.value) }} />
            <button onClick={handlClick}>Add</button>
        </div>
    )
}
export default TodoNew;