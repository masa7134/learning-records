import { useState } from "react";

const Example = () => {
    const [ count, setCount ] = useState(0);
    // 注意点：下記の計算結果はクリックしたら直ちに反映されるわけではない、レンダリングの指示をするまでにとどまる。再レンダリングされてはじめて結果が表示される。
    const countUp = () => {
        setCount(count + 1);
        // setCount(count + 1); // この時点ではここも（０＋１）が実行されているので、ブラウザ表示は２ではなく１と表示される。
        // 下記のようにprevstateを使用した関数を記述すると、上記の結果が入ってくるので１＋１となる
        setCount(prevstate => {
            return prevstate + 1
        });
        // 変更用関数は値を変更する役割と、関数コンポーネントを再実行する役割の２点、しかしこれらは予約状態になるので即座に実行されない。非同期処理という！
        console.log(count); // クリック直後は０を表示
    }
    const countDown = () => {
        setCount(count - 1);
    }
    return(
        <>
            <p>現在のカウント数: {count}</p>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </>
    );
};

export default Example;
