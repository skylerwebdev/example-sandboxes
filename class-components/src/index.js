import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  // Class properties - state
  // methods -> setState, lifecycle
  constructor() {
    super();
    // state hook => const [str, setStr] = useState('Hello!')
    // state hook => const [arr, setArr] = useState([1,2,3,4,5])
    // state hook => const [num, setNum] = useState();
    this.state = {
      str: 'Hello!',
      arr: [1, 2, 3, 4, 5],
      num: null // not initialized with a value
    };
  }

  render() {
    console.log(this.setState);
    return (
      <div className="App">
        <h1>{this.state.str}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// Parent Class/Child Class !== Parent Component/Child Comp
