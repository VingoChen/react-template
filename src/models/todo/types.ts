import { ITodoItem } from '@/service/todo/types';
// Action Type
export enum TodoActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  GET_TODOLIST = 'GET_TODOLIST',
}

// State
export interface ITodoState {
  count: number;
  list: ITodoItem[];
}

// Action
export interface IIncrementAction {
  type: typeof TodoActionTypes.INCREMENT;
}

export interface IDecrementAction {
  type: typeof TodoActionTypes.DECREMENT;
}

export interface IQueryTodoAction {
  type: typeof TodoActionTypes.GET_TODOLIST;
  payload: {
    list: ITodoItem[];
  };
}

export type TodoAction = IIncrementAction | IDecrementAction | IQueryTodoAction;
