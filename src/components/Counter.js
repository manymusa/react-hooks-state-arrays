import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState({ x: 0 });
  
    function handleClick() {
      // increment the count
      // set state with the new count value
      setCount({x: count.x+1});
    }
  
    return <button onClick={handleClick}>{count.x}</button>;
  }

  export default Counter