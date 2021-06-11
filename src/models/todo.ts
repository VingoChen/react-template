import create from 'zustand';
import { ITodoItem } from '@/service/todo/types';
import { TodoApi } from '@/service';

type TodoState = {
  count: number;
  list: ITodoItem[];
  increase(): void;
  decreaseByNum(num: number): void;
  getTodoList(): Promise<void>;
};

export const useTodoStore = create<TodoState>((set) => ({
  count: 0,
  list: [],
  increase: () => set((state) => ({ count: state.count + 1 })),
  decreaseByNum: (num) => set((state) => ({ count: state.count - num })),
  getTodoList: async () => {
    const res = await TodoApi.getTodoList();
    set({ list: res });
  },
}));
