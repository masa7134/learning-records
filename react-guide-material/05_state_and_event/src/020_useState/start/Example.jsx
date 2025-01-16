import { useState } from "react";

const Example = () => {
  // useStateの引数には初期値をわたす。今回は初期が空欄なので空だけど例えば「０」など
  // useStateが返す値は配列。その配列の0番が【参照用の値】、1番が【変更用の関数】
  // 配列を使いやすくするための分割代入が下記のとおり
  let [val, setVal] = useState("hello");
  return (
    <>
      <input
      type="text"
      // onChangeによって実行されるのはコールバック関数の中身だけで、}/> = {val}の部分は実行されない
      onChange={(e) => {
        // const setFn = valArry[1];
        setVal(e.target.value)
        // }/> = {val}を実行するにはExample = () => {を実行しなくてはならない
      }}/> = {val}
    </>
  );
};

export default Example;
