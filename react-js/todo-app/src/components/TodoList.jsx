// function TodoList({ todoList }) {
//   return (
//     <>
//       <ul>
//         {todoList.map((todo, index) => {
//           return <li key={index}>{todo.name}</li>;
//         })}
//       </ul>
//     </>
//   );
// }

import { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  // mounting
  componentDidMount() {
    console.log("TodoList Component Did Mount");
  } // only once

  // updating
  componentDidUpdate() {
    console.log("TodoList Component Did Update");
  }

  // unmounting
  componentWillUnmount() {
    console.log("TodoList Component Will Unmount");
  } // only once

  render() {
    return (
      <>
        <ul>
          {this.props.todoList.map((todo, index) => {
            return (
              <li
                key={index}
                style={{
                  backgroundColor: todo.isEditable ? "yellow" : "white",
                }}
              >
                {todo.name} {todo.isEditable ? <button>Edit</button> : null}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default TodoList;

// Call api
// Clean Some Data
// Updating in in data you want to trigger some logic

// Mounting
// Updating
// Unmounting
