import React from 'react';
import ReactDOM from 'react-dom';
import FormikAnimalForm from './components/AnimalForm';

import './styles.css';

function App() {
  return (
    <div className="App">
      <FormikAnimalForm />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
