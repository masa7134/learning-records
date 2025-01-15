import "./Example.css";

const Example = () => {
  return (
    <div>
      <h3>コンソールを確認してください。</h3>
      <label>
        入力値のイベント：
        <input
          type="text"
          // 入力すると出力される
          onChange={() => console.log("onChange検知")}
          // フォーカスが外れると出力
          onBlur={() => console.log("onBlur検知")}
          // フォーカスされると出力
          onFocus={() => console.log("onFocus検知")}
        />
      </label>
      <div>
        <label>
          入力値を取得：
          {/* コールバック関数 */}
          <input type="text" onChange={(e) => console.log(e.target.value)} />
        </label>
      </div>
      <div
        className="hover-event"
        onMouseEnter={() => console.log("カーソルが入ってきました。")}
        onMouseLeave={() => console.log("カーソルが出ていきました。")}
      >
        ホバーしてね！
      </div>
    </div>
  );
};

export default Example;
