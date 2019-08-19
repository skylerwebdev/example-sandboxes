import React from 'react';

const withConditionalRender = FirstComp => SecondComp =>
  class extends React.Component {
    render() {
      if (localStorage.getItem('showFirst')) {
        return <FirstComp />;
      } else {
        return <SecondComp />;
      }
    }
  };

export default withConditionalRender;
