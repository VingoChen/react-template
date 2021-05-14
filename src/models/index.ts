import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { todoReducer } from './todo/reducer';

const rootReducer = combineReducers({ todo: todoReducer });

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(middlewareEnhancer)
    : middlewareEnhancer,
);

export type RootState = ReturnType<typeof store.getState>;
