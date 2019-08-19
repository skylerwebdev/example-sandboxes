import React, { useState, useReducer } from 'react';

import { initialState, titleReducer } from '../reducers/titleReducer';
// actions -
// TOGGLE_EDITING
// UPDATE_TITLE

const Title = () => {
  const [newTitleText, setNewTitleText] = useState();

  // useReducer - takes in a reducer, and an initialState obj
  // returns - a state obj, and the dispatch fn
  const [state, dispatch] = useReducer(titleReducer, initialState);
  console.log(state);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i
            className="far fa-edit"
            onClick={() => dispatch({ type: 'TOGGLE_EDITING' })}
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() =>
              dispatch({ type: 'UPDATE_TITLE', payload: newTitleText })
            }
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;
