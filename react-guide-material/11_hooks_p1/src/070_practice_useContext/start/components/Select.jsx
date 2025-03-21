import { useCalc, useCalcDispatch } from "../context/CalcContext";

const Select = () => {

    const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

    const state = useCalc();
    const dispatch = useCalcDispatch();

      const calculate = (e) => {
    dispatch({type: e.target.value});
  };

    return(
        <select value={state.type} name="type" onChange={calculate}>
        {CALC_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    );
};

export default Select;