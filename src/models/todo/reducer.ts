import { TodoActionTypes, ITodoState, TodoAction } from './types';

const initalState: ITodoState = {
  count: 0,
  list: [],
};

export function todoReducer(state = initalState, action: TodoAction) {
  switch (action.type) {
    case TodoActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case TodoActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case TodoActionTypes.GET_TODOLIST:
      return { ...state, list: action.payload.list };
    default:
      return state;
  }
}
