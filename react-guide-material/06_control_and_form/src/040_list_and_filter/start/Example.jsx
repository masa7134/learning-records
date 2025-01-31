import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)}/>
      <ul>
        {animals
          // trueの結果のパーソンを配列に含める
          .filter(animal => {
              const isMatch = animal.indexOf(filterVal) !== -1;
              console.log(isMatch);
              return isMatch;
          })
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
