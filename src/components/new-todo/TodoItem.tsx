import { Todo, useTodoStore } from "@/store";
import { FiCircle, FiCheckCircle } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { FC, KeyboardEventHandler, useState } from "react";
import { cx } from "@emotion/css";
import { TextInput } from "flowbite-react";

export const TodoItem: FC<Todo> = ({ title, id, completed }) => {
  const [todoText, setTodoText] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const { removeTodo, updateTodo } = useTodoStore();

  const onTodoTextChange: KeyboardEventHandler = (event) => {
    if (event.code === "Enter") {
      if (todoText) {
        updateTodo({ id, title: todoText });
      }
      setIsEditing(false);
    }
  };

  const toggleCompleteState = () => {
    updateTodo({ id, completed: !completed });
  };

  return (
    <div className="group text-left flex p-4 justify-between items-center w-full">
      <div className="flex gap-4 grow items-center">
        {completed ? (
          <FiCheckCircle
            className="text-2xl text-green-500"
            onClick={toggleCompleteState}
          />
        ) : (
          <FiCircle
            className="text-2xl text-gray-300"
            onClick={toggleCompleteState}
          />
        )}
        {isEditing ? (
          <TextInput
            className="grow"
            value={todoText}
            onChange={(event) => setTodoText(event.currentTarget.value)}
            onKeyDown={onTodoTextChange}
          />
        ) : (
          <span
            className={cx(["grow", { "line-through": completed }])}
            onDoubleClick={() => setIsEditing(true)}
          >
            {title}
          </span>
        )}
      </div>
      <TfiClose
        className="text-2xl ml-4 text-red-500 hidden group-hover:block cursor-pointer"
        onClick={() => removeTodo(id)}
      />
    </div>
  );
};
