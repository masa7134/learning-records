import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  // useStateを使ってstateに変換,初期値は配列
  const [nums, setNums] = useState(numArray);

  const shuffle = () => {
    // まずnumsを新しい配列に変換し作成、※const newNums = nums ;とすると新し配列は作成されていないので動かない
    const newNums = [...nums ];
    // 配列の末尾の５をvalueに格納
    const value = newNums.pop();
    // valueに格納されている値を配列の先頭二追加
    newNums.unshift(value);
    // newNumsでnumsを上書き
    setNums(newNums);
    // console.log(newNums);
  }
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
