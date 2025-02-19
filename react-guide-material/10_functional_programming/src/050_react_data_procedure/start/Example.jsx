import { useState } from "react";


// stateは状態管理と処理を分離している
const Example = () => { // 関数コンポーネントはJSXを作成する場所
  const [ state, setState ] = useState(0);
  const increment = () => {
    setState(state + 1);
  }
  // window.alert('hello') 関数外に影響を及ぼす記述なので不可,副作用
  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{state}</h3>
    </>
  );
};

export default Example;
