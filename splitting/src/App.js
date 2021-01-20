import React from "react";
import {Route} from "react-router-dom";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import loadable from "@loadable/component";
import Menu from "./components/Memu";

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
         <Menu/>
         <hr/>
         <Route path="/red" component={RedPage}></Route>
         <Route path="/blue" component={BluePage}></Route>
      </div>
   );
}

export default App;
