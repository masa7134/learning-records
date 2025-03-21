import { useState } from "react";
import { useReducer } from "react";

// useReducerはuseStateの書き換えに使用
const Example = () => {
const [state, setState] = useState(0);
const [rstate, dispatch] = useReducer((prev, {type, step}) => { // prevはstateの値が入り、typeは２８行目と３２行目の＋かーが入りstepも同様・・・
  switch(type) {
    case '+':
      return prev + step;
    case '-':
      return prev - step;
    default:
      throw new Error('不明なactionです。');
  } 
  // if (action === '+') {
  //   return ++prev;
  // } else if (action === '-') {
  //   return --prev;
  // }
}, 0)

const countUp = () => {
  setState(prev => ++prev);
}

const rcountUp = () => {
  dispatch({type: '+', step: 2});
}

const rcountDown = () => {
  dispatch({type: '-', step: 3});
}
  
  return (
    <>
      <div>
        <h3>{ state }</h3>
        <button onClick={ countUp }>+</button>
      </div>
      <div>
        <h3>{ rstate }</h3>
        <button onClick={ rcountUp }>+</button>
        <button onClick={ rcountDown }>-</button>
      </div>
    </>
  );
};

export default Example;
