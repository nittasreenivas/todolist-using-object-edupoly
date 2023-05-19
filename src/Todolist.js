import { useState } from "react";
import Todo from "./Todo";
export default function Todolist() {
  const [todos, setTodos] = useState([
    { title: "clear junk", status: false },
    { title: "purchase fruits", status: true },
    { title: "pens stand", status: true },
    { title: "eat biryani", status: false }
  ]);
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (e) => {
    setNewTodo({ ...newTodo, title: e.target.value, status: false });
    // console.log(e.target.value)
  };
  const handleAdd = () => {
    setTodos([...todos, newTodo]);
  };
  const handleDelete = (i) => {
    alert(i);
    let temp = [...todos];
    temp.splice(i, 1);
    setTodos([...temp]);
  };
  const handleDone = (i) => {
    // alert(i)
    let temp = [...todos];
    temp[i].status = true;
    setTodos([...temp]);
  };
  const handleUndo = (i) => {
    // alert(i)
    let temp = [...todos];
    temp[i].status = false;
    setTodos([...temp]);
  };
  return (
    <div>
      <input type="text" placeholder="enter todo" onChange={handleChange} />
      <button onClick={handleAdd}>add</button>
      <div>
        {todos.map((t, i) => {
          return (
            <div key={i} className={t.status === true ? "a" : "b"}>
              <Todo
                handleUndo={handleUndo}
                handleDone={handleDone}
                i={i}
                t={t}
                handleDelete={handleDelete}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
