// POINT propsの流れは一方通行

import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
  // POINT propsは読み取り専用
  const name = 'Tom';
  return (
    <>
      <Hello name={name}/>
      <Bye name={name}/>
    </>
  );
};

export default Example;

{/* •	name={name} は props を渡しています。
    •	props とは、親コンポーネントから子コンポーネントに(一方通行)値を渡す仕組みです。
    •	この場合、name というプロパティに 'Tom' が渡されます。 */}