import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function App() {
  return (
    <div className="App">
      <AngryTitle text="Hello CodeSandbox" />
      <AngrySubTitle text="Start editing to see some magic happen!" />
    </div>
  );
}

const Title = props => {
  return <h1>{props.text}</h1>;
};

const SubTitle = props => {
  return <h2>{props.text}</h2>;
};

// withUpperCase === HOC
const withUpperCase = SubTitle => props => {
  const upperCaseText = props.text.toUpperCase();
  return <SubTitle text={upperCaseText} />;
};

const AngryTitle = withUpperCase(Title);

// Same as:
// const AngryTitle = props => {
//   const upperCaseText = props.text.toUpperCase();
//   return <Title text={upperCaseText} />;
// };

const AngrySubTitle = withUpperCase(SubTitle);
// Same as:
const AngrySubTitle = props => {
  const upperCaseText = props.text.toUpperCase();
  return <SubTitle text={upperCaseText} />;
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
