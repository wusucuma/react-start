import React from 'react';
import TodoItem from './TodoItem'

const TodoItemList = (props) => {
  const { todos, onToggle, onRemove } = props;

  return (
    <div>
      <div>
        <TodoItem text="안녕"/>
        <TodoItem text="리액트"/>
        <TodoItem text="반가워"/>        
      </div>
    </div>
  );
};

export default TodoItemList;