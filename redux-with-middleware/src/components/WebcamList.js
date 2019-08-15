import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Webcam from './Webcam';

const WebcamList = props => {
  return (
    <>
      <h1>Welcome to the WEB21 webcam app!</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Get Webcam Data'
        )}
      </button>
      {props.webcams &&
        props.webcams.map(cam => <Webcam key={cam.name} webcam={cam} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    webcams: state.webcams
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(WebcamList);

// TASKS
// - get WebcamList connected to the Redux store
// - Bring in the `test` property from state
// - if done correctly, you should see "It's working" dipslayed in the app
// GOOD LUCK 😃
