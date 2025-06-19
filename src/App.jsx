import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from "react";
import Header from './components/layout/header';
import Footer from './components/layout/footer';

const App = () => {


  const addData = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000),
      name: name
    }
    setTodoList([...toDoList, newTodo])
  }
  const deleteData = (id) => {
    const newTodo = toDoList.filter(item => item.id !== id)
    setTodoList(newTodo);
  }
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [toDoList, setTodoList] = useState([
  ])

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew
          addData={addData}


        />
        {toDoList.length > 0 ?


          <TodoData
            toDoList={toDoList}
            deleteData={deleteData}
          />
          :
          <div>
            <img className='logo' src={reactLogo} />
          </div>
        }
      </div>
      <Footer />
    </>

  )
}

export default App
