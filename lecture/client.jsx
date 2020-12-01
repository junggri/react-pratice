import React from "react";
import ReactDom from "react-dom";
import Test from "./renderTest";

const WordRelay = require("./wordRelay");

ReactDom.render(<Test/>, document.querySelector("#root"));
