import { CONST_VAL } from "someModule"

const Example = () => {
  // 関数型（純粋関数）
  // POINT fn(決まった引数) -> 決まった戻り値
  // POINT 関数外の状態（データ）は参照・変更しない。
  // POINT 関数外に影響を及ぼさない。
  // ・引数で渡された値を変更しない。
  // 不変性()
  // 上記の要件を満たさない操作は「副作用」と呼ぶ。

  
  const val1 = 2, val2 = 3;// val2はスコープ外
  const result;
  const add = (val1) => {
    console.log() // 関数外に影響をお呼ぼしている
    result= val1 + val2; // 関数外に影響をお呼ぼしている
    return val1 + val2;
  }

  return (
    <>
      <div>純粋関数:{add(val1, val2)}</div>
    </>
  );
};

export default Example;
