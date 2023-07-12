import { memo } from "react";

const Todo = ({ todos }) => {
  console.log("Is it re rendering::::;");
  return (
    <>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.description}</li>;
      })}
    </>
  );
};

export default memo(Todo);
