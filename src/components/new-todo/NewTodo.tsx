import { useTodoStore } from "@/store";
import { KeyboardEventHandler, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { TextInput } from "flowbite-react";

export const NewTodo = () => {
  const [inputText, setInputText] = useState<string>("");
  const { addTodo, completeAllTodos } = useTodoStore();
  const handleCommit: KeyboardEventHandler = (event) => {
    if (event.code === "Enter" && inputText) {
      addTodo(inputText);
      setInputText("");
    }
  };
  return (
    <div className="relative border-b">
      <TextInput
        addon={
          <AiOutlineCheck
            className="cursor-pointer"
            onClick={completeAllTodos}
          />
        }
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        placeholder="What needs to be done?"
      />
    </div>
  );
};
