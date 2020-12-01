import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
   }

   handleSubmit(event) {
      alert('A name was submitted: ' + this.input.current.value);
      event.preventDefault();
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <label>
               Name:
               <input
                  type="text"
               />
            </label>
            <input type="submit" value="Submit"/>
         </form>
      );
   }
}

export default App;