import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './model';

function App() {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent<Element>)=>{

     e.preventDefault();
     if (todo) {
      setTodos([...todos, {id:Date.now(), todo:todo,isDone:false}]) 
      setTodo("");
     }
     
  }
  return (
    <div className="App">
      <span className="heading">TaskList</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {/* <TodoList/> */}
    </div>
  );
}

export default App;
