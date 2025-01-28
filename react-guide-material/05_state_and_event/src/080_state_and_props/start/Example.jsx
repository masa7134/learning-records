import { useState } from "react";

// 親コンポーネント
const Example = () => {
  const [ toggle, setToggle ] = useState(true);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const toggleComponent = () => {
    setToggle(prev => !prev);
  }
  return (
    <>
    <button onClick={toggleComponent}>toggle</button>
    
     {/* // プロップス（コンポーネント間でやり取りされるデータ） */}
     {toggle 
     ? <Count key="A" title="A" count={countA} setCount={setCountA}/>
     : <Count key="B" title="B" count={countB} setCount={setCountB}/>}
    </>
  )
}
// 子コンポーネント部分　、 引数でpropsを受け取る
const Count = ({ title, count, setCount }) => {
  // const [count, setCount] = useState(0);  1,このuseStateを親コンポーネントに移動
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
