const TodoNew = (props) => {
    // vì props là object nên có thể . để call nó
    // có thể destrucing
    console.log("props", props)
    const { addData } = props;
    addData()
    //props.addData()
    return (
        <div className="todo-new">
            <input type="text" placeholder="Enter your task" />
            <button>Add</button>
        </div>
    )
}
export default TodoNew;