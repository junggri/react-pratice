import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules"; //리듀서 타입
import {decrease, increase, increaseBy} from "../modules/counter";
import Counter from "../components/Counter"

function CounterContainer() {
   const count = useSelector((state: RootState) => state.counter.count);
   const dispatch = useDispatch();

   const onIncrease = () => {
      dispatch(increase())//함수를 디스패치
   }
   const onDecrease = () => {
      dispatch(decrease())
   }
   const onIncreaseBy = (diff: number) => {
      dispatch(increaseBy(diff))
   }

   return (
      <Counter count={count} onDecrease={onDecrease} onIncrease={onIncrease} onIncreaseBy={onIncreaseBy}/>
   )
}

export default CounterContainer