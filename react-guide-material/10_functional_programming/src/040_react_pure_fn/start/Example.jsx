let value = 0;// ダメな例 関数のスコープ外で定義しているため

const Child = () => { //ダメな関数
  value++;
  return <div>{value}</div>
}

const ChildPure = ({ value }) => {
  return <div>{value}</div>
}

const Example = () => {
  let value = 0;

  return (
    <>
      <Child/>
      <Child/>
      <Child/>
      <ChildPure value={++value}/>
      <ChildPure value={++value}/>
      <ChildPure value={++value}/>
    </>
  );
};

export default Example;
