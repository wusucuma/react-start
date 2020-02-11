import React, { useState } from 'react';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList'

let id = 0;

function App() {

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleCreate = () => {
    setTodos(todos.concat({
      id: id++,
      text: value,
      checked: false
    }))
    setValue('')
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleCreate();
    }
  }

  const handleToggle = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    setTodos(nextTodos)
  }

  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  return (
    <TodoListTemplate 
        form={
            <Form 
              value={value}
              onChange={handleChange}
              onCreate={handleCreate}
              onKeyPress={handleKeyPress}
            />
        }
    >
      <TodoItemList todos={todos} onToggle = {handleToggle} onRemove = {handleRemove} />
    </TodoListTemplate>
  );
}

export default App;
