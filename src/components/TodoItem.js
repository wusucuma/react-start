import React from 'react';
import './TodoItem.css'

const TodoItem = (props) => {
  const { text, checked, id, onToggle, onRemove } = props;

  return (
    <div className="todo-item" onClick={(e) => onToggle(id)}>
      <div className="remove"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(id)
            }}
      >
        &times;
      </div>
      <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
    </div>
  );
};

export default TodoItem;