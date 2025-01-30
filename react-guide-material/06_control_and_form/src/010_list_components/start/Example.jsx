
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {

  const animalList = [];
  // forは文なのでJSX内では使用できない
  for(const animal of animals){
    animalList.push(<li>{animal}</li>);
  }

  // animals.map((animal) =>以下は式なのでJsx内で使用可能、２４行目！
  // const helloAnimals = animals.map((animal) => <li>Hello, {animal}</li>)

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList} */}
        {/* {helloAnimals} */}
        {animals.map((animal) => <li>Hello, {animal}</li>)} 
      </ul>
    </>
  );
};

export default Example;
