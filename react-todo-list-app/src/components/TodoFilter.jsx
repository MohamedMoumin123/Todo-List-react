import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoFilter = () => {
  const { setFilter } = useContext(TodoContext);

  return (
    <div className="todo-filters">
      <button className="filter-button" onClick={() => setFilter('all')}>
        All
      </button>
      <button className="filter-button" onClick={() => setFilter('active')}>
        Active
      </button>
      <button className="filter-button" onClick={() => setFilter('completed')}>
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;