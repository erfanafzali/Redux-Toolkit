import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyApple } from "../features/apple/appleReducer";

function AppleContainer() {
  const [value, setValue] = useState(0);
  const state = useSelector((state) => state.apple);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Apple Number : {state.numOfApple}</h2>
      <input
        type="text"
        value={value}
        name="value"
        id="value"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(buyApple(value))}>Buy Apple</button>
    </div>
  );
}

export default AppleContainer;
