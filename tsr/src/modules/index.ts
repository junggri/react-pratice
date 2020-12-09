import {combineReducers} from "redux";
import counter from "./counter";

const rootReducer = combineReducers({counter});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
//루트 리듀서 안에 들어있는 모듈들의 전체 타입
