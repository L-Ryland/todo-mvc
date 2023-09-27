import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 } from "uuid"

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
interface TodoStore {
  todos: Todo[];
  addTodo(title: string): void;
  removeTodo(id: string): void;
  updateTodo(todo: Partial<Todo>): void;
  completeTodo(title: string): void;
  removeCompleted(): void;
  completeAllTodos(): void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [] as Todo[],
      addTodo(title: string) {
        const todos = get().todos;
        todos.push({ id: v4(), title, completed: false });
        set({ todos });
      },
      removeTodo: (id: string) => {
        const todos = get().todos.filter((todo) => todo.id !== id);
        set({ todos });
      },
      updateTodo: (todoData: Partial<Todo>) => {
        const todos = get().todos;
        const index = todos.findIndex((todo) => todo.id === todoData.id);
        todos[index] = { ...todos[index], ...todoData };
        set({ todos });
      },
      completeTodo: (id: string) => {
        const todos = get().todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });
        set({ todos });
      },
      removeCompleted: () => {
        const todos = get().todos.filter((todo) => !todo.completed);
        set({ todos });
      },
      completeAllTodos: () => {
        const todos = get().todos.map((todo) => {
          return { ...todo, completed: true };
        });
        set({ todos });
      }
    }),
    {
      name: "todo-storage", // name of item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default the 'localStorage' is used
    }
  )
);
