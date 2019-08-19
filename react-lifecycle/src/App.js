import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './Pokemon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: data
    };
  }

  render() {
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
