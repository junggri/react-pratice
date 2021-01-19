import React from "react";
import logo from "./logo.svg";
import "./App.css";
import loadable from "@loadable/component";

const SplitMe = loadable(() => import("./Spliteme"), {fallback: <div>asd</div>});


function App() {
   const onClick = () => {
      import("./notify").then(result => result.notify());
   };
   const onMouse = () => {
      SplitMe.preload();
   };

   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p onClick={onClick} onMouseOver={onMouse}>Hello react</p>

         </header>
      </div>
   );
}

export default App;
