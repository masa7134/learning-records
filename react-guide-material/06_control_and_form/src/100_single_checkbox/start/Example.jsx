import { useState } from "react";

const Example = () => {
const [isChecked, setIsChecked] = useState(true);
const toggleCheck = (e) => {
  setIsChecked((prevState) => !prevState);
};
  return (
    <div>
      <label htmlFor="my-check">
        チェック
      </label>
      <input
        type="checkbox" 
        id="my-check"  
        checked={isChecked}
        onChange={(e) => toggleCheck(e)}
      />
      <h3>{ isChecked ? "ON!" : "OFF!" }</h3>
    </div>
  )
};

export default Example;
