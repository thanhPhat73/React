const TodoData = (props) => {
    console.log('check props', props)
    return (
        <div className='todo-data'>
            <div>Learning  {props.name}</div>
            <div>Learning react</div>
        </div>
    )
}
export default TodoData;