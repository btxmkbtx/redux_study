/* 
	该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "./constant";

//同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const createIncrementAsyncAction = (data, time) => {
  // store在处理异步action的时候会自动给我们传入两个参数
  // 参数一:dispatch；用于帮我们在异步action中触发其他同步action。
  // 参数二:getPreState；返回修改前的state。
  return (dispatch, getPreState) => {
    console.log(getPreState());
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};
