import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';

const App = () => {
  const tenn = "helo";
  const a = 25;
  const data = {
    address: "hoa hai",
    country: "Viet Nam"
  }

  const addData = () => {
    return alert("help me")
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew
        addData={addData}
      />
      <TodoData
        name={tenn}
        age={a}
        country={data}
      />
      <div>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
