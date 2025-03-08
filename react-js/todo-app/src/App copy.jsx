import { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  let [inputData, setInputData] = useState("");
  let [preserveForEdit, setPreserveForEdit] = useState(true);

  let handelInput = (event) => {
    let { name, value } = event.target;
    // console.log(name, value);
    setInputData(value);
  };
  let [todoList, setTodoList] = useState([]);

  let saveNewTodo = function () {
    if (inputData.trim().length !== 0) {
      let _todoList = [...todoList]; // deep copy ( new array )
      _todoList.push({
        name: inputData,
        isEditable: preserveForEdit,
      });
      setTodoList(_todoList);
      setInputData("");
      setPreserveForEdit(true);
    }
  };

  let handelCheckInput = (event) => {
    setPreserveForEdit(event.target.checked);
  };
  return (
    <>
      <h1>Todo App</h1>
      <Input
        label="User 1st Name"
        inputData={inputData}
        handelInput={handelInput}
      />
      <section>
        <input
          type="checkbox"
          id="makeEditable"
          value=""
          checked={preserveForEdit}
          onChange={handelCheckInput}
        />
        <label htmlFor="makeEditable">Enable Edit</label>
      </section>
      <button onClick={saveNewTodo}>Save</button>
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;

// JSX =>
/**
 * #1 => it must have only one parent
 * #2 => class attribute => className
 * #3 => for attribute => htmlFor
 * #4 => all elements must be enclosed
 * #5 => write javascript in jsx we use {}
 */

// Props => Are use to send a data form parent to child
// props are available as  a parameter in function component

// state => is an object use to handel a data in and component
// when event state in updated , component will re-render

// Hooks => function in react
// to perform a complex task
// they start with a world called as "use"
// mostly we use them in component only
// Hooks have a support to only a functional components

// Array*
// Conditional Rendering
// React Lifecycle
