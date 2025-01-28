import {useState} from "react";

const Example = () => {
  const[count, setCount] = useState(0);
  return (
    <>
      {/* <h3>練習問題</h3> */}
      {/* <p>カウントの更新（CountUpdate）と,表示（CountResult）を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。</p> */}
      {/* このコメントアウトを外して利用！ */}
        <CountResult title="カウント" count={count}/>
        <CountUpdate setCount={setCount}/> 
     
    </>
  );
};
const CountResult = ({title,count}) => <h3>{title/* propsのtitleとcountの値を表示 */}:{count}</h3>

const CountUpdate = ({setCount}/* propsを定義 */) => {
  const countUp = () => {
    /* countに1追加 */
    setCount(prev => prev + 1);
  };
  const countDown = () => {
    /* countから1マイナス */ 
    setCount(prev => prev - 1);
  };
  return (
    <>
      {/* <h3>カウント:{CountResult(count)}</h3> */}
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
