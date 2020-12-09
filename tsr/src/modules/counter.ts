const INCREASE = "counter/INCREASE" as const
const DECREASE = "counter/DECREASE" as const
//action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const INCREASE_BY = "counter/INCREASE_BY" as const

//액션 생성함수
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

export const increaseBy = (diff: number) => ({
   type: INCREASE_BY,
   payload: diff
})


// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type CounterAction =
   ReturnType<typeof increase>
   | ReturnType<typeof decrease>
   | ReturnType<typeof increaseBy>  //함수값을 추론해준다 여기서 increaBy의 함수의 반환값은 string이 아니라 "INCREASE_BY"

type CounterState = {
   count: number;
}

const initialState: CounterState = {
   count: 0
}

function counter(state: CounterState = initialState, action: CounterAction): CounterState {
   switch (action.type) {
      case INCREASE:
         return {count: state.count + 1}
      case DECREASE:
         return {count: state.count - 1}
      case INCREASE_BY:
         return {count: state.count + action.payload}
      default:
         return state
   }
}

export default counter
