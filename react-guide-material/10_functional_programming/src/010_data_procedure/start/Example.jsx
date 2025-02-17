const Example = () => {
  // 関数型
  // 状態(data)と処理(関数A~C)を分離して管理
  // A(data) -> B(data) -> C(data) -> 結果 
  //  状態と処理は切り離す
  const nums = [1, 2, 3];
  const sum = (arry) => arry.reduce((accu, curr) => accu + curr)
    // {
    // const nums = arry;
    // let sumValue = 0;
    // for(let i = 0; i < nums.length; i++) {
    //   sumValue += nums[i];
    // }
    // 少し関数型の書き方
    // nums.forEach(num => sumValue += num);
    // 完全に関数型の書き方
    // let sumValue = nums.reduce((accu, curr) => accu + curr);
    // return sumValue;
  // }

  //  オブジェクト指向型
  //  状態(obj自身にデータとメソッドを保持)と処理を対で管理
  // obj, method(); -> 結果
  const numObj = {
    nums: [1, 2, 3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for(let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    }
  }

  return (
    <>
      <div>オブジェクト指向型:{numObj.sum()}</div>
      <div>関数型:{sum(nums)}</div>
    </>
  );
};

export default Example;
