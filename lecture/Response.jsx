import React from 'react';

class ResponseCheck extends React.Component {
   state = {
      state: 'waiting',
      massage: '클릭해서 시작하세요',
      result: []
   };
   onClickScreen = () => {
      const {state, message, result} = this.state;
      if (state === "waiting") {
         this.setState({
            state: 'ready',
            message: "초록색이 되면 클릭하세요"
         });
         setTimeout(() => {
            this.setState({
               state: 'now',
               message: "지금클릭"
            });
         }, Math.floor(Math.random() * 1000) + 2000);
      } else if (state === "ready") {

      } else if (state === "now") {
         this.setState({
            state: "waiting",
            message: "클릭해서 시작",
            result: []
         });
      }
   };

   render() {
      return (
         <>
            <div id="screen"
                 className={this.state.state}
                 onClick={this.onClickScreen}

            >
               {this.state.massage}
            </div>
            {this.state.result.length === 0
               ? null
               : <div>평균시간 {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms</div>}

         </>
      );
   }
}

export default ResponseCheck;