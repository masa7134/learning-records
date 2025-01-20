import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  // state => state + 1 のように、関数を渡すことで、setCount は直前の状態（state）を引数として受け取り、それを基に新しい状態を計算して更新
  // Reactが自動的に最新の状態を渡してくれるので、非同期の問題を避けることができます。
  const countUp = () => {
    setCount(state => state + 1);
  };

  const countDown = () => {
    setCount(state => state - 1);
  };
  return (
    <>
      <h3>練習問題</h3>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
