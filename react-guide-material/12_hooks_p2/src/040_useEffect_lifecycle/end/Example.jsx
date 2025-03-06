// POINT useEffectの実行タイミング

import { useState, useEffect } from "react";

const Example = () => {
  const [state, setState] = useState(0);

  useEffect(
    function update() {
      console.log("update");

      return function cleanUp() {
        console.log("update cleanup");
      };
    },
    [state]// 依存配列の値が元と同じならなにも実行されず、元の値と違うときはクリーンナップ→コールバックの順に実行される。
  );

  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("mount cleanup");
    };
  }, []);// 依存配列が空のときはUpdatedによるコールバック関数とクリーンナップ関数は実行されず、コンポーネントがアンマウント（消滅）したときにクリーンナップ関数が実行される。

  console.log("render");// まず最初に実行
  
  return (
    <>
      <button onClick={() => setState((prev) => prev + 1)}>更新</button>
      <h3>他のレクチャーを選ぶとunmountが呼ばれます。</h3>
    </>
  );
};

export default Example;
