//import { useState } from 'react';
import React from 'react';

function App() {
  return (
    <>
      <Mycount />
    </>
  );
}

/* function MyCount() {
  const [count , setCount ] = useState(0);
  const increament = () => {
    setCount(count +1) ;
  }
  return  (
  <>
  <p>{count}</p>
  <button onClick={increament}>Increment</button>
  </>
  )
} */

  // based on class
  class Mycount extends React.Component {
    constructor(props){
      super(props);
      this.state = {count : 0};
      this.increment = this.increment.bind(this);
    }
    increment(){
      this.setState({count: this.state.count + 1});
    }
    render(){
      return (
        <div>
          <p>{this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
        </div>
      ) 
    }
  }
export default App;
