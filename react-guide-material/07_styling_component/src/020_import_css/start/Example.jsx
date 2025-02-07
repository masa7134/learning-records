import { useState } from "react";

import SubButton from "./components/SubButton";
import "./Example.css";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);



  return (
    <>
      <button className={ `btn ${isSelected ? "btn selected" : ""}` } onClick={clickHandler}>
        ボタン
      </button>
      <SubButton />
      <div>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
