// Export Two Things - initialState, reducer fn

export const initialState = {
  title: "Let's learn reducers!",
  editing: false
};

export const titleReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_EDITING':
      return {
        ...state,
        editing: !state.editing
      };
    case 'UPDATE_TITLE':
      return {
        ...state,
        title: action.payload,
        editing: !state.editing
      };
    default:
      return state;
  }
};

// ADD onClick to "Update Title" button
// Dispatch a new action
// type: "UPDATE_TITLE"
// payload: new text for the tile

// Write a case for "UPDATE_TITLE"
// update the title property in state
