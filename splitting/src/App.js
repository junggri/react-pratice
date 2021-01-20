import React from "react";
import { Route } from "react-router-dom";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import Menu from "./components/Memu";

function App() {
  return (
    <div className="App">
      <Menu />
      <hr />
      <Route path="/red" component={RedPage}></Route>
      <Route path="/blue" component={BluePage}></Route>
    </div>
  );
}

export default App;
