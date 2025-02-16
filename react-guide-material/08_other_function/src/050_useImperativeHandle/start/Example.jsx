import { use } from "react";
import { useRef, forwardRef, useImperativeHandle } from "react";

// useImperativeHandle（子コンポーネントで使用）
const Input = forwardRef((props, ref) => {
  
  // 親コンポーネントからわたってきたrefと別のref（下記のinputRef）を用意する
  const inputRef = useRef();

  // 第一引数にref,第二引数に使用したいメソッドを含むオブジェクトを返す関数を記述
  useImperativeHandle(ref, () => ({
    // 親コンポーネントからわたってきたrefが下記の関数だけ行えるよう制限できる
    myFocus() {
      inputRef.current.focus();
      console.log('フォーカス取得')  
    }
  }))

  return <input type="text" ref={inputRef} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.myFocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
