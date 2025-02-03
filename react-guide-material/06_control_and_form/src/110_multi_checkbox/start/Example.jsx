import { useState } from "react";
import { requestFormReset } from "react-dom";

// POINT 複数チェックボックスの実装
const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);
  const handleChange = (e) => {
    const newFruits = fruits.map(fruit => {
      const newFruit = { ...fruit };
      if(newFruit.label == e.target.value) {
        newFruit.checked = !fruit.checked; // ！でfalseならtrue、trueならfalseにして代入している
      }
      return newFruit;
    })

    setFruits(newFruits);



    // let sumVal = 0;
    // newFruits.forEach(fruit => {
    //   if(fruit.checked) {
    //     sumVal += fruit.value;
    //   }
    // })

        // newFruits
        // .filter((fruit) => fruit.checked)
        // .forEach((fruit) => (sumVal = sumVal + fruit.value))

      // 上級者向け reduceメソッド使用（配列の要素を一つにまとめるメソッド）
      let sumVal = newFruits
        .filter((fruit) => fruit.checked)
        .reduce((sumVal, fruit) => sumVal + fruit.value, 0);

    setSum(sumVal);
  }

  return (
    <div>
      {fruits.map(fruits => {
        return (
          <div key={fruits.label}>
            <input 
              id={fruits.label}
              type="checkbox"
              value={fruits.label}
              checked={fruits.checked}
              onChange={handleChange}
            />
            <label htmlFor={fruits.label}>
              {fruits.label}:{fruits.value}
            </label>
          </div>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );   
};

export default Example;
