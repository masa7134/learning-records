import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
// count を直接参照している。しかし、状態が非同期で更新されるため、次の状態を計算する際に前回の状態が反映されない場合があります。
  const countUp = () => setCount(count + 1);

  const countDown = () => setCount(count - 1);

  return (
    <>
      <h3>練習問題</h3>
      <p>現在のカウント数: { count }</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

// まとめ
// 	•	あなたのコードでも動作はしますが、count の状態が非同期で更新されるため、複数回の状態更新を行う場合に不具合が生じる可能性があります。
// 	•	回答のコードは、状態更新を関数で処理することで、常に最新の状態を基に次の状態を計算するため、安定して動作します。特に、状態更新が複数回行われる場合に有効です。

// つまり、setCount(state => state + 1) の形式がより安全で安定した実装方法です。