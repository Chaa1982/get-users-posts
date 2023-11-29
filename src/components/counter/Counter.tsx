import React, { useState } from "react";
import "./counter.css";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [hideFlag, setHideFlag] = useState<boolean>(true);

  const handleClickCount = (flag: boolean) => {
    setCount(flag ? count+1 : count-1);
  }

  return (
    <div className="main-wrap-counter">
      <button className="hide" onClick={() => setHideFlag(!hideFlag)}>{hideFlag ? 'Hide' : 'Show'}</button>

      {hideFlag && <div className="hide-wrap">
        <div className="screen">{count}</div>

        <div className="btn-wrap">
          {count < 10 && <button className="increment" onClick={() => handleClickCount(true)}>+</button>}
          {count > -10 && <button className="decrement" onClick={() => handleClickCount(false)}>-</button>}
        </div>
      </div>}
    </div>
  );
};
