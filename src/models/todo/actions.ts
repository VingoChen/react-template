import { Dispatch } from 'redux';
import { TodoApi } from '@/service';
import { RootState } from '../index';
import { IQueryTodoAction, IIncrementAction, IDecrementAction, TodoActionTypes } from './types';

export namespace TodoActions {
  export const increment = (): IIncrementAction => ({
    type: TodoActionTypes.INCREMENT,
  });

  export const decrement = (): IDecrementAction => ({
    type: TodoActionTypes.DECREMENT,
  });

  export const queryTodoList = () => (
    dispatch: Dispatch<IQueryTodoAction>,
    getState: () => RootState,
  ) => {
    TodoApi.getTodoList()
      .then((res) => {
        dispatch({
          type: TodoActionTypes.GET_TODOLIST,
          payload: {
            list: res,
          },
        });
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
