import { useTodoStore } from "@/store";
import { KeyboardEventHandler, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
export const NewTodo = () => {
  const [inputText, setInputText] = useState<string>("");
  const { addTodo, completeAllTodos } = useTodoStore();
  const handleCommit: KeyboardEventHandler = (event) => {
    if (event.code === "Enter" && inputText) {
      addTodo(inputText);
      setInputText("");
    }
  }
  return (
    <div className="relative border-b">
      <input
        className="border-none outline-none w-full pl-8"
        style={{ boxShadow: "none" }}
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        onKeyUp={handleCommit}
      />
      <AiOutlineCheck className="absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer" onClick={completeAllTodos} />
    </div>
  );
};
