import React, { useMemo, useState } from "react";
// import ReactLogo from "./assets/react.svg";
import "./App.css";
import { TodoItem } from "@components/";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "@utils/queryClient";
import { NewTodo } from "@/components";
import { useTodoStore } from "./store";
import { Button, Card, ListGroup } from "flowbite-react";
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

  const activeButtonColor = (val: string) => {
    return val === mode ? "info" : "gray";
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <h1 className="text-5xl w-full">todos</h1>
        <Card className=" w-full lg:w-[700px] my-8 mx-auto">
          <NewTodo />
          <ListGroup>
            {todosToDisplay.map((todo) => (
              <ListGroup.Item key={todo.id}>
                <TodoItem key={todo.id} {...todo} />
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="flex justify-between items-center">
            <span>
              {activeTodos.length}
              <span className="hidden md:inline"> items left</span>
            </span>
            <Button.Group outline>
              <Button
                onClick={() => setMode("all")}
                color={activeButtonColor("all")}
              >
                All
              </Button>
              <Button
                onClick={() => setMode("active")}
                color={activeButtonColor("active")}
              >
                Active
              </Button>
              <Button
                onClick={() => setMode("completed")}
                color={activeButtonColor("completed")}
              >
                Completed
              </Button>
            </Button.Group>
            <span
              className={cx([
                "hover:underline text-sm cursor-pointer underline md:no-underline",
                { invisible: completeTodos.length === todos.length },
              ])}
              onClick={removeCompleted}
            >
              <span className="hidden md:inline">Clear Completed</span>
              <span className="md:hidden">Clear</span>
            </span>
          </div>
        </Card>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
