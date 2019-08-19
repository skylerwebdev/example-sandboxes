import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './Pokemon';

class App extends React.Component {
  state = {
    pokemon: []
  };

  componentDidMount() {
    console.log('CDM');
    /// fetch data from API
    setTimeout(() => {
      this.setState({
        pokemon: data
      });
    }, 3000);
  }

  componentDidUpdate(prevState) {
    console.log('CDU');
  }

  // do lots of JS stuff in between

  render() {
    console.log('rendering!');

    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
