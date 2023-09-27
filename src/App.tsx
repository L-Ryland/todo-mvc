import React, { useMemo, useState } from "react";
// import ReactLogo from "./assets/react.svg";
import "./App.css";
import { Header, TodoItem } from "@components/";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "@utils/queryClient";
import { NewTodo } from "@/components";
import { useTodoStore } from "./store";
import { cx } from "@emotion/css";

function App() {
  const [mode, setMode] = useState<"all" | "active" | "completed">("all");
  const { todos, removeCompleted } = useTodoStore();
  const completeTodos = todos.filter((todo) => todo.completed);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const todosToDisplay = useMemo(() => {
    if (mode === "all") {
      return todos;
    } else if (mode === "active") {
      return activeTodos;
    } else if (mode === "completed") {
      return completeTodos;
    } else {
      return [];
    }
  }, [mode, todos]);
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-5xl">todos</h1>
      <div className="border w-[500px] m-auto">
        <NewTodo />
        {todosToDisplay.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
        <div className="flex justify-between p-4 items-center border-t">
          <span>{activeTodos.length} items left</span>
          <div className="flex text-sm">
            <button
              className={cx([
                "border p-1",
                { "border-red-500": mode === "all" },
              ])}
              onClick={() => setMode("all")}
            >
              All
            </button>
            <button
              className={cx([
                "border p-1",
                { "border-red-500": mode === "active" },
              ])}
              onClick={() => setMode("active")}
            >
              Active
            </button>
            <button
              className={cx([
                "border p-1",
                { "border-red-500": mode === "completed" },
              ])}
              onClick={() => setMode("completed")}
            >
              Completed
            </button>
          </div>
          <span
            className={cx([
              "hover:underline text-sm cursor-pointer",
              { invisible: completeTodos.length === todos.length },
            ])}
            onClick={removeCompleted}
          >
            Clear Completed
          </span>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
