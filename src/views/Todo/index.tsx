import React from 'react';
import { useTodoStore } from '@/models/todo';

const Todo: React.FC = () => {
  const { count, list, increase, decreaseByNum, getTodoList } = useTodoStore();
  return (
    <div>
      <button type='button' onClick={increase}>
        +
      </button>
      <button
        type='button'
        onClick={() => {
          decreaseByNum(1);
        }}
      >
        -
      </button>
      <button type='button' onClick={getTodoList}>
        fetch list
      </button>
      <div>count:{count}</div>
      <div>list:</div>
      {list.map((item) => (
        <div key={item.age}>age:{item.age}</div>
      ))}
    </div>
  );
};

export default Todo;
