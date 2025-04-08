import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/counter.slice";

function App() {
  let dispatch = useDispatch();
  let { count } = useSelector((state) => state.counter);
  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={() => dispatch(increment())}>INC</button>
    </>
  );
}

export default App;
