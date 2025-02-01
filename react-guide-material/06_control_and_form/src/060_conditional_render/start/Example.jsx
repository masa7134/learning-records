import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? ""; // Null合体演算子
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {

            // if文
            // if(animal === "Dog") {
            //   return <li key={animal}>{animal} + ★</li>
            // } else {
            //   return <li key={animal}>{animal}</li>
            // }

            return <li key={animal}>{
            // 三項演算、重複する記述がすくないので良いコードといえる、上のif分だとreturn <li>などが重複している
              // animal + (animal === "Dog" 
              // ? "★"
              // : "")}
              // &&  (アンド条件)さらにコードを少なくできる,null合体演算子も利用
              animal ?? "nullまたはundefinedでした"}{ animal === "Dog" &&  "★" }
            </li>



          })}
      </ul>
    </>
  );
};

export default Example;
