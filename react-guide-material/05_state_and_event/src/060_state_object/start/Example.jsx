import { useState } from "react";
// POINT プリミティブ型：1, "str", bool, 10n, Symbol(), null, undefined
// POINT オブジェクト型：{}, []などのプリミティブ型以外
// POINT オブジェクト型のstateを変更する場合には必ず新しいオブジェクトを作成する！

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    person.name = '';
      console.log({ ...person } === person);
      console.log({ ...person, name: e.target.value });//　こちらは入力されて表示される内容と同じになる
    // setPersonはオブジェクトで渡す必要がある。名前だけでnullで上書きされて空欄表示になってしまう
  //   setPerson({name: e.target.value, age: person.age})
  // };

  // 下記のようにスプレッド演算子をしようすると、すべてのプロパティを記述しなくても、すべて上書きされて新しいオブジェクトが生成したことになる
  //　セットパーソンにわたすオブジェクトは８行目のpersonのオブジェクトと必ず違うオブジェクトでなくてはならない
      setPerson({ ...person, name: e.target.value })
  }


  // eはイベントハンドラーのこと。イベントハンドラーはイベントに対する関数のこと
  const changeAge = (e) => {
  //event.targetとはイベントが発生した要素そのもの、.valueとはその要素の現在の値（ユーザーが入力したテキストや選択した値など）
    setPerson({name: person.name, age: e.target.value})
  };
  const reset = (e) => {
    setPerson({name: "", age: ""});
  };
  return(
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  )
};

export default Example;
