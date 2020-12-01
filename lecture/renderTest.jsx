import React, {PureComponent} from "react";

class Test extends PureComponent {
   state = {
      counter: 0
   };


   onClick = () => {
      this.setState({});
   };

   render() {
      return (
         <div>
            <button onClick={this.onClick}>클</button>
         </div>
      );
   }
}

export default Test;