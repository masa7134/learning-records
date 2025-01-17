import { useState } from "react";
// 画面が表示されたときにまず関数コンポーネント実行,そのごuseStateがあれば再実行され、なければ実行されない
const Example = () => {
  let displayVal;
  let [ val, setVal ] = useState();
  console.log('再レンダリングされました');
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          // 以下が入力値が変更されると実行される部分
          console.log(e.target.value);
          // setValは変更用の関数
          setVal(e.target.value);
          displayVal = e.target.value;
        }}
      />
      = {val}
    </>
  );
};

export default Example;
