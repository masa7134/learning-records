import { useReducer, useState } from "react";

// useState:状態の更新の仕方は利用側に託す。→　（結論）簡単なときはこっち
// useReducer:状態の更新の仕方も状態側で担当する。→　（結論）複雑でテストが必要なときはこっち

// 状態と処理の分離
// useState: コンポーネントで更新用の処理を保持 
// useReducer: stateと一緒に更新用の処理を保持

// 純粋性（純粋関数）
// 特定の引数に特定の戻り値
const reducer = (prev, { type, step }) => {
  switch (type) {
    case "+":
      return prev + step;
    case "-":
      return prev - step;
    default:
      throw new Error('不明なactionです。')
  }
}

// 不変性（Immutability）
const Example = () => {
  const [state, setState] = useState(0);// アプリが大きくなると純粋性を保ちにくい
  const [rstate, dispatch] = useReducer(reducer, 0);
  
  const step = 2;// 純粋関数でなくなるポイント　スコープの外の値を参照
  const countUp = () => {// const step = 2;// 純粋関数でなくなるポイント　スコープの外の値を参照
    setState((prev) => {
      return prev + step
    });
  };
  const rcountUp = () => {
    dispatch({ type: "+", step: 2 });
  };
  const rcountDown = () => {
    dispatch({ type: "-", step: 3 });
  };
  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
