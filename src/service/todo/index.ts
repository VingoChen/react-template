// import { request } from 'Src/utils/request';
import { ITodoItem } from './types';

const TodoApi = {
  getTodoList() {
    // return request<ITodoItem[]>({
    //   method: 'GET',
    //   url: 'xxx',
    // });
    return new Promise<ITodoItem[]>((resolve) => {
      setTimeout(() => {
        resolve([{ age: 18, name: 'zhishui' }]);
      }, 3000);
    }).then((res) => res);
  },
};
export default TodoApi;
