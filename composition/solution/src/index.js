import React from 'react';
import ReactDOM from 'react-dom';
import First from './components/First';
import Second from './components/Second';
import withConditionalRender from './components/withConditionalRender';

import './styles.css';

const DynamicComponent = withConditionalRender(First)(Second);

class App extends React.Component {
  state = {
    showFirst: true
  };

  toggle = e => {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem('showFirst'))) {
      localStorage.removeItem('showFirst');
      this.setState({
        showFirst: false
      });
    } else {
      localStorage.setItem('showFirst', JSON.stringify({ isLoggedIn: true }));
      this.setState({
        showFirst: true
      });
    }
  };

  render() {
    return (
      <div className="App">
        <DynamicComponent />
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}

/* 
  1. Created HOC
  2. Inside the HOC we built the if logic for the conditional rendering
  3. Created two components to be rendered
  4. In the parent component (index.js) import HOC, and the two components
  5. Create a new const to "capture" the class returned from the HOC
  6. Ivoke the HOC (twice) and pass in the two components
  7. Render the new const in App
  8. If HOC needs props, pass in where new const is rendered
*/

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
