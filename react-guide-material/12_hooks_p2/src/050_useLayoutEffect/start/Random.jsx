import { useLayoutEffect, useEffect, useState, useRef } from "react";

const Random = () => {
  const [state, setState] = useState(0);

  // 下記をuseLayoutEffectに変更するとちらつきがなくなる
  useEffect(() => {
    if (state === 0) {
      setState(Math.random() * 300);
    }
  }, [state]);

  return (
    <button
      className="effect-btn"
      onClick={() => setState(0)}
      style={{ fontSize: "2.5em" }}
    >
      state: {state}
    </button>
  );
};
export default Random;
