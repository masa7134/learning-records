import { useEffect, useState, useLayoutEffect } from "react";

// 機能的な観点
// コンポーネントマウント時、更新時のみ呼び出したい。

// 純粋関数の観点
// コンソールへのログ出力
// DOM操作(50行目、関数の外側に影響を及ぼすのでuseEffect内に記述するf)
// サーバーとの通信
// タイマー処理
// ランダムな値の生成

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer/>}
      <button onClick={() => setIsDisp(prev => !prev)}>{isDisp ? '非表示' : '表示'}</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // console.log('init');
    let intervalId = null;

    if(isRunning) {
      // console.log('timer start');

      intervalId = window.setInterval(() => {
        // console.log('interval running');
        setTime(prev => prev + 1);
      }, 1000);
    }
    
    return () => {
      window.clearInterval(intervalId)
      // console.log('end');
    }
  }, [isRunning])
  
  useEffect(() => {
    // // console.log('updated');
    
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key', time);

    return () => {
      // debugger
      // // console.log('updated end');
    }
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key'));
    if(!isNaN(_time)) {
      setTime(_time);
    }
  }, [])

  const toggle = () => {
    setIsRunning(prev => !prev);
  }

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  }

  return (
    <>
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    <div>
      <button onClick={toggle}>{isRunning ? '一時停止' : 'スタート'}</button>
      <button onClick={reset}>リセット</button>
    </div>
    </>
    );
};

export default Example;
