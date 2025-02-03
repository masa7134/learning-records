import { useState } from "react";

const Example = () => {
  const [val, setValue] = useState();
  const clearVal = () => setValue("");
  
  return (
    <div>
      <label htmlFor="123">ラベル</label>
      <div>
        <input 
          id="123" 
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setValue(e.target.value)}
          />
        <textarea
          id="456" 
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setValue(e.target.value)}
        />
        <h3>{val}</h3>
        <button onClick={clearVal}>クリア</button>
      </div>
    </div>
  );
};

export default Example;
