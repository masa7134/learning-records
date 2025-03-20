// reducerを定義するためのimport
import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: 'counter',// nameプロパティにcounterと名前をつける
  initialState: 0,// 初期値の設定
  reducers: {// stateを変更するためのメソッドを定義していく
    add(state, { type, payload }) {
      console.log(type, payload)
      return state + payload;
    },
    minus(state, { type, payload }) {
      console.log(type, payload)
      return state - payload;
    }
  }
})

const { add, minus } = counter.actions;

export { add, minus }
export default counter.reducer;