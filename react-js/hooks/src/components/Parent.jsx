import Child from "./Child";
import { useCallback, useEffect, useMemo, useState } from "react";

function Parent() {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);

  let result = useMemo(() => {
    return count % 8 === 0 ? "Yes" : null;
  }, [count]);

  let moreLogic = useCallback(() => {
    if (result === "Yes") {
      console.log("yes");
    } else {
      console.log("No");
    }
  }, [result]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INC Count</button>
      <Child result={result} moreLogic={moreLogic} />
    </>
  );
}

export default Parent;
