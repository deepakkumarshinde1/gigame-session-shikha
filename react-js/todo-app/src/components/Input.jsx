import { useEffect, useState } from "react";

function Input(props) {
  let { label, type = "text", inputData, handelInput } = props;
  let [state, setState] = useState();

  // mounting
  useEffect(() => {
    console.log("Input Component Did Mount");
  }, []); // only once

  // updating
  useEffect(() => {
    console.log("TodoList Component Did Update");
  }, [state]);

  useEffect(() => {
    // unmounting
    return () => {
      console.log("TodoList Component Will Unmount");
    }; // only once
  }, []);

  return (
    <>
      <section>
        <label htmlFor="">{label}</label>
        <input
          type={type}
          className=""
          placeholder={label}
          name="username"
          value={inputData}
          onChange={handelInput}
        />
      </section>
    </>
  );
}

export default Input;
