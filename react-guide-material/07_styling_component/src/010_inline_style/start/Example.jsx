import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);

    const style = { // ボタンのスタイル
        width: 120,
        height: 60,
        display: "block", // ""を忘れずに！
        fontWeight: "bold", // font-weightのようなハイフンスタイルではないので注意
        "border-radius": 9999, // ハイフンスタイルで書きたいときは""で囲う
        cursor: "pointer",
        border: "none",
        margin: "auto",
        background: isSelected ? "pink" : "",
    }

    return (
        <>
            <button onClick={clickHandler} style={style}>ボタン</button>
            {/* メッセージのスタイルは直接書き込み */}
            {/* 二重波括弧使用　{{}} 外側：jsx, 内側：オブジェクト */}
            <div style={{ textAlign:"   "}}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
