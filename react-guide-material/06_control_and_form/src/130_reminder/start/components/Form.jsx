import { useState } from "react";

const Form = ({createTodo}) => {
    const [enteredTodo, setEnteredTo] = useState("");

    const addTodo = (e) => {
        e.preventDefault();// ブラウザのデフォルト操作、onSubmitの後の自動更新をしないようにする
        const newTodo = {
              id: Math.floor(Math.random() * 1e5),
              content: enteredTodo,
            };

        createTodo(newTodo);

        setEnteredTo("");
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input 
                    type="text" 
                    value={enteredTodo}
                    onChange={(e) => setEnteredTo(e.target.value)}
                />
                <button>追加</button>
            </form>
        </div>
    );
}

export default Form;