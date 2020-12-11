import {applyMiddleware, createStore} from "redux";
import modules from "./modules";
import loggerMiddleWare from "./lib/middle";

const store = createStore(modules, applyMiddleware(loggerMiddleWare));

export default store;