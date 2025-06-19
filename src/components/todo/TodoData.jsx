const TodoData = (props) => {
    const { toDoList, deleteData } = props;
    console.log(toDoList)

    const handlClick = (id) => {
        deleteData(id)
    }
    return (
        <div className='todo-data'>
            {toDoList.map((item, index) => {
                console.log(item, index)
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button onClick={() => { handlClick(item.id) }}>Delete</button>
                    </div>)
            })}

        </div>
    )
}
export default TodoData;