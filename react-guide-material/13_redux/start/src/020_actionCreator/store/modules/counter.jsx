const initialState = 0;

const reducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case "counter/+":
      return state + payload;
    case "counter/-":
      return state - payload;
    default:
      return state;
  }
};

const add = (payload) => {
    return {
        type: "counter/+",
        // 下の場合コロンより右側は省略可能
        payload: payload
    }
}
const minus = (payload) => {
    return {
        type: "counter/-",
        // 上記の省略形
        payload
    }
}

export {reducer, add, minus}