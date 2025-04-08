import { memo } from "react";
import { addLabel } from "../hoc/AddLabel";

function Child(props) {
  let { result, moreLogic } = props;
  console.log(props);
  // moreLogic();
  return <div>Child {result}</div>;
}

export default memo(addLabel(Child));

// cache component => memo => HOC (Pure Component)
// cache data => useMemo
// cache function => useCallback
