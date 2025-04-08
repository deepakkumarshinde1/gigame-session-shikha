import { use, useEffect, useLayoutEffect, useRef, useState } from "react";

function App() {
  let [state, setValue] = useState(); //[value, setValue]
  let [text, setText] = useState("Hello");
  let login = {
    username: useRef(null),
    password: useRef(null),
  };
  useEffect(() => {
    console.log("useEffect");
  }, []);

  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect");
  // }, []);

  let getInputData = () => {
    let { username, password } = login;
    let userNameText = username.current.value;
    let passwordText = password.current.value;

    if (userNameText === "") {
      console.log("first");
      username.current.style.backgroundColor = "red";
      username.current.focus();
    } else {
      username.current.style.backgroundColor = "white";
      password.current.focus();
    }
  };
  return (
    <div>
      <input type="text" ref={login.username} />
      <input type="text" ref={login.password} />
      <button onClick={getInputData}>CLICK</button>
      <h1>My first React app!</h1>
      <p>Welcome :)</p>
    </div>
  );
}

export default App;
