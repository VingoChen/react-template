import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/models';
import { useActions } from '@/hooks';
import { TodoActions } from '@/models/todo/actions';

const Todo: React.FC = () => {
  const dispatch = useDispatch();
  const todoActions = useActions<typeof TodoActions>(dispatch, TodoActions);
  const { count, list } = useSelector((state: RootState) => state.todo);

  return (
    <div>
      <button type='button' onClick={todoActions.increment}>
        +
      </button>
      <button type='button' onClick={todoActions.decrement}>
        -
      </button>
      <button
        type='button'
        onClick={() => {
          todoActions.queryTodoList();
        }}
      >
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
