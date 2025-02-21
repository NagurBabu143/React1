import React from "react";
import { useState } from "react";
function Function() {
  let [val, setval] = useState(4);
  function valadd() {
    setval(val + 1);
  }
  function valdelete() {
    setval(val - 1);
  }
  return (
    <div>
      <button onClick={valdelete}>-</button>
      <span>{val}</span>
      <button onClick={valadd}>+</button>
      {val > 4 ? (
        <p>Number is equal or greater Than 5</p>
      ) : (
        <p>Number is smaller than 5</p>
      )}
    </div>
  );
}
export default Function