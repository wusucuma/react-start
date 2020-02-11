import React from 'react';
import TodoItem from './TodoItem'

const TodoItemList = (props) => {
  const { todos, onToggle, onRemove } = props;

  const createTodoItem = () => {
    return todos.map(todo => {
      return (
        <TodoItem 
          {...todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
      );
    });
  }

  return (
    <div>
      <div>
        {
          createTodoItem()
        }
      </div>
    </div>
  );
};

export default TodoItemList;