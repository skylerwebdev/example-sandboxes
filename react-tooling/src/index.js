import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";

import "./styles.css";

// describe ReactJS and the problems that it tries to solve
// explain what components are and how they work in React
// explain what state is in web applications and demonstrate how to make a React component stateful
// change the state of the component with a click listener

function App() {
  // Declare a new state variable, which we'll call "count"
  return (
    <div>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// /*Example of how the code would look as a Class component*/
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Add 1
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count * 5 })}>
//           Multiply by 5
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count * 0 })}>
//           Reset
//         </button>
//       </div>
//     );
//   }
// }
