import { useState } from "react";

const Example = () => {
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value);

  // map用
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];
  return (
    <>
      {RADIO_COLLECTION.map((value) => {

        return (
          <label key={value}>
            <input type="radio"
              value={value} // 選択されたときに取得したい値
              checked={fruit === value} // trueのときにラジオボタンにチェックがつく
              onChange={onChange}
            />
            {value}
          </label>
        );
      })}




      {/* <label>
        <input type="radio"
          value="Apple" // 選択されたときに取得したい値
          checked={fruit === "Apple"} // trueのときにラジオボタンにチェックがつく
          onChange={onChange}
        />
        Apple
      </label>
      <label>
        <input type="radio"
          value="Banana" // 選択されたときに取得したい値
          checked={fruit === "Banana"} // trueのときにラジオボタンにチェックがつく
          onChange={onChange}
        />
        Banana
      </label>
      <label>
        <input type="radio"
          value="Cherry" // 選択されたときに取得したい値
          checked={fruit === "Cherry"} // trueのときにラジオボタンにチェックがつく
          onChange={onChange}
        />
        Cherry
      </label> */}
      <h3>私は{fruit}が食べたい</h3>
    </>
  );
};

export default Example;
