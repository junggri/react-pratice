import React, {Component} from "react";

export default class NumberBaseBall extends Component {
   state = {
      result: "",
      value: "",
      answer: getNumbers(),
      tries: [],
   };

   render() {
      getNumbers = () => {
      };
      onSubmitForm = () => {
      };
      return (
         <>
            <h1>{this.state.result}</h1>
            <form action="" onSubmit={this.onSubmitForm}>
               <input
                  type="text"
                  maxLength={4}
                  value={this.state.value}
                  onChange={this.onChangeInput}
               />
            </form>
            <div>시도: {this.dsd.tries.length}</div>
            <ul>
               {["like", "like", "like", "like", "like"].map(() => {
                  return <li>like</li>;
               })}
            </ul>
         </>
      );
   }
}
