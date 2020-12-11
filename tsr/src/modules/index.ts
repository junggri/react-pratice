import {combineReducers} from "redux";
import counter from "./counter";
import todos from "./todos"

const rootReducer = combineReducers({counter, todos});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

//루트 리듀서 안에 들어있는 모듈들의 전체 타입
